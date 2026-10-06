// usage: node pdf.js <cards module> <out.pdf> "<title>"  -> one-page A3 landscape sheet
const {chromium}=require('/opt/node22/lib/node_modules/playwright');const {esc}=require('./lib.js');
const C=require(process.argv[2]);const out=process.argv[3];const title=process.argv[4];
const cell=c=>`<div class="c"><div class="h"><span class="n">${esc(c.n)}<sup>${c.suf}</sup></span><span class="y">${c.y}</span><span class="t" style="background:${c.tc}">${esc(c.title)}</span></div>
<svg viewBox="0 0 1140 410">${c.svg}</svg>
<div class="ch">${c.chain.map(s=>`<span class="s">${esc(s)}</span>`).join('<b class="a">→</b>')}<b class="a">→</b><span class="r">✅ ${esc(c.res)}</span></div>
<div class="k"><b>Trick:</b> ${esc(c.hook)}</div></div>`;
const jodi=`<div class="c j"><div class="h"><span class="t" style="background:#FFF3B0">Jodiyan (ek yaad karo, doosra khud aayega)</span></div><table>
${[['24 · 25 · 26','Power → Property → Purse'],['35 → 36','aadha → poora Sikkim'],['42 → 43 → 44','diya → chheena → taala'],['9 → 100','zameen di → zameen ki deal'],['45 → 104','extension → Anglo-Indian out']].map(([a,b])=>`<tr><td>${a}</td><td>${b}</td></tr>`).join('')}</table></div>`;
const html=`<html><head><meta charset="utf-8"><style>
@page{size:420mm 297mm;margin:0}*{box-sizing:border-box}
body{margin:0;width:420mm;height:297mm;background:#F5ECDD;font-family:Arial,sans-serif;color:#222;padding:5mm 6mm}
h1{margin:0 0 3mm;text-align:center;font-size:24pt;color:#5a3a22}h1 span{color:#E0262F}
.g{display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(3,1fr);gap:3mm;height:276mm}
.c{background:#FFFBF3;border:1.6mm solid #A0694A;border-radius:4mm;padding:2mm 2.5mm;display:flex;flex-direction:column;box-shadow:0 1mm 0 #d8c3a5;overflow:hidden}
.h{display:flex;align-items:center;gap:2mm}.n{font:900 26pt 'Arial Black',Arial;color:#E0262F;line-height:1}.n sup{font-size:12pt}
.y{font-size:10pt;color:#777;align-self:flex-end}.t{margin-left:auto;font-weight:800;font-size:11.5pt;border:0.4mm solid #333;border-radius:1.5mm;padding:1mm 2mm;text-align:center}
svg{width:100%;flex:1;min-height:0;margin:1mm 0}
.ch{font-size:9.6pt;line-height:1.3;margin-bottom:1.5mm}.s{background:#EEF3F9;border:0.3mm dashed #777;border-radius:1mm;padding:0 1mm}.a{color:#999;margin:0 0.8mm}
.r{background:#E2F7E1;border:0.4mm solid #2E9B3A;border-radius:1mm;padding:0 1mm;font-weight:800}
.k{background:#FFF3B0;border:0.4mm solid #333;border-radius:1.5mm;padding:1.2mm 2mm;font-size:10.5pt;font-weight:600}.k b{color:#E0262F}
.j table{width:100%;border-collapse:collapse;margin-top:2mm;font-size:11pt}.j td{border-bottom:0.3mm solid #d8c3a5;padding:1.6mm 1mm}.j td:first-child{font-weight:900;color:#E0262F;white-space:nowrap}
</style></head><body><h1><span>Constitutional Amendments</span> ${esc(title)}</h1><div class="g">${C.map(cell).join('')}${C.length<15?jodi:''}</div></body></html>`;
(async()=>{const b=await chromium.launch();const p=await b.newPage();await p.setContent(html);await p.waitForTimeout(300);
await p.pdf({path:out,width:'420mm',height:'297mm',printBackground:true});
await p.setViewportSize({width:1587,height:1123});await p.screenshot({path:out.replace('.pdf','-preview.png')});await b.close();})();
