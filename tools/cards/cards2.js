const L=require('./lib.js');const {O,T,lab,RN,arrow,person,book,vbook,shelf,calendar,lock,house,tiranga,pakflag,scissors,gavel,paper,parliament,chair,mountain,ground,heart,shield,xmark,emoji,bubble}=L;
const card=(x,y,f,t,rot=0)=>`<g transform="rotate(${rot} ${x+30} ${y+42})"><rect x="${x}" y="${y}" width="60" height="84" rx="6" fill="#fff" ${O}/><rect x="${x+6}" y="${y+6}" width="48" height="72" rx="4" fill="${f}" opacity="0.35"/>${T(x+30,y+52,t,{fs:24})}</g>`;
const school=(x,y,label)=>`<rect x="${x}" y="${y-170}" width="260" height="170" fill="#F7D9A8" ${O}/><path d="M${x-15} ${y-168} L${x+130} ${y-240} L${x+275} ${y-168}Z" fill="#C0504D" ${O}/>${lab(x+130,y-195,label,'#fff',18)}`;
const hand=(x,y,s=1,fill='#E9B48A',flip=false)=>`<g transform="translate(${x},${y}) scale(${flip?-s:s},${s})"><rect x="-38" y="-20" width="76" height="80" rx="20" fill="${fill}" ${O}/>${[-30,-12,6,24].map((dx,i)=>`<rect x="${dx}" y="${-80+Math.abs(i-1.5)*8}" width="16" height="72" rx="8" fill="${fill}" ${O}/>`).join('')}<rect x="-62" y="-6" width="16" height="56" rx="8" fill="${fill}" ${O} transform="rotate(-40 -54 22)"/></g>`;
const C=[];
const add=o=>C.push(o);
// ---------- PART 2 ----------
add({n:'52',suf:'nd',y:'1985',title:'Anti-defection',tc:'#FDE2E4',hook:'52 = taash ke 52 patte → patta badlo = party badlo → rok',
chain:['Aaya Ram, Gaya Ram','Neta party badal rahe'],res:'10th Schedule (anti-defection)',
svg:`${ground()}${person(260,390,{shirt:'#F7F2E8',s:1.3,la:[60,-10],ra:[80,-30]})}${lab(260,140,'Neta','#E3F0FF')}
${['🌸','✋','🌾','⚙️','🚲'].map((e,i)=>card(350+i*55,170+(i%2)*10,['#E07B7B','#7FB3E0','#9CC5A1','#F5C518','#D7C6F2'][i],'',(i-2)*12)+emoji(380+i*55,235+(i%2)*10,e,30)).join('')}
${lab(500,320,'52 patte = 52 party?','#FFF3B0',18)}${RN(500,140,'52',90)}
${hand(860,250,1.6,'#E0262F')}${T(860,250,'STOP',{fs:30,fill:'#fff'})}${lab(860,360,'10th Schedule','#E2F7E1',22)}${arrow(700,250,780,250)}`});
add({n:'56',suf:'th',y:'1987',title:'Goa: 25th State',tc:'#E2F7E1',hook:'56 = chhappan bhog → party → Goa',
chain:['Goa sirf UT tha'],res:'Goa full State (25th)',
svg:`<path d="M0 330 Q300 300 600 330 T1140 330 L1140 410 L0 410Z" fill="#BFE3F7" ${O}/><rect x="0" y="250" width="1140" height="80" fill="#F7E3B0"/>
${emoji(100,250,'🌴',110)}${emoji(1050,250,'🌴',110)}
<ellipse cx="500" cy="250" rx="260" ry="60" fill="#E9C46A" ${O}/><ellipse cx="500" cy="245" rx="230" ry="48" fill="#F7D9A8" ${O}/>
${['🍛','🍚','🥘','🍲','🍮','🥗','🍢','🍤','🥟','🍩','🍰','🥭'].map((e,i)=>emoji(330+(i%6)*68,235+Math.floor(i/6)*36,e,32)).join('')}
${RN(500,150,'56',100)}${lab(500,40,'Chhappan bhog','#FFF3B0',22)}
<rect x="820" y="120" width="12" height="150" fill="#8B5A2B" ${O}/><rect x="760" y="90" width="200" height="70" rx="8" fill="#fff" ${O}/>${T(860,120,'GOA',{fs:26,fill:'#2E9B3A'})}${T(860,148,'State No. 25',{fs:20})}`});
add({n:'58',suf:'th',y:'1987',title:'Authoritative Hindi text',tc:'#FFF3B0',hook:'58 = Hindi ka "paanch-aath" → haath mein Hindi text',
chain:['Authoritative text sirf English mein'],res:'Authoritative Hindi text: Art 394A',
svg:`${ground()}${hand(330,320,2.2)}${RN(330,390,'58',60)}
${book(240,40,190,170,'#F7A54A','',14)}${T(340,120,'संविधान',{fs:40})}${T(340,165,'Hindi text',{fs:18})}
${book(680,90,190,170,'#7FB3E0','',14)}${T(780,170,'Constitution',{fs:26})}${T(780,210,'English',{fs:18})}
${T(560,180,'=',{fs:90,fill:'#888'})}${lab(560,330,'Art 394A','#E2F7E1',28)}${lab(560,60,'Dono barabar','#FFF3B0',20)}`});
add({n:'61',suf:'st',y:'1988',title:'Voting age 21 → 18',tc:'#E3F0FF',hook:'61 ka 1 → 1 vote at 18',
chain:['Vote ki umar 21'],res:'Voting age 21 → 18 (Art 326)',
svg:`${ground()}<rect x="80" y="60" width="300" height="200" rx="8" fill="#F4F7FB" ${O}/>${T(170,170,'21',{fs:80,fill:'#999'})}${xmark(170,140,2)}${T(300,190,'18',{fs:90,fill:'#2E9B3A'})}${lab(230,290,'Art 326','#FFF3B0',22)}
${person(560,390,{shirt:'#9CC5A1',ra:[60,-10]})}${lab(560,180,'18 saal ka yuva','#E3F0FF',17)}
<rect x="650" y="290" width="160" height="100" fill="#E6E9EE" ${O}/><rect x="690" y="282" width="80" height="10" fill="#333"/>${lab(730,345,'Ballot box','#FFF3B0',16)}
${RN(860,200,'6',130)}<rect x="925" y="80" width="60" height="140" fill="#fff" stroke="#E0262F" stroke-width="5"/>${T(955,165,'VOTE',{fs:16,fill:'#E0262F',rot:-90})}${T(955,250,'"1" = ballot',{fs:18})}${arrow(900,250,780,280)}`});
add({n:'65',suf:'th',y:'1990',title:'Multi-member SC/ST Commission',tc:'#E2F7E1',hook:'65 = do digit → SC & ST ek saath → ek multi-member commission. Jodi: 65 ne joda → 89 ne toda',
chain:['Sirf ek Special Officer'],res:'Multi-member National Commission for SCs & STs',
svg:`${ground()}<rect x="70" y="290" width="200" height="20" fill="#B5793F" ${O}/>${person(170,300,{s:0.9,shirt:'#888'})}${lab(170,90,'Akela officer','#eee',17)}
${arrow(310,250,400,250)}<rect x="440" y="290" width="640" height="24" fill="#B5793F" ${O}/>${[520,620,720,820,920,1000].slice(0,5).map((x,i)=>person(x+20,300,{s:0.85,shirt:['#7FB3E0','#9CC5A1','#F7A54A','#D7C6F2','#E07B7B'][i]})).join('')}
${lab(760,60,'SC + ST Commission','#E2F7E1',24)}${RN(250,410-20,'6',70)}${RN(320,390,'5',70)}${T(285,345,'🤝',{fs:36})}`});
add({n:'69',suf:'th',y:'1991',title:'Delhi NCT',tc:'#FDE2E4',hook:'69 → 6 aur 9 ek dusre ke ulte → Delhi: na poora State, na poora UT',
chain:['Capital ko Assembly chahiye'],res:'NCT + Assembly (Art 239AA)',
svg:`${ground()}<rect x="420" y="120" width="70" height="270" fill="#E8C9A0" ${O}/><rect x="650" y="120" width="70" height="270" fill="#E8C9A0" ${O}/><rect x="400" y="80" width="340" height="60" fill="#E8C9A0" ${O}/><path d="M490 390 L490 230 Q570 150 650 230 L650 390" fill="#fff" ${O}/>${T(570,118,'INDIA GATE',{fs:18})}
<circle cx="570" cy="20" r="0"/>${RN(520,70,'6',70)}${RN(620,70,'9',70,{rot:0})}<path d="M520 20 a50 50 0 0 1 100 0" fill="none" stroke="#E0262F" stroke-width="3" stroke-dasharray="6 5"/>
<rect x="830" y="270" width="230" height="120" fill="#E3F0FF" ${O}/><path d="M820 270 Q945 180 1070 270Z" fill="#B7BDC7" ${O}/>${lab(945,330,'Assembly 239AA','#FFF3B0',17)}
<rect x="80" y="160" width="250" height="80" fill="#fff" ${O}/><rect x="80" y="160" width="125" height="80" fill="#E2F7E1" ${O}/>${T(142,208,'Half State',{fs:18})}${T(267,208,'Half UT',{fs:18})}<rect x="200" y="240" width="10" height="150" fill="#8B5A2B"/>`});
add({n:'71',suf:'st',y:'1992',title:'Konkani, Manipuri, Nepali',tc:'#FFF3B0',hook:'71 → 7 behne (North-East) + 1 (Goa)',
chain:['NE se Manipuri, Nepali','Goa se Konkani'],res:'Teeno 8th Schedule mein',
svg:`${mountain(250,390,480,260,'#9CC5A1')}${[0,1,2,3,4,5,6].map(i=>person(110+i*45,300-Math.abs(i-3)*12,{s:0.5,shirt:['#E07B7B','#F7A54A','#F5C518','#9CC5A1','#7FB3E0','#D7C6F2','#F28B9B'][i],hair:'#222'})).join('')}${RN(250,110,'7',80)}${lab(250,370,'7 behne (NE)','#E3F0FF',16)}
<path d="M480 390 L700 390 L700 330 Q590 300 480 330Z" fill="#F7E3B0" ${O}/>${person(590,350,{s:0.8,shirt:'#F28B9B'})}${RN(590,170,'1',70)}${lab(590,380,'Goa','#FFF3B0',16)}
${shelf(760,110,330,250,'8th Schedule')}${[0,1,2,3,4].map(i=>vbook(785+i*30,140,26,90,['#bbb','#ccc','#bbb','#ccc','#bbb'][i])).join('')}${vbook(940,140,40,200,'#E07B7B','Manipuri',15)}${vbook(985,140,40,200,'#7FB3E0','Nepali',15)}${vbook(1030,140,40,200,'#9CC5A1','Konkani',15)}`});
add({n:'73',suf:'rd',y:'1992',title:'Panchayati Raj',tc:'#E2F7E1',hook:'73 ka 3 → 3-tier gaon. 73 pehle → schedule bhi pehle (11th). Jodi: 73 gaon ↔ 74 shehar',
chain:['Panchayat kamzor','3-tier: gaon, block, zila','Part IX'],res:'11th Schedule: 29 subjects',
svg:`${ground()}<rect x="250" y="310" width="480" height="80" fill="#D8C3A5" ${O}/><rect x="330" y="230" width="320" height="80" fill="#E6D2B5" ${O}/><rect x="410" y="150" width="160" height="80" fill="#F2E3CC" ${O}/>
${T(490,360,'Gaon',{fs:28})}${T(490,280,'Block',{fs:28})}${T(490,200,'Zila',{fs:28})}${RN(490,130,'73',70)}
${emoji(110,385,'🛖',90)}${emoji(180,390,'🌳',70)}
<rect x="830" y="140" width="240" height="160" rx="6" fill="#fff" ${O}/><rect x="940" y="300" width="12" height="90" fill="#8B5A2B"/>${T(950,190,'11th Schedule',{fs:24})}${T(950,250,'29 kaam',{fs:40,fill:'#2E9B3A'})}${lab(950,100,'Part IX','#FFF3B0',18)}`});
add({n:'74',suf:'th',y:'1992',title:'Municipalities',tc:'#E3F0FF',hook:'74 ka 4 → 4-pahiya shehar. Schedule agla (12th)',
chain:['Municipality ka status nahi','Part IXA'],res:'12th Schedule: 18 subjects',
svg:`${[[60,120,'#B7BDC7'],[170,60,'#D7C6F2'],[280,150,'#BFE3F7'],[900,90,'#F7D9A8'],[1010,140,'#B7BDC7']].map(([x,h,f])=>`<rect x="${x}" y="${330-260+h}" width="100" height="${260-h}" fill="${f}" ${O}/>`+[0,1,2].map(r=>`<rect x="${x+15}" y="${330-240+h+r*40}" width="20" height="22" fill="#fff" ${O}/><rect x="${x+60}" y="${330-240+h+r*40}" width="20" height="22" fill="#fff" ${O}/>`).join('')).join('')}
<rect x="0" y="330" width="1140" height="80" fill="#777"/>${[100,300,500,700,900].map(x=>`<rect x="${x}" y="365" width="80" height="8" fill="#fff"/>`).join('')}
<path d="M420 340 L440 270 Q450 250 480 250 L640 250 Q670 250 690 280 L740 290 Q760 295 760 320 L760 340Z" fill="#E0262F" ${O}/><rect x="470" y="262" width="80" height="30" fill="#BFE3F7" ${O}/><rect x="560" y="262" width="80" height="30" fill="#BFE3F7" ${O}/>${[470,700].map(x=>`<circle cx="${x}" cy="345" r="26" fill="#333"/><circle cx="${x}" cy="345" r="10" fill="#bbb"/>`).join('')}<rect x="560" y="305" width="80" height="28" fill="#FFF3B0" ${O}/>${T(600,327,'74',{fs:22,fill:'#E0262F'})}
${lab(590,140,'Municipal Office','#E3F0FF',20)}<rect x="900" y="20" width="200" height="60" rx="6" fill="#fff" ${O}/>${T(1000,48,'12th Schedule',{fs:20})}${T(1000,72,'18 kaam',{fs:20,fill:'#2E9B3A'})}${lab(250,40,'Part IXA','#FFF3B0',18)}`});
add({n:'86',suf:'th',y:'2002',title:'Right to Education',tc:'#FFF3B0',hook:'86 → 6 saal se shuru, class 8 tak (6–14 saal)',
chain:['Bachche school se bahar','21A: 6–14 saal = FR','45: 0–6 care'],res:'51A(k): maa-baap ki duty',
svg:`${ground()}${school(60,390,'SCHOOL')}<rect x="140" y="290" width="100" height="100" fill="#8B5A2B" ${O}/>${RN(190,280,'6',60)}
${person(320,390,{s:0.75,shirt:'#F28B9B'})}<rect x="290" y="270" width="26" height="40" rx="6" fill="#7FB3E0" ${O}/>${lab(320,410-15,'6 saal','#E3F0FF',14)}
${[1,2,3,4,5,6,7,8].map(i=>`<rect x="${400+i*55}" y="230" width="44" height="80" fill="${i==8?'#FDE2E4':'#F4F7FB'}" ${O}/>${T(422+i*55,280,String(i),{fs:24,fill:i==8?'#E0262F':'#333'})}`).join('')}${lab(700,190,'Class 1 → 8 (21A)','#E2F7E1',18)}
${person(940,390,{s:0.7,shirt:'#7FB3E0',ra:[30,-60]})}${person(1020,390,{s:0.7,shirt:'#F7A54A',ra:[30,-60]})}${lab(980,190+20,'51A(k)','#FFF3B0',18)}${lab(700,370,'Art 45: 0–6 care','#FDE2E4',16)}`});
add({n:'89',suf:'th',y:'2003',title:'Alag NCSC & NCST',tc:'#FDE2E4',hook:'89 → 8 aur 9 alag-alag → do alag commission',
chain:['SC & ST ka ek commission (65th)','NCSC: Art 338'],res:'NCST: Art 338A',
svg:`${ground()}<rect x="120" y="260" width="380" height="24" fill="#B5793F" ${O}/><rect x="640" y="260" width="380" height="24" fill="#B5793F" ${O}/>
<path d="M500 240 l20 15 l-15 15 l25 20 l-15 20" stroke="#E0262F" stroke-width="5" fill="none"/><path d="M640 240 l-20 15 l15 15 l-25 20 l15 20" stroke="#E0262F" stroke-width="5" fill="none"/>
${[200,310,420].map(x=>person(x,270,{s:0.7,shirt:'#7FB3E0'})).join('')}${[720,830,940].map(x=>person(x,270,{s:0.7,shirt:'#9CC5A1'})).join('')}
${lab(310,340,'Art 338: SC','#E3F0FF',24)}${lab(830,340,'Art 338A: ST','#E2F7E1',24)}${RN(310,100,'8',90)}${RN(830,100,'9',90)}${arrow(520,60,460,60)}${arrow(620,60,680,60)}`});
add({n:'91',suf:'st',y:'2003',title:'Cabinet max 15%',tc:'#E2F7E1',hook:'91 → Cabinet ka size-zero diet: max 15%. Jodi: 52 ka dal-badal → 91 mein aur sakht',
chain:['Jumbo Cabinet','CoM ≤ 15% (LS ka)'],res:'Defector minister nahi ban sakta',
svg:`${ground()}<rect x="200" y="340" width="280" height="50" rx="10" fill="#E6E9EE" ${O}/><rect x="300" y="350" width="80" height="30" fill="#fff" ${O}/>${T(340,373,'91',{fs:22,fill:'#E0262F'})}
<ellipse cx="340" cy="230" rx="120" ry="110" fill="#F7A54A" ${O}/>${T(340,230,'CABINET',{fs:28})}<circle cx="310" cy="180" r="5" fill="#333"/><circle cx="370" cy="180" r="5" fill="#333"/>
<line x1="150" y1="130" x2="530" y2="130" stroke="#E0262F" stroke-width="5" stroke-dasharray="12 8"/>${lab(560,130,'Max 15%','#FDE2E4',22)}
${person(860,390,{shirt:'#D7C6F2',happy:false})}<rect x="940" y="160" width="160" height="80" rx="8" fill="#E0262F" ${O}/>${T(1020,210,'NO ENTRY',{fs:24,fill:'#fff'})}<rect x="1015" y="240" width="10" height="150" fill="#555"/>${lab(860,170,'Dal-badlu','#eee',17)}`});
// ---------- PART 3 ----------
add({n:'92',suf:'nd',y:'2003',title:'Bodo, Dogri, Maithili, Santhali',tc:'#E2F7E1',hook:'92 ka 2 → 8th Schedule mein 22 bhashayein poori',
chain:['18 bhashayein','+4: Bodo, Dogri, Maithili, Santhali'],res:'Total 22 bhashayein',
svg:`${shelf(120,90,620,290,'8th Schedule')}<line x1="130" y1="235" x2="730" y2="235" stroke="#B5793F" stroke-width="8"/>${Array.from({length:18},(_,i)=>i<12?vbook(145+i*40,115,34,115,['#E07B7B','#7FB3E0','#9CC5A1','#F5C518','#D7C6F2','#F7A54A'][i%6]):vbook(145+(i-12)*40,245,34,120,['#E07B7B','#7FB3E0','#9CC5A1','#F5C518','#D7C6F2','#F7A54A'][i%6])).join('')}
${['Bodo','Dogri','Maithili','Santhali'].map((t,i)=>vbook(400+i*48,245,42,120,'#fff',t,14)).join('')}
<rect x="830" y="150" width="200" height="120" rx="10" fill="#E2F7E1" ${O}/>${T(930,240,'22',{fs:80,fill:'#2E9B3A'})}${arrow(760,220,820,220)}${RN(930,90,'92',70)}`});
add({n:'93',suf:'rd',y:'2005',title:'Art 15(5)',tc:'#FFF3B0',hook:'93 → 9 + 3 = 12 → 12th ke baad college admission',
chain:['Private colleges mein reservation pe case'],res:'Art 15(5): educational institutions (private bhi)',
svg:`${ground()}<rect x="420" y="130" width="40" height="260" fill="#C9A15E" ${O}/><rect x="900" y="130" width="40" height="260" fill="#C9A15E" ${O}/>${[0,1,2,3,4,5,6,7,8,9].map(i=>`<line x1="${480+i*42}" y1="200" x2="${480+i*42}" y2="390" stroke="#555" stroke-width="5"/>`).join('')}<path d="M460 200 Q680 150 900 200" fill="none" stroke="#555" stroke-width="6"/>
<rect x="560" y="230" width="240" height="70" rx="6" fill="#fff" ${O}/>${T(680,260,'Private College',{fs:18})}${T(680,288,'15(5) Reserved Seats',{fs:18,fill:'#2E9B3A'})}
${person(250,390,{shirt:'#F5C518',ra:[40,-40]})}${paper(270,190,70,80,'12th Pass',13,10,'#FFF8E1')}${RN(680,100,'9 + 3 = 12',60)}`});
add({n:'96',suf:'th',y:'2011',title:'Oriya → Odia',tc:'#E3F0FF',hook:'96 → 9 aur 6 ulte → spelling ulti-palti',
chain:['Purani spelling "Oriya"'],res:'Naya naam "Odia"',
svg:`${RN(260,190,'9',140,{rot:-15})}${RN(380,190,'6',140,{rot:15})}<path d="M240 60 Q320 10 400 60" fill="none" stroke="#333" stroke-width="3"/><polygon points="400,60 385,45 380,65" fill="#333"/><path d="M400 230 Q320 280 240 230" fill="none" stroke="#333" stroke-width="3"/><polygon points="240,230 255,245 260,225" fill="#333"/>
<rect x="160" y="290" width="300" height="80" rx="8" fill="#ccc" ${O}/>${T(310,345,"'Oriya'",{fs:40})}<line x1="190" y1="330" x2="430" y2="330" stroke="#E0262F" stroke-width="5"/>
${arrow(500,330,620,330)}<rect x="660" y="290" width="300" height="80" rx="8" fill="#E2F7E1" ${O}/>${T(810,345,"'Odia'",{fs:40,fill:'#2E9B3A'})}
<g transform="rotate(-30 800 150)"><rect x="740" y="120" width="140" height="60" rx="8" fill="#BFE3F7" ${O}/><rect x="740" y="120" width="50" height="60" rx="8" fill="#F28B9B" ${O}/></g><g transform="rotate(40 960 200)"><rect x="950" y="110" width="20" height="160" fill="#4A90D9" ${O}/><path d="M950 270 L960 300 L970 270Z" fill="#333"/></g>`});
add({n:'97',suf:'th',y:'2011',title:'Co-operative societies',tc:'#E2F7E1',hook:'97 ka 7 = "saath" → saath mein kaam = co-operative',
chain:['Banana = FR 19(1)(c)','Badhawa = DPSP 43B'],res:'Apna ghar: Part IXB',
svg:`${ground()}<rect x="780" y="170" width="300" height="220" fill="#E6E9EE" ${O}/><path d="M760 170 L930 100 L1100 170Z" fill="#B7BDC7" ${O}/><rect x="810" y="200" width="240" height="60" fill="#fff" ${O}/>${T(930,225,'Co-op Society',{fs:20})}${T(930,250,'Part IXB',{fs:20,fill:'#2E9B3A'})}<rect x="890" y="290" width="80" height="100" fill="#8B5A2B" ${O}/>
<path d="M60 260 L770 280" stroke="#C9A15E" stroke-width="12"/>${[150,260,370,480,590].map((x,i)=>person(x,390,{s:0.85,shirt:['#F7F2E8','#9CC5A1','#F7A54A','#7FB3E0','#F7F2E8'][i],la:[30,10],ra:[60,10]})).join('')}
${RN(120,150,'7',110)}${lab(380,90,'Saath mein kaam','#FFF3B0',20)}${lab(380,140,'19(1)(c) · 43B','#E3F0FF',17)}`});
add({n:'99',suf:'th',y:'2014',title:'NJAC',tc:'#FDE2E4',hook:'99 → nervous ninety → 99 pe out',
chain:['Collegium pe sawaal','NJAC bana'],res:'2015 mein struck down (4th Judges case)',
svg:`<rect x="0" y="330" width="1140" height="80" fill="#B9D88A"/>${[200,225,250].map((x,i)=>`<rect x="${x}" y="${250}" width="10" height="90" fill="#F7D9A8" ${O} transform="rotate(${[-25,10,35][i]} ${x+5} 340)"/>`).join('')}
${person(420,390,{shirt:'#4A90D9',s:1.2,ra:[50,-90],la:[40,-80]})}${T(420,240,'NJAC',{fs:16,fill:'#fff'})}<rect x="470" y="120" width="14" height="110" rx="5" fill="#C9A15E" ${O} transform="rotate(30 477 230)"/>${RN(300,180,'99',70)}
${person(800,390,{judge:1,wig:1,s:1.2,ra:[10,-110]})}${lab(800,130,'Supreme Court','#E3F0FF',16)}${T(824,95,'OUT!',{fs:28,fill:'#E0262F'})}
<rect x="950" y="40" width="160" height="80" rx="6" fill="#222" ${O}/>${T(1030,95,'2015',{fs:40,fill:'#7CFC7C',extra:'font-family="Courier New, monospace"'})}${lab(1030,160,'4th Judges case','#FFF3B0',15)}`});
add({n:'100',suf:'th',y:'2015',title:'India–Bangladesh LBA',tc:'#FFF3B0',hook:'100 = century → Bangladesh ke saath zameen ki century deal',
chain:['Border enclaves ka jhagda'],res:'Land Boundary Agreement',
svg:`${ground()}${tiranga(90,250,1.1)}<rect x="330" y="300" width="480" height="90" fill="#C9A15E" ${O}/>
${person(430,390,{shirt:'#F7F2E8',s:1.2,ra:[60,-20]})}${person(710,390,{shirt:'#4A90D9',s:1.2,ra:[60,-20],flip:1})}${T(570,240,'🤝',{fs:50})}
<path d="M360 300 l60 -30 l50 20 l-40 25z" fill="#9CC5A1" ${O}/><path d="M700 300 l60 -30 l50 20 l-40 25z" fill="#9CC5A1" ${O}/><path d="M460 140 Q570 90 680 140" fill="none" stroke="#888" stroke-width="3" stroke-dasharray="6 5"/>
<g transform="translate(1000,0)"><line x1="0" y1="250" x2="0" y2="390" stroke="#555" stroke-width="5"/><rect x="0" y="250" width="70" height="46" fill="#006A4E" ${O}/><circle cx="30" cy="273" r="13" fill="#F42A41"/></g>
<circle cx="980" cy="110" r="70" fill="#F28B9B" ${O}/>${T(980,130,'100',{fs:46,fill:'#fff'})}<path d="M980 180 q-10 40 10 70" stroke="#555" stroke-width="2" fill="none"/>${lab(570,60,'Land Boundary Agreement','#E2F7E1',20)}`});
add({n:'101',suf:'st',y:'2016',title:'GST',tc:'#E2F7E1',hook:'101 → 1 desh, 0 alag tax, 1 GST. Article mein sab "A" wale: 246A, 269A, 279A',
chain:['Alag-alag tax','246A: Union + State dono GST','269A: inter-state IGST'],res:'279A: GST Council',
svg:`${[0,1,2,3].map(i=>paper(60+i*30,130+i*25,110,140,['VAT','Excise','Service','Entry'][i],14,(i-1.5)*8)).join('')}${xmark(150,350,1)}
${arrow(300,260,380,260)}<path d="M640 20 L1000 20 L960 60 L1000 100 L640 100 L680 60Z" fill="#E07B7B" ${O}/>${T(820,72,'One Nation, One Tax',{fs:28,fill:'#fff'})}
<ellipse cx="640" cy="300" rx="220" ry="60" fill="#B7BDC7" ${O}/><ellipse cx="640" cy="290" rx="220" ry="60" fill="#E6E9EE" ${O}/>${T(640,285,'GST Council',{fs:30})}${T(640,320,'279A',{fs:26,fill:'#2E9B3A'})}
${[480,560,720,800].map(x=>chair(x,250,0.6,'#7FB3E0')).join('')}${RN(450,150,'1-0-1',60)}${lab(980,250,'246A','#FFF3B0',18)}${lab(980,310,'269A (IGST)','#E3F0FF',18)}`});
add({n:'102',suf:'nd',y:'2018',title:'NCBC → 338B',tc:'#FDE2E4',hook:'102 ka 2 = 2nd letter B → 338B. 338 SC → 338A ST → 338B OBC. Jodi: 102 ne chheena → 105 ne lautaya',
chain:['OBC commission sirf kanoon se'],res:'NCBC ko constitutional status (338B)',
svg:`${ground()}${[['338','SC','#ccc'],['338A','ST','#C9A15E'],['338B','OBC','#F7A54A']].map(([a,b,f],i)=>`<rect x="${180+i*290}" y="110" width="180" height="280" rx="6" fill="${f}" ${O}/><rect x="${200+i*290}" y="130" width="140" height="80" fill="#fff" ${O}/>${T(270+i*290,165,a,{fs:28})}${T(270+i*290,198,b,{fs:24})}<circle cx="${335+i*290}" cy="270" r="8" fill="#555"/>`).join('')}
<circle cx="890" cy="80" r="34" fill="#E0262F" ${O}/>${T(890,95,'B',{fs:40,fill:'#fff'})}${[[-50,-30],[50,-30],[60,20],[-60,20]].map(([dx,dy])=>`<text x="${910+dx*1.2}" y="${80+dy}" font-size="22">✨</text>`).join('')}${RN(80,250,'2',120)}${arrow(110,200,170,140)}`});
add({n:'103',suf:'rd',y:'2019',title:'EWS 10%',tc:'#FFF3B0',hook:'103 → 10 + 3 → 10% EWS, aur 3 = teesri category (SC/ST, OBC, ab EWS)',
chain:['Gareeb general ke liye kuch nahi','15(6): education'],res:'16(6): naukri, 10% EWS',
svg:`${ground()}${person(200,390,{shirt:'#9CC5A1',happy:false,ra:[50,-10]})}<path d="M150 300 l-30 10 l10 30 l30 -10z" fill="#ddd" ${O}/>${lab(200,170,'Khaali jeb','#eee',16)}
<g transform="rotate(-12 330 230)"><rect x="270" y="200" width="120" height="60" rx="6" fill="#FFF3B0" ${O}/>${T(330,238,'10% EWS',{fs:20,fill:'#E0262F'})}</g>
${[['SC/ST','#7FB3E0'],['OBC','#9CC5A1'],['EWS','#F5C518']].map(([t,f],i)=>`<rect x="${560+i*170}" y="210" width="130" height="180" fill="${f}" ${O}/><rect x="${545+i*170}" y="200" width="160" height="30" fill="#fff" ${O}/>${T(625+i*170,224,t,{fs:20})}`).join('')}${RN(400,110,'10 + 3',80)}${lab(880,140,'3rd category','#E2F7E1',18)}`});
add({n:'104',suf:'th',y:'2019',title:'SC/ST 2030 tak, Anglo-Indian out',tc:'#E3F0FF',hook:'104 → Anglo-Indian ko "4-ever" bye. Jodi: 45th wala extension → 104 mein Anglo-Indian out',
chain:['Reservation ki time-limit khatam','SC/ST seats 2030 tak'],res:'Anglo-Indian nomination ended',
svg:`${ground()}<rect x="150" y="150" width="150" height="240" fill="#8B5A2B" ${O}/><rect x="165" y="165" width="120" height="225" fill="#B5793F" ${O}/>${lab(225,110,'4-ever','#fff',22)}
${person(90,390,{shirt:'#C0504D',bald:1,ra:[30,-60]})}${lab(90,180+10,'Anglo-Indian: bye!','#FDE2E4',15)}
<line x1="380" y1="20" x2="380" y2="390" stroke="#ccc" stroke-width="3"/>${calendar(800,40,150,140,'TAK','2030',46)}
${[0,1,2,3,4].map(i=>chair(480+i*110,390,1.4,'#C0504D')).join('')}${lab(700,260,'SC/ST seats','#E3F0FF',22)}${RN(330,330,'4',120)}`});
add({n:'105',suf:'th',y:'2021',title:'States ko SEBC power wapas',tc:'#FFF3B0',hook:'105 ka 5 = paanch ungli → power haath mein wapas',
chain:['102nd ke baad States se OBC list ki power chhin gayi'],res:'States ko SEBC identify karne ki power wapas (342A)',
svg:`<rect x="0" y="210" width="230" height="80" fill="#4A6A8A" ${O}/>${hand(260,250,1.3,'#E9B48A')}<rect x="250" y="150" width="140" height="180" rx="6" fill="#F5C518" ${O}/>${T(320,230,'OBC',{fs:30})}${T(320,265,'List',{fs:30})}${lab(120,180,'Centre','#E3F0FF',18)}
<path d="M420 160 Q600 40 760 160" fill="none" stroke="#888" stroke-width="6"/><polygon points="760,160 735,150 750,130" fill="#888"/>
${hand(880,300,2.0,'#F2C29B')}${RN(880,330,'5',90)}${lab(880,60,'State: power wapas','#E2F7E1',20)}${lab(600,360,'Art 342A','#FFF3B0',20)}`});
add({n:'106',suf:'th',y:'2023',title:'Nari Shakti Vandan',tc:'#FDE2E4',hook:'106 ka 6 → women ka sixer → 1/3 seats',
chain:['Mahilayein kam','1/3 seats: LS, State Assemblies, Delhi'],res:'Next delimitation ke baad, 15 saal',
svg:`<rect x="0" y="340" width="1140" height="70" fill="#B9D88A"/>${person(220,390,{shirt:'#E07B7B',s:1.3,hair:'#222',ra:[60,-100],la:[50,-90]})}<rect x="270" y="80" width="16" height="130" rx="6" fill="#C9A15E" ${O} transform="rotate(25 278 210)"/>
<path d="M330 130 Q560 -30 760 110" fill="none" stroke="#E0262F" stroke-width="3" stroke-dasharray="8 6"/><circle cx="560" cy="45" r="16" fill="#E0262F" ${O}/>${T(560,90,'1/3',{fs:30,fill:'#E0262F'})}
${parliament(820,340,1.6)}<path d="M620 340 A200 120 0 0 1 690 210 L820 340Z" fill="#F28B9B" opacity="0.6"/>
<rect x="960" y="30" width="150" height="80" rx="6" fill="#222" ${O}/>${T(1035,85,'106',{fs:44,fill:'#FF3B3B',extra:'font-family="Courier New, monospace"'})}${lab(380,260,'SIXER!','#FFF3B0',24)}`});
module.exports=C;
