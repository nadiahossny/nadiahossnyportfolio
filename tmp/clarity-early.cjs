const { chromium } = require('C:/Users/katty/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async () => {
 const browser = await chromium.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true });
 const page = await browser.newPage({ viewport: { width: Number(process.argv[3] || 1280), height: 900 } });
 await page.goto('http://127.0.0.1:43127'+(process.argv[2]||'/'), { waitUntil: 'domcontentloaded' });
 if(process.argv.includes('--enlarged')) await page.addStyleTag({content:'html {font-size:200% !important}'});
 await page.waitForTimeout(1000);
 await page.screenshot({ path: process.argv[2]?'artifacts/clarity/diagnostic.png':'artifacts/clarity-early-home.png' });
 console.log(JSON.stringify(await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,bad:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden'&&(r.left< -1||r.right>innerWidth+1)}).map(e=>({tag:e.tagName,cls:e.className,text:e.textContent.slice(0,60),rect:e.getBoundingClientRect().toJSON()}))})),null,2));
 console.log(JSON.stringify(await page.evaluate(()=>[...document.querySelectorAll('main p, main li, main a, main button, footer p, footer a')].filter(e=>e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden'&&parseFloat(getComputedStyle(e).fontSize)<16).map(e=>({cls:e.className,size:getComputedStyle(e).fontSize,text:e.textContent.slice(0,60)}))),null,2));
 console.log(await page.title());
 await browser.close();
})();
