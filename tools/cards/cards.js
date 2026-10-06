const L=require('./lib.js');const {O,T,lab,RN,arrow,person,book,vbook,shelf,calendar,lock,house,tiranga,pakflag,scissors,gavel,paper,parliament,chair,mountain,ground,heart,shield,xmark,emoji,bubble}=L;
const C=[];
// 1st
C.push({n:'1',suf:'st',y:'1951',title:'9th Schedule',tc:'#D9ECFF',
hook:'1st = pehla bachcha, 9 mahine → 9th Schedule',
chain:['Courts land reform kanoon kaat rahe the','31A, 31B se bachao','Kanoon ki tijori = 9th Schedule','15(4) backward classes'],res:'19(1)(a) pe nayi restrictions',
svg:`${ground()}
${person(130,390,{judge:1,wig:1,ra:[40,-10],la:[30,10]})}
${paper(185,215,90,110,'Land Law',15,-8)}${scissors(205,262,1,-20)}
<path d="M275 300 l12 20 l-8 8" fill="none" stroke="#999" stroke-width="2.5" stroke-dasharray="5 4"/>
${lab(140,170,'Court',`#E3F0FF`)}
${arrow(310,260,390,260)}
<path d="M430 330 Q560 420 690 330" fill="#F7D9A8" ${O}/><line x1="440" y1="390" x2="460" y2="345" stroke="#8B5A2B" stroke-width="6"/><line x1="680" y1="390" x2="660" y2="345" stroke="#8B5A2B" stroke-width="6"/>
<rect x="470" y="300" width="180" height="40" rx="18" fill="#BFE3F7" ${O}/>
${RN(560,325,'1',200)}<circle cx="585" cy="150" r="26" fill="#F2C29B" ${O}/><circle cx="577" cy="148" r="3" fill="#333"/><circle cx="593" cy="148" r="3" fill="#333"/><path d="M578 160 q7 6 14 0" stroke="#333" stroke-width="2.5" fill="none"/><path d="M575 126 q10 -10 18 0" stroke="#3b2a20" stroke-width="3" fill="none"/>
${lab(560,385,'Naya bachcha','#E2F7E1',17)}
<line x1="560" y1="20" x2="660" y2="40" stroke="#999" stroke-width="2"/>${calendar(620,30,90,90,'MAHINE','9',46)}
${arrow(720,260,790,260)}
<rect x="810" y="140" width="190" height="230" rx="10" fill="#C9CED6" ${O}/><rect x="826" y="156" width="158" height="198" rx="6" fill="#E6E9EE" ${O}/>
${paper(838,200,60,80,'Land Laws',11,-4)}${paper(902,195,60,80,'Land Laws',11,5)}
<path d="M1000 160 L1080 130 L1080 380 L1000 370Z" fill="#B7BDC7" ${O}/><circle cx="1050" cy="250" r="20" fill="#9aa1ac" ${O}/><line x1="1050" y1="232" x2="1050" y2="268" stroke="#333" stroke-width="3"/>
${lab(905,120,'9th Schedule','#FFF3B0',22)}
<rect x="840" y="300" width="22" height="40" rx="10" fill="#777" ${O}/><line x1="851" y1="340" x2="851" y2="365" stroke="#333" stroke-width="3"/>${lock(895,345,0.5)}${lab(930,300,'19(1)(a)','#FDE2E4',14)}`});
// 7th
C.push({n:'7',suf:'th',y:'1956',title:'States Reorganisation',tc:'#FDE2E4',
hook:'7 = saat phere → States ki nayi shaadi, bhasha ke rishte se',
chain:['Bhasha andolan','States linguistic basis pe','Part A/B/C/D khatam → 14 States + 6 UTs','Common HC (231), 258A'],res:'350A mother tongue padhai, 350B special officer',
svg:`${ground()}
${[0,1,2,3,4,5,6].map(i=>{const a=i/7*Math.PI*2-Math.PI/2;return `<circle cx="${480+Math.cos(a)*190}" cy="${225+Math.sin(a)*150}" r="16" fill="#FDE2E4" stroke="#E0262F" stroke-width="3"/>${T(480+Math.cos(a)*190,232+Math.sin(a)*150,String(i+1),{fs:16,fill:'#E0262F'})}`}).join('')}
<ellipse cx="480" cy="225" rx="190" ry="150" fill="none" stroke="#E0262F" stroke-width="2.5" stroke-dasharray="8 8"/>
<path d="M330 120 L630 120 L600 80 L360 80Z" fill="#F7A54A" ${O}/>${[340,410,550,620].map(x=>`<rect x="${x-6}" y="120" width="12" height="250" fill="#F5C518" ${O}/>`).join('')}
${[[400,300,'#9CC5A1','अ'],[465,300,'#F7D9A8','ગ'],[505,300,'#BFE3F7','த'],[570,300,'#D7C6F2','ಕ']].map(([x,y,f,c])=>`<path d="M${x-26} ${y+60} q-6 -50 10 -70 q20 -12 30 4 q14 30 4 66z" fill="${f}" ${O}/>${L.bubble(x,y-60,c)}`).join('')}
<line x1="465" y1="330" x2="505" y2="330" stroke="#E0262F" stroke-width="4"/>
${RN(480,110,'7',80)}
${lab(480,40,'Saat phere: bhasha ka rishta','#FFF3B0',18)}
${[['A',60],['B',120],['C',75],['D',135]].map(([t,x],i)=>`<g transform="rotate(${[-15,10,-25,20][i]} ${x} ${i<2?345:290})"><rect x="${x-25}" y="${(i<2?345:290)-25}" width="50" height="50" fill="#D8C3A5" ${O}/>${T(x,(i<2?345:290)+9,t,{fs:24})}<path d="M${x-25} ${(i<2?345:290)-5} l14 6 l10 -10 l12 8" stroke="#333" stroke-width="2" fill="none"/></g>`).join('')}
${lab(100,230,'Part A/B/C/D khatam','#E3F0FF',16)}
${xmark(100,300,1.2)}
<path d="M760 360 q-20 -80 30 -90 q40 0 30 90z" fill="#9CC5A1" ${O}/>${T(790,330,'State 1',{fs:14})}
<path d="M1050 360 q-20 -90 30 -90 q40 0 20 90z" fill="#F7D9A8" ${O}/>${T(1075,330,'State 2',{fs:14})}
<path d="M820 300 Q920 220 1040 300" fill="none" stroke="#8B5A2B" stroke-width="8"/>
<rect x="880" y="200" width="90" height="70" fill="#E3F0FF" ${O}/><path d="M870 200 L925 165 L980 200Z" fill="#B7BDC7" ${O}/>${[890,910,930,950].map(x=>`<rect x="${x}" y="215" width="8" height="45" fill="#fff" ${O}/>`).join('')}
${lab(925,140,'Common HC (231)','#E2F7E1',16)}
${lab(925,385,'14 States + 6 UTs','#FFF3B0',17)}
${lab(925,60,'350A / 350B','#FDE2E4',17)}`});
// 9th
C.push({n:'9',suf:'th',y:'1960',title:'Berubari',tc:'#E2F7E1',
hook:'9 = "nau-do-gyarah" → Berubari chala gaya',
chain:['Berubari case','SC: zameen dene ke liye CA chahiye','9th CA'],res:'Berubari Pakistan ko transfer',
svg:`${ground(380)}
<path d="M80 380 L1080 380" stroke="#C9B48A" stroke-width="18"/>${[150,300,450,600,750].map(x=>`<path d="M${x} 400 q20 -12 40 0" stroke="#bbb" stroke-width="3" fill="none"/>`).join('')}
${RN(250,330,'9',170)}<line x1="235" y1="335" x2="215" y2="378" stroke="#7a1015" stroke-width="8"/><line x1="265" y1="335" x2="290" y2="376" stroke="#7a1015" stroke-width="8"/>
${[[175,240],[165,270],[170,300]].map(([x,y])=>`<line x1="${x}" y1="${y}" x2="${x-50}" y2="${y}" stroke="#bbb" stroke-width="4"/>`).join('')}
<path d="M430 300 q-20 -60 40 -80 q70 -20 110 10 q40 40 0 70 q-70 30 -150 0z" fill="#B9D88A" ${O}/><path d="M460 270 q30 -20 60 -10 M490 300 q20 -10 50 0" stroke="#7da35a" stroke-width="3" fill="none"/>
<line x1="480" y1="305" x2="455" y2="378" stroke="#333" stroke-width="7"/><line x1="540" y1="305" x2="575" y2="374" stroke="#333" stroke-width="7"/>
<circle cx="555" cy="240" r="4" fill="#333"/><circle cx="572" cy="243" r="4" fill="#333"/>
${lab(505,200,'Berubari','#FFF3B0',20)}
${[[400,250],[390,280]].map(([x,y])=>`<line x1="${x}" y1="${y}" x2="${x-60}" y2="${y}" stroke="#bbb" stroke-width="4"/>`).join('')}
${T(250,120,'nau-do-gyarah!',{fs:24,fill:'#E0262F'})}
${arrow(640,300,800,300)}
<rect x="830" y="190" width="24" height="190" fill="#999" ${O}/><rect x="1016" y="190" width="24" height="190" fill="#999" ${O}/><rect x="820" y="170" width="230" height="30" fill="#bbb" ${O}/>${T(935,192,'BORDER',{fs:18})}
${[0,1,2,3,4,5].map(i=>`<line x1="${870+i*28}" y1="200" x2="${870+i*28}" y2="380" stroke="#aaa" stroke-width="4"/>`).join('')}
${pakflag(1060,180,1)}${lab(935,400-14,'Pakistan (East)','#E2F7E1',16)}
${person(700,170,{judge:1,wig:1,s:0.75,ra:[30,-50],la:[-30,-50]})}
<rect x="610" y="20" width="180" height="56" rx="6" fill="#fff" ${O}/>${T(700,57,'CA needed',{fs:26,fill:'#E0262F'})}${lab(700,180,'Supreme Court','#E3F0FF',15)}`});
// 15th
C.push({n:'15',suf:'th',y:'1963',title:'HC Judges: 60 → 62',tc:'#FFF3B0',
hook:'15 → 1 + 5 = 6 → aage 2 lagao = 62',
chain:['HC judge 60 mein retire','2 saal extra'],res:'Retirement age 60 → 62',
svg:`${ground()}
<rect x="60" y="180" width="18" height="210" fill="#9aa1ac" ${O}/><rect x="230" y="180" width="18" height="210" fill="#9aa1ac" ${O}/><rect x="50" y="140" width="210" height="46" fill="#E6E9EE" ${O}/>${T(155,175,'RETIREMENT  60',{fs:22})}
<line x1="70" y1="150" x2="240" y2="180" stroke="#E0262F" stroke-width="6"/>
${person(155,390,{judge:1,bald:1,happy:false,la:[-10,50],ra:[10,50]})}<rect x="185" y="290" width="6" height="100" fill="#8B5A2B"/>${lab(155,415-20,'Boodha judge','#E3F0FF',15)}
${arrow(275,260,340,260)}
${RN(390,200,'1',110)}${T(440,190,'+',{fs:60,fill:'#888'})}${RN(490,200,'5',110)}
${arrow(540,170,600,170)}${RN(650,200,'6',140)}${T(705,190,'+',{fs:60,fill:'#888'})}${RN(750,200,'2',90)}
<path d="M640 230 Q690 300 750 230" fill="none" stroke="#888" stroke-width="4" stroke-dasharray="7 6"/>${lab(695,300,'= 62','#E2F7E1',30)}
<rect x="840" y="180" width="18" height="210" fill="#9aa1ac" ${O}/><rect x="1080" y="180" width="18" height="210" fill="#9aa1ac" ${O}/><rect x="830" y="140" width="278" height="46" fill="#E2F7E1" ${O}/>${T(969,175,'RETIREMENT  62',{fs:22,fill:'#2E9B3A'})}
${chair(980,390,1.6,'#8B5A2B')}${person(980,368,{judge:1,bald:1,s:0.85,la:[-20,30],ra:[20,30]})}
${lab(969,110,'2 saal extra!','#FFF3B0',18)}`});
// 21st
C.push({n:'21',suf:'st',y:'1967',title:'Sindhi',tc:'#E3F0FF',
hook:'21 ka 2 dikhta hai S jaisa → Sindhi',
chain:['Sindhi bhasha list se bahar'],res:'8th Schedule mein (15th bhasha)',
svg:`${ground()}
<path d="M150 120 C150 40 300 40 300 120 C300 190 140 250 140 330 L310 330" fill="none" stroke="#7a1015" stroke-width="44" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M150 120 C150 40 300 40 300 120 C300 190 140 250 140 330 L310 330" fill="none" stroke="#E0262F" stroke-width="38" stroke-linecap="round" stroke-linejoin="round"/>
${[[200,70],[290,150],[200,250],[230,330]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="#F49AA0"/>`).join('')}
<circle cx="320" cy="320" r="5" fill="#fff"/><circle cx="321" cy="320" r="2.5" fill="#000"/><path d="M332 335 l18 4 l6 -6 m-6 6 l6 6" stroke="#E0262F" stroke-width="3" fill="none"/>
${RN(380,140,'1',150)}${lab(230,385,'2 = S = Sindhi','#FFF3B0',20)}
<path d="M430 80 C500 140 420 220 500 280 S 480 360 560 400" fill="none" stroke="#7FB3E0" stroke-width="40" stroke-linecap="round"/><path d="M430 80 C500 140 420 220 500 280 S 480 360 560 400" fill="none" stroke="#BFE3F7" stroke-width="28" stroke-linecap="round"/>${lab(560,120,'Sindhu nadi','#E3F0FF',16)}
${shelf(660,90,420,280,'8th Schedule')}<line x1="670" y1="230" x2="1070" y2="230" stroke="#B5793F" stroke-width="8"/>
${['#E07B7B','#7FB3E0','#9CC5A1','#F5C518','#D7C6F2','#F7A54A','#7FB3E0','#E07B7B','#9CC5A1','#F5C518','#D7C6F2','#F7A54A','#E07B7B','#7FB3E0'].map((f,i)=>i<7?vbook(680+i*36,120,30,105,f):vbook(680+(i-7)*36,250,30,108,f)).join('')}
${book(950,255,40,120,'#E0262F','',14,-25)}${T(972,320,'Sindhi',{fs:16,fill:'#fff',rot:-115})}
${arrow(1060,190,1000,240)}${lab(1000,400-10,'15th bhasha','#E2F7E1',17)}`});
// 24th
C.push({n:'24',suf:'th',y:'1971',title:'FRs bhi amend ho sakte',tc:'#FFF3B0',
hook:'24 = 24×7 power → Parliament kabhi bhi, kuch bhi amend kar sakti hai. 1971 tikdi: 24 Power → 25 Property → 26 Purse',
chain:['Golaknath 1967: FRs amend nahi ho sakte','24th: any part incl. FRs'],res:'President ko assent dena hi padega',
svg:`${ground()}
${parliament(330,390,1.5)}
<rect x="230" y="70" width="200" height="80" rx="10" fill="#222" ${O}/>${T(330,130,'24×7',{fs:52,fill:'#FF3B3B',extra:'font-family="Courier New, monospace"'})}<line x1="330" y1="150" x2="330" y2="185" stroke="#555" stroke-width="5"/>
${lab(330,40,'Kabhi bhi, kuch bhi amend','#FFF3B0',17)}
${book(560,250,170,120,'#7FB3E0','',14,0)}${T(650,295,'Fundamental',{fs:18})}${T(650,320,'Rights',{fs:18})}
<g transform="rotate(35 610 230)"><rect x="595" y="150" width="18" height="100" rx="4" fill="#E0262F" ${O}/><path d="M595 250 L604 275 L613 250Z" fill="#333"/></g>
<path d="M545 220 Q520 220 510 250" fill="none" stroke="#333" stroke-width="3" stroke-dasharray="4 4"/>
${person(870,390,{shirt:'#F7F2E8',la:[-30,-10],ra:[30,30]})}${lab(870,210,'President','#E3F0FF',16)}
<rect x="780" y="290" width="40" height="22" fill="#8B5A2B" ${O}/><rect x="790" y="262" width="20" height="30" fill="#8B5A2B" ${O}/>
<rect x="740" y="325" width="110" height="50" fill="#fff" ${O}/>${T(795,358,'ASSENT ✓',{fs:20,fill:'#2E9B3A'})}
${gavel(1030,375,0.8,80,'#bbb')}${lab(1030,310,'Golaknath','#eee',16)}<path d="M1000 260 l8 -16 M1030 255 l0 -18 M1060 260 l-8 -16" stroke="#aaa" stroke-width="3"/>
${lab(330,385-0,'Parliament','#E2F7E1',16)}`});
// 25th
C.push({n:'25',suf:'th',y:'1971',title:'Property pe kainchi, Art 31C',tc:'#E2F7E1',
hook:'1971 tikdi ka 2nd P = Property',
chain:['Property compensation pe case','Right to property curtailed'],res:'Art 31C: DPSP laws ko FR challenge se bachao',
svg:`${ground()}
${RN(130,260,'25',150)}
${house(400,390,2.2)}
<path d="M600 390 q-60 0 -55 -60 q5 -60 75 -60 q70 0 75 60 q5 60 -55 60z" fill="#C9A15E" ${O}/><path d="M590 272 q30 -20 60 0" fill="none" stroke="#333" stroke-width="5"/>${T(620,345,'₹',{fs:56,fill:'#6b4b1d'})}${lab(620,240,'Compensation','#FFF3B0',15)}
${scissors(700,250,2.2,160)}
${[[690,370],[700,380]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="#F5C518" ${O}/>`).join('')}
${shield(950,190,2,'#7FB3E0')}${T(950,145,'31C',{fs:44,fill:'#1f4e79'})}${book(905,175,90,70,'#F5C518','DPSP',20)}
${lab(950,330,'DPSP laws safe','#E2F7E1',17)}
${arrow(470,140,860,170)}${lab(660,110,'FR challenge ✗','#FDE2E4',16)}`});
// 26th
C.push({n:'26',suf:'th',y:'1971',title:'Privy purses khatam',tc:'#FDE2E4',
hook:'26 = 26 January (Republic) → Republic mein raja ka khaas paisa kyun? → Purse khatam',
chain:['Rajaon ko privy purse','Republic mein sab barabar'],res:'Privy purses abolished',
svg:`${ground()}
${calendar(70,90,200,200,'JANUARY','26',100)}${lab(170,320,'Republic Day','#E3F0FF',17)}
${tiranga(330,390,2.2)}
${person(620,390,{shirt:'#7B4FA6',crown:1,s:1.3,happy:false,la:[60,-30],ra:[80,-20]})}
<g transform="rotate(170 760 250)"><path d="M720 280 q-50 0 -45 -50 q5 -50 65 -50 q60 0 65 50 q5 50 -45 50z" fill="#C9A15E" ${O}/><path d="M715 182 q25 -16 50 0" fill="none" stroke="#333" stroke-width="5"/></g>
${xmark(760,240,1.5)}
${[0,1,2].map(i=>`<line x1="${730+i*30}" y1="300" x2="${730+i*30}" y2="330" stroke="#ccc" stroke-width="3" stroke-dasharray="4 5"/>`).join('')}${T(760,365,'kuch nahi gira…',{fs:18,fill:'#888',w:400})}
${lab(620,90,'Raja','#FFF3B0',18)}${lab(950,170,'Privy Purse','#FDE2E4',20)}${lab(950,240,'ABOLISHED','#E2F7E1',22)}`});
// 35/36
C.push({n:'35/36',suf:'th',y:'1974 / 75',title:'Sikkim',tc:'#E3F0FF',
hook:'35 odd = aadha (associate State); 36 even = poora State (22nd)',
chain:['Sikkim judna chahta tha','35th: associate State'],res:'36th: Sikkim 22nd full State',
svg:`${mountain(300,390,520,300,'#B6D7A8')}${mountain(820,390,560,330,'#9CC5A1')}${mountain(560,390,300,170,'#CFE5C3')}
${house(300,200,1.2,'#F7D9A8','#C0504D',true)}${RN(300,250,'35',70)}${lab(300,300,'Associate State (aadha)','#FFF3B0',17)}
${house(820,170,1.3)}${tiranga(870,48,0.8)}<rect x="790" y="180" width="60" height="34" rx="4" fill="#fff" ${O}/>${T(820,206,'22',{fs:26})}${RN(820,280,'36',70)}${lab(820,330,'Full State No. 22','#E2F7E1',17)}
${arrow(420,150,690,120)}${lab(560,90,'Sikkim','#E3F0FF',20)}`});
// 39th
C.push({n:'39',suf:'th',y:'1975',title:'Election disputes courts se bahar',tc:'#FDE2E4',
hook:'39 → 3 + 9 = 12 → 12 June 1975: Allahabad HC ne Indira ka election radd kiya',
chain:['12 June 1975: Allahabad HC','PM ka election radd'],res:'President, VP, PM, Speaker ke election disputes courts se bahar',
svg:`${ground()}
${calendar(60,90,220,230,'JUNE 1975','12',96)}<ellipse cx="170" cy="250" rx="70" ry="55" fill="none" stroke="#E0262F" stroke-width="5"/>${RN(170,355,'3 + 9 = 12',44)}
${lab(170,60,'Allahabad HC','#E3F0FF',17)}
<rect x="380" y="290" width="140" height="100" fill="#E6E9EE" ${O}/><rect x="420" y="282" width="60" height="10" fill="#333"/>${paper(425,240,50,55,'',12,8)}${lab(450,345,'Ballot','#FFF3B0',16)}
${gavel(470,130,1.2,-35)}${T(380,110,'radd!',{fs:22,fill:'#E0262F'})}
<path d="M640 390 L640 230 Q640 90 830 90 Q1020 90 1020 230 L1020 390" fill="#DDEFFC" fill-opacity="0.55" stroke="#7FB3E0" stroke-width="5"/>
<path d="M680 220 Q700 140 780 120" stroke="#fff" stroke-width="8" fill="none" stroke-linecap="round"/>
${chair(690,390,1.1,'#C0504D','')}${chair(780,390,1.1,'#7FB3E0','')}${chair(870,390,1.1,'#9CC5A1','')}${chair(960,390,1.1,'#F7A54A','')}
${[['President',690],['VP',780],['PM',870],['Speaker',960]].map(([t,x])=>lab(x,250,t,'#fff',14)).join('')}
${gavel(830,40,0.9,-80)}<path d="M790 85 l-10 -10 M830 80 l0 -14 M870 85 l10 -10" stroke="#E0262F" stroke-width="4"/>${lab(1060,60,'Court ✗','#FDE2E4',16)}`});
// 42nd
C.push({n:'42',suf:'nd',y:'1976',title:'Mini-Constitution',tc:'#FFF3B0',
hook:'42 = "Char-Do" → chhota (mini) Samvidhan, emergency mein sab badla',
chain:['Emergency','Preamble: Socialist, Secular, Integrity','Fundamental Duties (IVA)','5 subjects → Concurrent','DPSP 39A, 43A, 48A; 323A/B; 131A, 139A'],res:'CoM advice President pe binding',
svg:`<circle cx="1080" cy="50" r="34" fill="#FDE2E4" ${O}/><path d="M1060 50 a20 20 0 0 1 40 0z" fill="#E0262F" ${O}/>${[[-50,-10],[50,-10],[-40,-45],[40,-45]].map(([dx,dy])=>`<line x1="1080" y1="40" x2="${1080+dx*0.7}" y2="${40+dy*0.7}" stroke="#E0262F" stroke-width="3" opacity="0.6"/>`).join('')}${T(1080,105,'Emergency',{fs:15,fill:'#E0262F'})}
<ellipse cx="470" cy="210" rx="380" ry="165" fill="none" stroke="#bbb" stroke-width="3" stroke-dasharray="10 8"/>
${book(400,140,140,150,'#C0504D','',14)}${RN(475,240,'42',62)}${T(475,175,'Samvidhan',{fs:16,fill:'#fff'})}${T(475,280,'mini',{fs:15,fill:'#fff'})}
${paper(120,60,120,90,'Preamble',15,-5,'#FFF8E1')}${lab(110,170,'Socialist','#FDE2E4',13)}${lab(185,195,'Secular','#E3F0FF',13)}${lab(255,170,'Integrity','#E2F7E1',13)}
<rect x="330" y="20" width="110" height="100" rx="6" fill="#fff" ${O}/>${T(385,45,'Duties IVA',{fs:15})}${[60,82,104].map(y=>`<rect x="345" y="${y-12}" width="14" height="14" fill="#E2F7E1" ${O}/><path d="M347 ${y-5} l4 5 l8 -10" stroke="#2E9B3A" stroke-width="3" fill="none"/><line x1="368" y1="${y-5}" x2="425" y2="${y-5}" stroke="#bbb" stroke-width="3"/>`).join('')}
${emoji(600,95,'🎒',54)}${T(600,120,'Education',{fs:14})}
${emoji(760,140,'🌳',58)}${T(760,165,'Forests',{fs:14})}
${emoji(820,265,'⚖️',54)}${T(820,290,'Weights',{fs:14})}
${emoji(700,355,'🦁',50)}${emoji(760,350,'🐦',40)}${T(730,385,'Wild animals & birds',{fs:14})}
${gavel(540,350,0.6,-30)}${T(540,392,'Justice',{fs:14})}
${lab(660,210,'→ Concurrent List','#FFF3B0',15)}
${lab(140,260,'DPSP 39A 43A 48A','#E3F0FF',14)}${lab(140,300,'Tribunals 323A/B','#E2F7E1',14)}${lab(140,340,'131A, 139A','#FDE2E4',14)}
${person(1010,390,{shirt:'#F7F2E8',s:1.1})}<rect x="985" y="226" width="50" height="16" rx="3" fill="#F5C518" ${O} transform="rotate(-8 1010 234)"/>${lab(1010,170,'CoM advice = binding','#FFF3B0',14)}${T(1080,300,'President',{fs:15,fill:'#555'})}`});
// 43rd
C.push({n:'43',suf:'rd',y:'1977',title:'42nd ka undo',tc:'#E2F7E1',
hook:'43 = 42 + 1 → ek kadam peeche (undo)',
chain:['42nd ki zyaadatiyan','Janata sarkar ne undo kiya'],res:'131A repealed',
svg:`${ground()}
${[['Ctrl',90,150],['Z',300,120]].map(([t,x,w])=>`<rect x="${x}" y="200" width="${w+80}" height="130" rx="18" fill="#9aa1ac" ${O}/><rect x="${x+12}" y="208" width="${w+56}" height="100" rx="14" fill="#E6E9EE" ${O}/>${T(x+(w+80)/2,272,t,{fs:48})}`).join('')}${T(285,280,'+',{fs:50,fill:'#888'})}
${RN(390,175,'43',70)}${lab(240,110,'Ctrl + Z = UNDO','#FFF3B0',22)}
<path d="M360 360 q-120 40 -260 0" stroke="#333" stroke-width="3" fill="none" stroke-dasharray="1 0"/><path d="M470 270 a60 60 0 1 0 -10 70" fill="none" stroke="#2E9B3A" stroke-width="6"/><polygon points="455,265 485,262 470,290" fill="#2E9B3A"/>
${person(560,390,{shirt:'#F7A54A',la:[-60,-20]})}${lab(560,180,'Janata sarkar','#E3F0FF',15)}
${book(760,220,180,160,'#C0504D','',14)}${RN(850,320,'42',70)}
${paper(800,120,70,80,'',12,-20)}${paper(900,70,70,80,'131A',18,15)}${xmark(935,110,1.3)}${paper(980,160,70,80,'',12,30)}
${[[835,200,800,160],[945,200,930,150],[970,240,1000,210]].map(([a,b,c,d])=>`<path d="M${a} ${b} Q${(a+c)/2+20} ${(b+d)/2} ${c} ${d}" stroke="#bbb" stroke-width="3" fill="none" stroke-dasharray="5 5"/>`).join('')}
${lab(1060,330,'131A repealed','#E2F7E1',16)}`});
// 44th
C.push({n:'44',suf:'th',y:'1978',title:'Emergency pe taala',tc:'#FDE2E4',
hook:'44 = 4-4 → double taala: emergency pe + property FR se bahar',
chain:['Emergency ka galat use','"Internal disturbance" → "armed rebellion"','Sirf Cabinet ki written advice','Art 20 & 21 kabhi suspend nahi','President advice ek baar wapas bhej sakta'],res:'Property FR se bahar → Art 300A',
svg:`${ground()}
<rect x="80" y="230" width="220" height="160" rx="10" fill="#E6E9EE" ${O}/><rect x="180" y="100" width="20" height="140" fill="#9aa1ac" ${O} transform="rotate(-20 190 240)"/><circle cx="150" cy="105" r="22" fill="#E0262F" ${O}/>${lab(190,350,'EMERGENCY','#FDE2E4',18)}
${lock(140,290,1.1,'4')}${lock(245,290,1.1,'4')}
<path d="M320 120 h150 v90 h-150z" fill="#FFF8E1" ${O}/><path d="M320 120 l75 50 l75 -50" fill="none" ${O}/>${T(395,235,'Cabinet written advice',{fs:15})}
<g transform="translate(470,170) rotate(-30)"><circle cx="0" cy="0" r="14" fill="#F5C518" ${O}/><rect x="12" y="-4" width="40" height="8" fill="#F5C518" ${O}/></g>
${lab(395,60,'"Armed rebellion"','#FFF3B0',16)}${T(395,95,'internal disturbance',{fs:14,fill:'#999',w:400})}<line x1="320" y1="90" x2="470" y2="90" stroke="#E0262F" stroke-width="3"/>
${shield(600,300,1.6,'#7FB3E0')}${heart(560,250,1.4,'20')}${heart(640,250,1.4,'21')}${lab(600,370,'Kabhi suspend nahi','#E2F7E1',14)}
<rect x="730" y="190" width="140" height="200" fill="#E3F0FF" ${O}/><path d="M720 190 L800 140 L880 190Z" fill="#B7BDC7" ${O}/>${T(800,240,'FR',{fs:36})}${[750,790,830].map(x=>`<rect x="${x}" y="270" width="20" height="30" fill="#fff" ${O}/>`).join('')}
${arrow(880,330,940,330)}
<rect x="950" y="370" width="170" height="20" fill="#C9B48A" ${O}/>${house(1035,370,1.1)}<line x1="1035" y1="370" x2="1035" y2="290" stroke="none"/>${lab(1035,230,'Art 300A','#FFF3B0',18)}
${[[1015,375],[1055,375]].map(([x,y])=>`<line x1="${x}" y1="${y-6}" x2="${x-8}" y2="${y+12}" stroke="#333" stroke-width="5"/>`).join('')}
${lab(1035,140,'Legal right','#E2F7E1',15)}`});
// 45th
C.push({n:'45',suf:'th',y:'1980',title:'+10 saal extension',tc:'#E3F0FF',
hook:'45 → 4 + 5 = 9 → agla number 10 → 10 saal extension',
chain:['Reservation ki time-limit khatam'],res:'SC/ST reservation + Anglo-Indian nomination +10 saal',
svg:`${ground()}
<g transform="translate(330,220)"><rect x="-110" y="-170" width="220" height="20" rx="5" fill="#8B5A2B" ${O}/><rect x="-110" y="150" width="220" height="20" rx="5" fill="#8B5A2B" ${O}/>
<path d="M-85 -150 Q-85 -40 -10 0 Q-85 40 -85 150 L85 150 Q85 40 10 0 Q85 -40 85 -150Z" fill="#E8F4FB" ${O}/>
<path d="M-70 -145 L70 -145 Q60 -100 10 -60 L-10 -60 Q-60 -100 -70 -145Z" fill="#F2D27A" opacity="0.25"/><path d="M-5 0 L5 0 L3 150 L-3 150Z" fill="#E9C46A"/><path d="M-80 150 Q0 80 80 150Z" fill="#E9C46A" ${O}/></g>
${lab(330,30,'Time khatam hone wala','#FDE2E4',15)}
<path d="M470 220 a70 70 0 1 1 -20 -120" fill="none" stroke="#2E9B3A" stroke-width="6"/><polygon points="440,90 470,100 445,120" fill="#2E9B3A"/>${lab(560,120,'Palat do!','#E2F7E1',15)}
${RN(120,150,'4 + 5',60)}${RN(120,230,'= 9',60)}${arrow(120,260,120,300)}
<circle cx="120" cy="345" r="45" fill="#FFF3B0" ${O}/>${RN(120,368,'10',56)}${lab(120,400-5,'+10 saal','#E2F7E1',15)}
${chair(720,390,1.7,'#7FB3E0')}${chair(850,390,1.7,'#7FB3E0')}${lab(785,250,'SC/ST seats','#E3F0FF',18)}
${chair(1010,390,1.7,'#F7A54A')}${lab(1010,250,'Anglo-Indian','#FFF3B0',18)}
${T(870,140,'+10 saal',{fs:48,fill:'#2E9B3A'})}`});
module.exports=C;
