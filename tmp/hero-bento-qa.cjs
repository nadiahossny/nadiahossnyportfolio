const fs=require('fs'),path=require('path'),http=require('http'),{pathToFileURL}=require('url');
const {chromium}=require('C:/Users/katty/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out=path.resolve('artifacts/hero-bento');fs.mkdirSync(out,{recursive:true});
const root=path.resolve('dist'),mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.pdf':'application/pdf'};
const server=http.createServer((req,res)=>{
 if(req.url.startsWith('/_vercel/')){res.writeHead(204).end();return;}
 let file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
 if(!file.startsWith(root+path.sep)){file=path.join(root,'index.html');}
 if(!fs.existsSync(file)||fs.statSync(file).isDirectory())file=path.join(root,'index.html');
 res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);
});
const assert=(v,m)=>{if(!v)throw Error(m);};
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${server.address().port}`;
 const probe=http.createServer();await new Promise(r=>probe.listen(0,'127.0.0.1',r));const port=probe.address().port;await new Promise(r=>probe.close(r));
 const profile=fs.mkdtempSync(path.join(require('os').tmpdir(),'nadia-bento-'));
 const context=await chromium.launchPersistentContext(profile,{executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true,args:[`--remote-debugging-port=${port}`],viewport:{width:1280,height:900}});
 const page=context.pages()[0],errors=[];page.on('pageerror',e=>errors.push(e.message));
 try{
  if(process.argv.includes('--lighthouse')){
   const {default:lighthouse}=await import(pathToFileURL('C:/Users/katty/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/lighthouse/core/index.js'));
   const results=[];
   for(const lang of ['en','ar']){
    await page.goto(base);await page.evaluate(l=>localStorage.setItem('nadia_portfolio_lang',l),lang);
    const {lhr}=await lighthouse(base,{port,onlyCategories:['accessibility'],output:'json',logLevel:'error',disableStorageReset:true,formFactor:'desktop',screenEmulation:{mobile:false,width:1280,height:900,deviceScaleFactor:1,disabled:false}});
    fs.writeFileSync(path.join(out,`lighthouse-${lang}.json`),JSON.stringify(lhr,null,2));
    const row={lang,score:lhr.categories.accessibility.score*100,failures:Object.values(lhr.audits).filter(a=>a.score!==null&&a.score<1).map(a=>({id:a.id,details:a.details}))};results.push(row);console.log(JSON.stringify(row));
   }
   fs.writeFileSync(path.join(out,'lighthouse-summary.json'),JSON.stringify(results,null,2));
  }else{
   const results=[];
   for(const lang of ['en','ar']){
    await page.emulateMedia({reducedMotion:'no-preference'});await page.goto(base);await page.evaluate(l=>localStorage.setItem('nadia_portfolio_lang',l),lang);await page.reload({waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(450);
    for(const width of [320,375,768,1024,1280,1440]){
     await page.setViewportSize({width,height:900});await page.waitForTimeout(150);await page.evaluate(()=>scrollTo(0,0));
     const check=await page.evaluate(()=>{
      const hero=document.querySelector('.bento-hero'),cards=[...hero.querySelectorAll('.hero-bento-card')],visible=e=>e.checkVisibility({visibilityProperty:true})&&!e.closest('.sr-only');
      const bounds=e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom};};
      const bad=[...hero.querySelectorAll('*')].filter(e=>{const r=e.getBoundingClientRect();return visible(e)&&!e.closest('[aria-hidden=true]')&&(r.left< -1||r.right>innerWidth+1);}).map(e=>({cls:e.className,...bounds(e)}));
      const small=[...hero.querySelectorAll('*')].filter(e=>visible(e)&&[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim())&&parseFloat(getComputedStyle(e).fontSize)<16).map(e=>({cls:e.className,size:getComputedStyle(e).fontSize}));
      const images=[...hero.querySelectorAll('img:not([aria-hidden=true])')].map(e=>({natural:e.naturalWidth>0,fit:getComputedStyle(e).objectFit,ratio:e.getBoundingClientRect().width/e.getBoundingClientRect().height,naturalRatio:e.naturalWidth/e.naturalHeight}));
      return{overflow:document.documentElement.scrollWidth>innerWidth+1,bad,small,cards:cards.map(e=>({cls:e.className,...bounds(e),radius:getComputedStyle(e).borderRadius,border:getComputedStyle(e).borderWidth,shadow:getComputedStyle(e).boxShadow,background:getComputedStyle(e).backgroundColor})),images,dir:document.documentElement.dir,fonts:{quicksand:document.fonts.check('16px Quicksand'),dmSans:document.fonts.check('16px "DM Sans"')},heading:hero.querySelector('h1').textContent};
     });
     assert(check.cards.length===6,'six cards');assert(!check.overflow&&!check.bad.length&&!check.small.length,`layout ${lang} ${width}: ${JSON.stringify(check)}`);assert(check.images.every(i=>i.natural),'images loaded');assert(check.cards.every(c=>c.border==='0px'&&c.radius==='24px'&&c.background==='rgb(255, 255, 255)'),'card surfaces');
     if(width<1024)assert(check.cards.every((c,i,a)=>!i||c.y>=a[i-1].bottom+23),'single stacked column');
     else{const [intro,apms,stats]=check.cards;assert(intro.width>apms.width*1.9&&intro.width>stats.width*1.9,'largest intro');assert(lang==='en'?apms.x<intro.x&&stats.x>intro.x:apms.x>intro.x&&stats.x<intro.x,'RTL desktop mirror');}
     results.push({lang,width,...check});
     if([375,768,1280].includes(width))await page.locator('.bento-hero').screenshot({path:path.join(out,`${lang}-${width}.png`)});
    }
    for(const width of [375,1280]){
     await page.setViewportSize({width,height:900});const style=await page.addStyleTag({content:'html {font-size:200% !important}'});await page.waitForTimeout(150);
     const check=await page.locator('.bento-hero').evaluate(hero=>({overflow:document.documentElement.scrollWidth>innerWidth+1,scrollWidth:document.documentElement.scrollWidth,outside:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return !e.closest('.bento-hero,.sr-only,[aria-hidden=true]')&&e.checkVisibility({visibilityProperty:true})&&(r.left< -1||r.right>innerWidth+1)}).slice(0,8).map(e=>({cls:e.className,text:e.textContent.slice(0,50),left:e.getBoundingClientRect().left,right:e.getBoundingClientRect().right})),bad:[...hero.querySelectorAll('*')].filter(e=>{const r=e.getBoundingClientRect();return e.checkVisibility({visibilityProperty:true})&&!e.closest('.sr-only,[aria-hidden=true]')&&(r.left< -1||r.right>innerWidth+1)}).map(e=>({cls:e.className,text:e.textContent.slice(0,50)}))}));
     if(check.overflow)check.scrollContainers=await page.evaluate(()=>[...document.querySelectorAll('body *')].filter(e=>e.checkVisibility({visibilityProperty:true})&&e.clientWidth&&e.scrollWidth>e.clientWidth+1).map(e=>({cls:e.className,tag:e.tagName,client:e.clientWidth,scroll:e.scrollWidth,text:e.textContent.slice(0,80)})).slice(-15));
     const heroContentOverflow=await page.locator('.bento-hero').evaluate(hero=>[...hero.querySelectorAll('*')].filter(e=>e.checkVisibility({visibilityProperty:true})&&!e.closest('.sr-only')&&e.clientWidth&&e.scrollWidth>e.clientWidth+1).map(e=>({cls:e.className,client:e.clientWidth,scroll:e.scrollWidth})));
     results.push({lang,width,enlarged:true,...check,heroContentOverflow});assert(!check.bad.length&&!heroContentOverflow.length,`enlarged hero ${lang} ${width}: ${JSON.stringify({...check,heroContentOverflow})}`);await style.evaluate(e=>e.remove());
    }
    await page.setViewportSize({width:1280,height:900});
    // Both project proof cards and the two main actions retain their destinations.
    assert(await page.locator('.hero-bento-actions a').first().getAttribute('href')==='/#selected-work','work destination');assert(await page.locator('.hero-bento-actions a').last().getAttribute('href')==='/services','services destination');
    await page.locator('.hero-bento-apms').click();assert(new URL(page.url()).pathname==='/work/apms','APMS card');await page.goBack();
    await page.locator('.hero-bento-aura').click();assert(new URL(page.url()).pathname==='/work/auraleaf','AuraLeaf card');await page.goBack();
    await page.locator('.hero-bento-actions a').first().click();await page.waitForTimeout(400);assert(new URL(page.url()).hash==='#selected-work','work anchor');
    await page.goto(base);await page.waitForTimeout(100);await page.keyboard.press('Tab');
    for(const link of await page.locator('.bento-hero a').all()){await link.focus();const focus=await link.evaluate(e=>({outline:getComputedStyle(e).outlineStyle,width:parseFloat(getComputedStyle(e).outlineWidth),animated:e.closest('.bento-hero').querySelector('.hero-bento-grid').getAnimations().length}));assert(focus.outline!=='none'&&focus.width>=2&&!focus.animated,'focus visible and settles fade');}
    const cloudBefore=await page.locator('.hero-bento-clouds').evaluate(e=>getComputedStyle(e).transform);await page.waitForTimeout(500);assert(cloudBefore==='none'&&await page.locator('.hero-bento-clouds').evaluate(e=>getComputedStyle(e).transform)==='none','static clouds');
    await page.emulateMedia({reducedMotion:'reduce'});await page.reload({waitUntil:'networkidle'});assert(await page.locator('.bento-hero').evaluate(e=>e.getAnimations({subtree:true}).length)===0,'reduced motion');
    // Inspect computed text/background pairs; hero copy sits on opaque white cards.
    const contrast=await page.locator('.bento-hero').evaluate(hero=>{
     const rgb=s=>{const n=s.match(/[\d.]+/g)?.map(Number);return n?.length>=3?[n[0],n[1],n[2],n[3]??1]:[255,255,255,0];},over=(f,b)=>[...f.slice(0,3).map((v,i)=>v*f[3]+b[i]*(1-f[3])),1],lum=c=>c.slice(0,3).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
     const pairs=[];for(const e of hero.querySelectorAll('*')){if(!e.checkVisibility({visibilityProperty:true})||e.closest('.sr-only')||![...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim()))continue;let bgs=[],p=e;while(p){bgs.push(rgb(getComputedStyle(p).backgroundColor));p=p.parentElement;}let bg=[255,255,255,1];for(const c of bgs.reverse())bg=over(c,bg);const a=lum(over(rgb(getComputedStyle(e).color),bg)),b=lum(bg);pairs.push({text:e.textContent.trim().slice(0,60),ratio:(Math.max(a,b)+.05)/(Math.min(a,b)+.05)});}return{minimum:Math.min(...pairs.map(p=>p.ratio)),pairs};
    });assert(contrast.minimum>=4.5,'contrast');results.push({lang,contrast,interactions:'passed',reducedMotion:'passed'});console.log(JSON.stringify({lang,layouts:'passed',contrast:contrast.minimum,interactions:'passed'}));
   }
   fs.writeFileSync(path.join(out,'qa.json'),JSON.stringify({results,errors},null,2));assert(!errors.length,'no runtime errors');
  }
 }finally{server.closeAllConnections();server.close();await context.close();}
})().catch(e=>{console.error(e);process.exitCode=1;server.closeAllConnections();server.close();});
