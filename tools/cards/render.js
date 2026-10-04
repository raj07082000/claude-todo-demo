const {chromium}=require('/opt/node22/lib/node_modules/playwright');const C=require('./cards.js');const {esc}=require('./lib.js');
const out='/home/user/claude-todo-demo/images/part-1/';
const page=c=>`<html><head><meta charset="utf-8"><style>
*{box-sizing:border-box}body{margin:0;width:1200px;height:900px;background:#fff;font-family:Arial,sans-serif;color:#222;padding:20px}
.card{border:3px solid #333;border-radius:22px;padding:18px 28px 90px;position:relative;box-shadow:4px 6px 0 #e3e3e3}
.hd{display:flex;align-items:flex-start;gap:14px;height:150px}
.num{font-size:118px;font-weight:900;color:#E0262F;line-height:0.95;font-family:'Arial Black',Arial}
.suf{display:flex;flex-direction:column;color:#E0262F;font-weight:900;font-size:40px;line-height:1;padding-top:6px}.suf small{font-size:24px;color:#E0262F}
.yr{position:absolute;left:34px;top:132px;color:#888;font-size:26px}
.ttl{margin-left:auto;margin-top:16px;padding:12px 22px;border:2.5px solid #333;border-radius:10px;font-size:34px;font-weight:800;max-width:600px;text-align:center}
svg{display:block;margin:4px auto 0}
.chain{display:flex;align-items:center;gap:8px;margin-top:8px}
.b{flex:1;font-size:17px;font-weight:600;padding:10px 8px;border-radius:10px;background:#F4F7FB;border:2.5px solid #8a8a8a;text-align:center;line-height:1.25}
.b.p{border-style:dashed;border-color:#555;background:#fff}.b.r{background:#E2F7E1;border:3px solid #2E9B3A;font-weight:800}
.a{font-size:26px;color:#8a8a8a;font-weight:900}
.hook{position:absolute;left:28px;right:28px;bottom:16px;background:#FFF6C7;border:2px solid #333;border-radius:10px;padding:10px 16px;font-size:20px;text-align:center}
.hook b{color:#E0262F}
</style></head><body><div class="card">
<div class="hd"><div class="num">${esc(c.n)}</div><div class="suf">${c.suf}<small>CA</small></div><div class="ttl" style="background:${c.tc}">${esc(c.title)}</div></div>
<div class="yr">${c.y}</div>
<svg width="1140" height="410" viewBox="0 0 1140 410">${c.svg}</svg>
<div class="chain">${c.chain.map((s,i)=>`<div class="b ${i?'':'p'}">${esc(s)}</div><span class="a">➜</span>`).join('')}<div class="b r">✅ ${esc(c.res)}</div></div>
<div class="hook"><b>Hook:</b> ${esc(c.hook)}</div></div></body></html>`;
(async()=>{const fs=require('fs');for(const f of fs.readdirSync(out))fs.unlinkSync(out+f);
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1200,height:900}});const files=[];
for(const c of C){await p.setContent(page(c));await p.waitForTimeout(100);const f=`ca-${c.n.replace('/','-')}.png`;await p.screenshot({path:out+f,clip:await p.$eval(".card",e=>{const r=e.getBoundingClientRect();return {x:0,y:0,width:1200,height:r.bottom+20}})});files.push(f);}
// overview grid
const grid=`<html><body style="margin:0;background:#fff;width:1600px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px;padding:12px;box-sizing:border-box">${files.map(f=>`<img src="file://${out}${f}" style="width:100%">`).join('')}</body></html>`;
fs.writeFileSync('/tmp/claude-0/-home-user-claude-todo-demo/d3201023-d8ce-51dc-8cca-5b506d91d0bb/scratchpad/grid.html',grid);
await p.setViewportSize({width:1600,height:900});await p.goto('file:///tmp/claude-0/-home-user-claude-todo-demo/d3201023-d8ce-51dc-8cca-5b506d91d0bb/scratchpad/grid.html');await p.waitForTimeout(300);
await p.screenshot({path:out+'part-1-all.png',fullPage:true});await b.close();console.log(files.length);})();
