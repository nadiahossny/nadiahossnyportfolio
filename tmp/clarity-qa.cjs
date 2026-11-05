const fs = require('fs');
const path = require('path');
const http = require('http');
const { pathToFileURL } = require('url');
const { chromium } = require('C:/Users/katty/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const out = path.resolve('artifacts/clarity');
fs.mkdirSync(out, {recursive:true});
const root = path.resolve('dist');
const mime = {'.html':'text/html','.js':'application/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.pdf':'application/pdf','.woff2':'font/woff2','.json':'application/json'};
const server = http.createServer((req,res) => {
 if(req.url.startsWith('/_vercel/')) {res.writeHead(204).end();return;}
 let file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url,'http://localhost').pathname));
 if (!file.startsWith(root + path.sep) && file !== root) {res.writeHead(403).end();return;}
 if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(root,'index.html');
 res.setHeader('Content-Type',mime[path.extname(file)] || 'application/octet-stream');
 fs.createReadStream(file).pipe(res);
});
const routes = ['/', '/work', '/about', '/services', '/work-with-me', '/visuals', '/graphic-design', '/creative-corner', '/work/auraleaf', '/work/apms', '/work/taskly', '/work/notes-app', '/work/ieee-web', '/work/byto-academy', '/work/simplibank', '/work/bloom-gift', '/work/ecomm-app', '/not-a-page'];
const keyRoutes = ['/', '/work', '/about', '/services', '/visuals', '/work/apms', '/creative-corner'];
const slug = r => r==='/'?'home':r.slice(1).replaceAll('/','-');
const assert = (v,m) => { if(!v) throw new Error(m); };
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const base = `http://127.0.0.1:${server.address().port}`;
 const probe=http.createServer();await new Promise(resolve=>probe.listen(0,'127.0.0.1',resolve));const debugPort=probe.address().port;await new Promise(resolve=>probe.close(resolve));
 const profile=fs.mkdtempSync(path.join(require('os').tmpdir(),'nadia-clarity-'));
 const context = await chromium.launchPersistentContext(profile, {executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',headless:true,args:[`--remote-debugging-port=${debugPort}`],viewport:{width:1280,height:900}});
 const page = context.pages()[0];
 const errors=[];
 page.on('pageerror', e=>errors.push(e.message));
 try {
  if (process.argv.includes('--contrast')) {
   const results=[];
   for(const lang of ['en','ar']) {
    await page.goto(base);await page.evaluate(lang=>localStorage.setItem('nadia_portfolio_lang',lang),lang);
    for(const route of keyRoutes) {
     await page.goto(base+route,{waitUntil:'networkidle'});
     await page.emulateMedia({reducedMotion:'reduce'});
     const check=await page.evaluate(()=>{
      const rgb=s=>{const m=s.match(/[\d.]+/g)?.map(Number);return m?.length>=3?[m[0],m[1],m[2],m[3]??1]:[255,255,255,0];};
      const over=(f,b)=>[...f.slice(0,3).map((v,i)=>v*f[3]+b[i]*(1-f[3])),1];
      const lum=c=>c.slice(0,3).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
      const rows=[];
      for(const e of document.querySelectorAll('main *, header *, footer *')){
       if(![...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim())||!e.getClientRects().length||e.closest('[aria-hidden=true], .sr-only'))continue;
       const style=getComputedStyle(e);if(style.visibility==='hidden')continue;
       let backgrounds=[],p=e;
       while(p){backgrounds.push(rgb(getComputedStyle(p).backgroundColor));p=p.parentElement;}
       let bg=[255,255,255,1];for(const c of backgrounds.reverse())bg=over(c,bg);
       const fg=over(rgb(style.color),bg),a=lum(fg),b=lum(bg),ratio=(Math.max(a,b)+.05)/(Math.min(a,b)+.05);
       rows.push({text:e.textContent.trim().slice(0,70),cls:typeof e.className==='string'?e.className:e.tagName,ratio:+ratio.toFixed(2),color:style.color,background:bg});
      }
      return {pairs:rows.length,min:Math.min(...rows.map(r=>r.ratio)),failures:rows.filter(r=>r.ratio<4.5)};
     });
     results.push({route,lang,...check});
    }
   }
   const sharp=require('sharp');
   const {data,info}=await sharp('src/assets/cloudy-bg.png').ensureAlpha().raw().toBuffer({resolveWithObject:true});
   const lum=c=>c.map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
   const foreground=lum([26,54,96]);let minimum=Infinity;
   for(let i=0;i<data.length;i+=info.channels){const alpha=data[i+3]/255*.38,bg=[191,228,255].map((v,j)=>data[i+j]*alpha+v*(1-alpha));minimum=Math.min(minimum,(lum(bg)+.05)/(foreground+.05));}
   fs.writeFileSync(path.join(out,'contrast.json'),JSON.stringify({results,heroCloudMinimumContrast:minimum},null,2));
   console.log(JSON.stringify({results,heroCloudMinimumContrast:minimum},null,2));
  } else if (process.argv.includes('--lighthouse')) {
   const {default:lighthouse} = await import(pathToFileURL('C:/Users/katty/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/lighthouse/core/index.js'));
   const results=[];
   for(const lang of ['en','ar']){
    await page.goto(base); await page.evaluate(lang=>localStorage.setItem('nadia_portfolio_lang',lang),lang);
    for(const route of [...keyRoutes,'/work/taskly','/not-a-page']) {
     const result=await lighthouse(base+route,{port:debugPort,onlyCategories:['accessibility'],output:'json',logLevel:'error',disableStorageReset:true,formFactor:'desktop',screenEmulation:{mobile:false,width:1280,height:900,deviceScaleFactor:1,disabled:false}});
     const lhr=result.lhr;
     fs.writeFileSync(path.join(out,`lighthouse-${slug(route)}-${lang}.json`),JSON.stringify(lhr,null,2));
     const failures=Object.values(lhr.audits).filter(a=>a.score!==null&&a.score<1).map(a=>({id:a.id,title:a.title,details:a.details}));
     const row={route,lang,score:lhr.categories.accessibility.score*100,failures};results.push(row);
     console.log(JSON.stringify({route,lang,score:row.score,failures:failures.map(a=>a.id)}));
    }
   }
   fs.writeFileSync(path.join(out,'lighthouse-summary.json'),JSON.stringify(results,null,2));
  } else {
   const results=[];
   const selectedRoutes=process.argv.includes('--targeted')?['/not-a-page','/work/ieee-web']:routes;
   for(const lang of ['en','ar']) {
    await page.goto(base); await page.evaluate(lang=>localStorage.setItem('nadia_portfolio_lang',lang),lang);
    for(const route of selectedRoutes) {
     await page.goto(base+route,{waitUntil:'networkidle'});
     await page.emulateMedia({reducedMotion:'reduce'});
     for(const width of [320,375,390,768,1280,1440]) {
      await page.setViewportSize({width,height:900});await page.waitForTimeout(100);
      if(process.argv.includes('--targeted')) await page.locator('details').evaluateAll(es=>es.forEach(e=>e.open=true));
      await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,15));}window.scrollTo(0,0);});
      const check=await page.evaluate(()=>{
       const visible=e=>e.checkVisibility({visibilityProperty:true});
       const bad=[...document.querySelectorAll('main *')].map(e=>({e,r:e.getBoundingClientRect()})).filter(({e,r})=>visible(e)&&r.width>0&&(r.left< -1||r.right>innerWidth+1)&&!e.closest('.creative-board, [aria-hidden="true"]')).slice(0,8).map(({e,r})=>({tag:e.tagName,cls:e.className,left:r.left,right:r.right}));
       const small=[...document.querySelectorAll('main p, main li, main button, main a, footer p, footer a')].filter(e=>visible(e)&&parseFloat(getComputedStyle(e).fontSize)<16).slice(0,8).map(e=>({tag:e.tagName,cls:e.className,size:getComputedStyle(e).fontSize,text:e.textContent.slice(0,60)}));
       return {overflow:document.documentElement.scrollWidth>innerWidth+1,bad,small,dir:document.documentElement.dir,h1:document.querySelector('h1')?.textContent};
      });
      results.push({route,lang,width,...check});
      if(keyRoutes.includes(route)&&[375,768,1280].includes(width)) await page.screenshot({path:path.join(out,`${slug(route)}-${lang}-${width}.png`),fullPage:true});
     }
     // Text resize without changing the viewport or hiding overflow.
     await page.setViewportSize({width:375,height:900});
     await page.addStyleTag({content:'html { font-size: 200% !important; }'});
     const enlarged=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,bad:[...document.querySelectorAll('main p, main a, main button')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&getComputedStyle(e).visibility!=='hidden'&&(r.left< -1||r.right>innerWidth+1)}).slice(0,4).map(e=>({cls:e.className,text:e.textContent.slice(0,70)}))}));
     results.push({route,lang,width:375,enlarged:true,...enlarged});
     console.log(JSON.stringify({route,lang,issues:results.filter(r=>r.route===route&&r.lang===lang&&(r.overflow||r.bad?.length||r.small?.length)).length}));
    }
   }
   fs.writeFileSync(path.join(out,process.argv.includes('--targeted')?'responsive-targeted.json':'responsive.json'),JSON.stringify({results,errors},null,2));
   console.log('LAYOUT COMPLETE',results.length,'checks; runtime errors',errors.length);
   const interactions=[];
   for(const lang of ['en','ar']){
    await page.emulateMedia({reducedMotion:'no-preference'});
    await page.goto(base);await page.evaluate(lang=>localStorage.setItem('nadia_portfolio_lang',lang),lang);await page.reload();
    await page.setViewportSize({width:375,height:900});
    await page.emulateMedia({reducedMotion:'no-preference'});
    const menu=page.locator('button[aria-controls="mobile-navigation"]');
    await menu.click();assert(await menu.getAttribute('aria-expanded')==='true','mobile menu opens');
    await page.keyboard.press('Escape');assert(await menu.getAttribute('aria-expanded')==='false','Escape closes menu');
    assert(await menu.evaluate(e=>e===document.activeElement),'menu focus restored');
    const language=page.locator('.site-header button[aria-label^="EN | عربي"]:visible');await language.click();assert(await page.locator('html').getAttribute('dir')===(lang==='en'?'rtl':'ltr'),'language mirrors');await language.click();
    await page.locator('.cloud-theatre .button-primary').click();await page.waitForTimeout(400);assert(new URL(page.url()).hash==='#selected-work','work anchor');
    const sky=page.locator('.hero-motion-control');await sky.click();assert((await sky.textContent()).includes(lang==='en'?'Resume':'استئناف'),'sky pauses');await sky.click();assert((await sky.textContent()).includes(lang==='en'?'Pause':'إيقاف'),'sky resumes');
    const playback=page.locator('.testimonial-playback');await playback.scrollIntoViewIfNeeded();await playback.click();assert(await playback.getAttribute('aria-pressed')==='true','pause button');assert(await playback.locator('svg').count()===1,'SVG rendered');await playback.click();assert(await playback.getAttribute('aria-pressed')==='false','play button');await playback.click();
    const dots=page.locator('.testimonial-dots button');await dots.nth(1).click();assert(await dots.nth(1).getAttribute('aria-current')==='true','select quote');await dots.nth(1).focus();await page.keyboard.press('ArrowRight');assert(await dots.nth(lang==='en'?2:0).getAttribute('aria-current')==='true','RTL arrow navigation');
    await page.evaluate(()=>document.activeElement.blur());const stage=page.locator('.testimonial-stage');await stage.dispatchEvent('pointerdown',{clientX:260});await stage.dispatchEvent('pointerup',{clientX:80});assert(await dots.nth(1).getAttribute('aria-current')==='true'||await dots.nth(3).getAttribute('aria-current')==='true','swipe changes quote');
    await page.goto(base+'/work');await page.locator('.filter-bar button').nth(3).click();assert(await page.locator('.project-preview').count()>0,'work filter');
    await page.goto(base+'/work/apms');const visual=page.locator('.case-visual').first();await visual.click();await page.locator('.dialog-zoom').click();assert(await page.locator('.image-canvas').getAttribute('class').then(c=>c.includes('is-zoomed')),'image zoom');await page.keyboard.press('ArrowRight');await page.keyboard.press('Escape');assert(await page.locator('.image-dialog').count()===0,'image closes');assert(await visual.evaluate(e=>e===document.activeElement),'image focus restored');
    await page.goto(base+'/visuals');const cover=page.locator('.collection-cover').first();await cover.click();assert(await page.getByRole('dialog').count()===1,'collection opens');await page.keyboard.press('ArrowRight');await page.keyboard.press('Escape');assert(await page.getByRole('dialog').count()===0,'collection closes');assert(await cover.evaluate(e=>e===document.activeElement),'collection focus restored');
    await page.goto(base+'/services');assert(await page.locator('form input[type=email]').count()===1,'labelled contact form');assert(await page.locator('a[href^="mailto:"]').count()>0,'email link');
    const pdf=await page.request.get(base+'/resume.pdf');assert(pdf.status()===200 && pdf.headers()['content-type']==='application/pdf','resume PDF');
    await page.goto(base);await page.emulateMedia({reducedMotion:'reduce'});await page.reload();assert(await page.locator('.hero-motion-control').count()===0,'static sky preference');await page.locator('.testimonial-controls').scrollIntoViewIfNeeded();const before=await page.locator('.testimonial-dots button[aria-current=true]').getAttribute('aria-label');await page.waitForTimeout(6400);assert(await page.locator('.testimonial-dots button[aria-current=true]').getAttribute('aria-label')===before,'reduced motion stops carousel');
    await page.goto(base);await page.waitForTimeout(150);for(let i=0;i<10&&!await page.locator('.skip-link').evaluate(e=>e===document.activeElement);i++) await page.keyboard.press('Shift+Tab');assert(await page.locator('.skip-link').evaluate(e=>e===document.activeElement),'skip link keyboard reachable');await page.keyboard.press('Enter');assert(await page.locator('main').evaluate(e=>e===document.activeElement),'skip focuses main');
    interactions.push({lang,status:'passed',checks:['menu','language','work anchor','SVG playback','quote selectors','RTL arrows','swipe','filter','case viewer zoom/keys/focus','collection viewer/keys/focus','contact links','resume PDF','reduced motion sky/carousel','skip link']});
   }
   fs.writeFileSync(path.join(out,'interactions.json'),JSON.stringify(interactions,null,2));
   console.log('INTERACTIONS COMPLETE');
  }
 } finally {server.closeAllConnections();server.close();await context.close();}
})().catch(e=>{console.error(e);process.exitCode=1;server.close();});
