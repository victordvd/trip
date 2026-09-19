document.documentElement.classList.add('js');

const itinerary = [
  {d:'02/04',w:'四',r:'canada',c:'台北 → 溫哥華',t:'飛越日期變更線',x:'搭乘 CI0032，23:35 自桃園第二航廈起飛，同日 19:00 抵達溫哥華。',a:['入境、領行李後入住機場或 Richmond 飯店','不安排同晚黃刀鎮轉機，保留延誤緩衝'],m:'飛行日',temp:'YVR 3–8°C'},
  {d:'02/05',w:'五',r:'canada',c:'溫哥華 → 黃刀鎮',t:'進入加拿大北境',x:'上午補給，搭中午前後直飛班機前往黃刀鎮；抵達後領取極地衣物。',a:['參考 AC8478 約 13:00 起飛，實際待出票確認','晚餐後早休；精神充足才加排自選極光'],m:'轉場',temp:'YZF -20–35°C'},
  {d:'02/06',w:'六',r:'canada',c:'黃刀鎮',t:'城市與第一晚極光',x:'用白天認識北方生活，晚上以機動追獵尋找最清朗的天空。',a:['威爾斯親王北方文化中心、Frame Lake 步道','22:00–02:00 極光追獵；準備腳架與備用電池'],m:'極光 1',temp:'-20–35°C'},
  {d:'02/07',w:'日',r:'canada',c:'黃刀鎮',t:'狗拉雪橇與極光村',x:'白天體驗雪地活動，晚上改用固定營地，分散觀測型態。',a:['半日狗拉雪橇與熱飲體驗','Aurora Village 帳篷營地與原住民故事'],m:'極光 2',temp:'-20–35°C'},
  {d:'02/08',w:'一',r:'canada',c:'黃刀鎮',t:'冰湖、舊城與補拍夜',x:'上午慢起，午後走訪 Great Slave Lake 周邊與 Yellowknife Old Town。',a:['Bush Pilots Monument、冰路視天候開放','冰釣或雪地摩托；晚間第三次極光'],m:'極光 3',temp:'-20–35°C'},
  {d:'02/09',w:'二',r:'canada',c:'黃刀鎮 → 里斯本',t:'跨大西洋移動',x:'以聯程票經加拿大樞紐與歐洲門戶轉往里斯本，避免分段自行轉機。',a:['清晨至中午離開黃刀鎮，轉機至少 3 小時','機上過夜；行李放一套換洗與基本盥洗用品'],m:'飛行日',temp:'機上過夜'},
  {d:'02/10',w:'三',r:'portugal',c:'里斯本',t:'沿著石板路慢慢落地',x:'抵達日只排低強度舊城散步，讓身體從極地時差切回歐洲節奏。',a:['Baixa、商業廣場、Alfama 巷弄','傍晚選一座 miradouro 看夕陽'],m:'抵達日',temp:'9–16°C'},
  {d:'02/11',w:'四',r:'portugal',c:'里斯本',t:'貝倫的航海記憶',x:'沿塔霍河走訪大航海時代地標，用博物館與甜點串成完整一天。',a:['熱羅尼莫斯修道院、貝倫塔、發現者紀念碑','Pastéis de Belém；晚間回 Chiado'],m:'文化',temp:'9–16°C'},
  {d:'02/12',w:'五',r:'portugal',c:'辛特拉',t:'雲霧裡的浪漫宮殿',x:'搭火車往返辛特拉，主排佩納宮與雷加萊拉；避免一天塞入三座宮殿。',a:['佩納宮預約上午時段','雷加萊拉莊園；大雨時改里斯本室內景點'],m:'一日遊',temp:'7–14°C'},
  {d:'02/13',w:'六',r:'portugal',c:'里斯本',t:'電車、街區與市場',x:'以步行和短程電車穿過生活街區，保留一段自由採買與咖啡時間。',a:['Estrela、Bica、Chiado 街區','Time Out Market 或傳統小館晚餐'],m:'慢遊',temp:'9–16°C'},
  {d:'02/14',w:'日',r:'portugal',c:'里斯本 → 波多',t:'沿著葡萄牙北上',x:'上午搭 Alfa Pendular 或 Intercidades 前往波多，午後在河岸展開第一眼。',a:['Lisboa Oriente → Porto Campanhã 約 3 小時','入住後走 Ribeira、路易一世大橋下層'],m:'火車',temp:'7–15°C'},
  {d:'02/15',w:'一',r:'portugal',c:'波多',t:'花磚與鐘樓的城市',x:'把舊城高低差切成順坡路線，減少反覆爬坡。',a:['聖本篤車站、教士塔、萊羅書店','Bolhão 市場、Santa Catarina 街'],m:'舊城',temp:'7–15°C'},
  {d:'02/16',w:'二',r:'portugal',c:'波多',t:'從酒窖望回舊城',x:'過橋到 Vila Nova de Gaia，將酒窖導覽和河岸景色排在同一區。',a:['預約一間波特酒酒窖導覽','傍晚至 Foz 海岸；雨天改 Palácio da Bolsa'],m:'河岸',temp:'7–15°C'},
  {d:'02/17',w:'三',r:'spain',c:'波多 → 巴塞隆納',t:'飛入加泰隆尼亞',x:'以直飛為優先；抵達後只排哥德區與 El Born 晚餐。',a:['OPO → BCN 約 1 小時 45 分，班次待確認','機場進城優先 Aerobús 或計程車'],m:'飛行日',temp:'7–15°C'},
  {d:'02/18',w:'四',r:'spain',c:'巴塞隆納',t:'高第的光線實驗',x:'上午進聖家堂，午後步行至聖保羅醫院，避免跨城移動。',a:['聖家堂含塔樓時段票','聖十字聖保羅醫院、Eixample 晚餐'],m:'建築',temp:'7–15°C'},
  {d:'02/19',w:'五',r:'spain',c:'巴塞隆納',t:'從奎爾公園走回 Gràcia',x:'早場進奎爾公園，離開後沿 Gràcia 社區慢慢走回市區。',a:['奎爾公園 Monumental Zone','Gràcia 小店、咖啡館與廣場'],m:'街區',temp:'7–15°C'},
  {d:'02/20',w:'六',r:'spain',c:'巴塞隆納',t:'現代主義與地中海',x:'上午看 Passeig de Gràcia 建築，午後依天候選海濱或博物館。',a:['巴特婁之家或米拉之家二選一入內','El Born、海濱；雨天改畢卡索博物館'],m:'彈性日',temp:'7–15°C'},
  {d:'02/21',w:'日',r:'spain',c:'巴塞隆納 → 馬德里',t:'高鐵穿越西班牙',x:'搭上午 AVE／Avlo 前往馬德里，午後入住後走麗池公園。',a:['Barcelona Sants → Madrid Atocha 約 2.5–3 小時','麗池公園、水晶宮外觀、Gran Vía 夜景'],m:'高鐵',temp:'3–13°C'},
  {d:'02/22',w:'一',r:'spain',c:'馬德里',t:'普拉多與文學區',x:'把主力放在普拉多美術館，避免同日連看三大館造成疲勞。',a:['普拉多美術館預留 3 小時','Barrio de las Letras、海鮮飯或小酒館'],m:'藝術',temp:'3–13°C'},
  {d:'02/23',w:'二',r:'spain',c:'馬德里',t:'王宮與城市生活',x:'從王宮一路步行至主廣場，再以市場和購物街收尾。',a:['馬德里王宮、阿穆德納主教座堂','主廣場、聖米格爾市場、Gran Vía'],m:'城市',temp:'3–13°C'},
  {d:'02/24',w:'三',r:'spain',c:'馬德里 → 塞維亞',t:'向南進入安達魯西亞',x:'中午前搭高鐵南下，午後只排 Santa Cruz 舊城與晚餐。',a:['Madrid Atocha → Sevilla Santa Justa 約 2.5–3 小時','Metropol Parasol 日落或舊城夜遊'],m:'高鐵',temp:'8–19°C'},
  {d:'02/25',w:'四',r:'spain',c:'塞維亞',t:'王宮、主教堂與佛朗明哥',x:'核心景點都在步行範圍，晚間以小型 tablao 表演收尾。',a:['塞維亞王宮早場、主教座堂與 Giralda','預約 19:00 前後佛朗明哥表演'],m:'經典',temp:'8–19°C'},
  {d:'02/26',w:'五',r:'spain',c:'塞維亞',t:'廣場、花園與河的兩岸',x:'用較鬆的一天補足戶外景觀，若下雨則移入藝術與陶瓷景點。',a:['西班牙廣場、瑪麗亞路易莎公園','Triana 市場與陶瓷街區'],m:'慢遊',temp:'8–19°C'},
  {d:'02/27',w:'六',r:'netherlands',c:'塞維亞 → 阿姆斯特丹',t:'從南歐飛向低地國',x:'直飛優先，若季節班次未開則經馬德里；傍晚只排運河散步。',a:['SVQ → AMS 約 3 小時，實際班次待確認','入住後走九街或 Jordaan'],m:'飛行日',temp:'2–8°C'},
  {d:'02/28',w:'日',r:'netherlands',c:'阿姆斯特丹',t:'黃金時代與運河日常',x:'上午國家博物館，午後穿過 Museumplein 前往 Jordaan。',a:['Rijksmuseum 預約開館時段','Jordaan、Anne Frank House 外圍與運河帶'],m:'博物館',temp:'2–8°C'},
  {d:'03/01',w:'一',r:'netherlands',c:'阿姆斯特丹',t:'梵谷、街區與水上視角',x:'上午看梵谷，午後到 De Pijp，黃昏搭有暖氣的運河船。',a:['Van Gogh Museum 定時票','Albert Cuyp Markt、運河遊船'],m:'藝術',temp:'2–8°C'},
  {d:'03/02',w:'二',r:'netherlands',c:'荷蘭近郊',t:'風車或古城二選一',x:'晴朗時去贊瑟斯漢斯；風雨較強則改搭火車到烏特勒支。',a:['方案 A：Zaanse Schans 半日＋阿姆斯特丹自由時間','方案 B：Utrecht 舊城與 Oudegracht'],m:'一日遊',temp:'2–8°C'},
  {d:'03/03',w:'三',r:'netherlands',c:'阿姆斯特丹 → 台北',t:'從運河城市返航',x:'上午退房並前往 Schiphol；國際線至少提前 3 小時抵達機場。',a:['直飛台北優先；若轉機避免低於 2 小時','機上過夜，保留一套輕便衣物'],m:'飛行日',temp:'機上過夜'},
  {d:'03/04',w:'四',r:'netherlands',c:'抵達台灣',t:'旅程完成',x:'抵達桃園後不安排工作或長途接駁，讓身體恢復時差。',a:['確認所有行李與退稅單據','備份照片、整理保險或延誤文件'],m:'返抵',temp:'TPE 約 16–22°C'}
];

const stays = [
  {city:'溫哥華',area:'YVR／Richmond · 1 晚',name:'機場旁過夜',rate:'NT$ 4,500–7,500／房',desc:'選免費接駁或步行可達捷運的飯店，隔日從容返回機場。',opts:[['Fairmont Vancouver Airport','https://maps.google.com/?q=Fairmont+Vancouver+Airport'],['Radisson Blu Vancouver Airport','https://maps.google.com/?q=Radisson+Blu+Vancouver+Airport']]},
  {city:'黃刀鎮',area:'Downtown · 4 晚',name:'步行生活圈',rate:'NT$ 7,000–10,000／房',desc:'多數極光團可接送，白天步行到超市、餐廳與文化中心。',opts:[['The Explorer Hotel','https://maps.google.com/?q=The+Explorer+Hotel+Yellowknife'],['Chateau Nova Yellowknife','https://maps.google.com/?q=Chateau+Nova+Yellowknife']]},
  {city:'里斯本',area:'Baixa／Chiado · 4 晚',name:'舊城與交通交會',rate:'NT$ 4,500–7,000／房',desc:'方便搭電車、地鐵與前往辛特拉的火車，夜間也容易步行覓食。',opts:[['My Story Hotel Tejo','https://maps.google.com/?q=My+Story+Hotel+Tejo'],['Browns Central Hotel','https://maps.google.com/?q=Browns+Central+Hotel+Lisbon']]},
  {city:'波多',area:'Batalha／Bolhão · 3 晚',name:'住在坡頂較省力',rate:'NT$ 4,000–6,500／房',desc:'從車站和舊城高處開始走，回程可搭地鐵，避免每天拖行李爬坡。',opts:[['NH Collection Porto Batalha','https://maps.google.com/?q=NH+Collection+Porto+Batalha'],['Moov Hotel Porto Centro','https://maps.google.com/?q=Moov+Hotel+Porto+Centro']]},
  {city:'巴塞隆納',area:'Eixample · 4 晚',name:'棋盤街區中心',rate:'NT$ 5,500–8,500／房',desc:'位於聖家堂、舊城與 Sants 車站之間，搭地鐵與步行都順。',opts:[['Hotel Jazz Barcelona','https://maps.google.com/?q=Hotel+Jazz+Barcelona'],['Catalonia Passeig de Gràcia','https://maps.google.com/?q=Catalonia+Passeig+de+Gracia']]},
  {city:'馬德里',area:'Atocha／Centro · 3 晚',name:'高鐵與美術館兼顧',rate:'NT$ 4,500–7,500／房',desc:'靠近抵達和南下車站，也能步行到普拉多、文學區與麗池公園。',opts:[['Catalonia Atocha','https://maps.google.com/?q=Catalonia+Atocha'],['Room Mate Alba','https://maps.google.com/?q=Room+Mate+Alba+Madrid']]},
  {city:'塞維亞',area:'Centro／Santa Cruz · 3 晚',name:'橘樹庭院旁',rate:'NT$ 4,500–7,500／房',desc:'核心景點集中步行完成；從 Santa Justa 搭計程車入住最省力。',opts:[['H10 Casa de la Plata','https://maps.google.com/?q=H10+Casa+de+la+Plata'],['Hotel Amadeus Sevilla','https://maps.google.com/?q=Hotel+Amadeus+Sevilla']]},
  {city:'阿姆斯特丹',area:'Centrum／Amstel · 4 晚',name:'避開最吵鬧的核心',rate:'NT$ 6,500–10,500／房',desc:'選電車或地鐵直達中央車站與 Museumplein 的區域，安靜但不偏遠。',opts:[['Motel One Waterlooplein','https://maps.google.com/?q=Motel+One+Amsterdam+Waterlooplein'],['citizenM Amstel','https://maps.google.com/?q=citizenM+Amstel']]}
];

const transport = [
  ['02/04','TPE → YVR','CI0032 · 23:35 → 19:00（同日）','已提供','春節首日；先鎖定可改票票價'],
  ['02/05','YVR → YZF','直飛 · 參考 AC8478 中午班','待確認','CI0032 抵達當晚無安全銜接，溫哥華住 1 晚'],
  ['02/09–10','YZF → LIS','聯程航班 · 加拿大／歐洲樞紐轉機','待出票','冬季轉機至少 3 小時；不自轉'],
  ['02/14','LIS → OPO','CP Alfa Pendular／Intercidades','待開賣','約 3 小時；選中午前抵達'],
  ['02/17','OPO → BCN','直飛優先','待確認','含托運行李比較總價'],
  ['02/21','BCN → MAD','AVE／Avlo 高鐵','待開賣','約 2.5–3 小時；Sants → Atocha'],
  ['02/24','MAD → SVQ','AVE／Avlo 高鐵','待開賣','約 2.5–3 小時；Atocha → Santa Justa'],
  ['02/27','SVQ → AMS','直飛優先；MAD 轉機備案','待確認','季節班表變動時採一張票轉機'],
  ['03/03–04','AMS → TPE','直飛優先','待出票','3/4 抵台；Schiphol 提前 3 小時']
];

const budgets = [['長程與區域機票',110000,160000],['住宿（26 晚）',70000,100000],['極光與雪地活動',30000,45000],['城際與市內交通',30000,45000],['餐飲與景點',45000,60000],['保險與預備金',15000,25000]];

const itineraryList = document.querySelector('#itinerary-list');
const renderItinerary = region => {
  itineraryList.innerHTML = itinerary.map(day => `<article class="itinerary-card" data-region="${day.r}" ${region !== 'all' && region !== day.r ? 'hidden' : ''}><div class="day-date"><strong>${day.d}</strong><span>星期${day.w}</span></div><div class="day-content"><h3>${day.c}<br>${day.t}</h3><p>${day.x}</p><ul>${day.a.map(item=>`<li>${item}</li>`).join('')}</ul></div><div class="day-meta"><span class="day-chip">${day.m}</span><span class="day-weather">${day.temp}</span></div></article>`).join('');
};
renderItinerary('all');

document.querySelectorAll('.region-tabs button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.region-tabs button').forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  renderItinerary(button.dataset.region);
}));

document.querySelector('#stay-grid').innerHTML = stays.map((stay,i)=>`<article class="stay-card"><span class="stay-number">${String(i+1).padStart(2,'0')}</span><span class="city">${stay.area}</span><h3>${stay.city} · ${stay.name}</h3><p>${stay.desc}</p><span class="stay-rate">${stay.rate}</span><div class="stay-options">${stay.opts.map(o=>`<a href="${o[1]}" target="_blank" rel="noreferrer">${o[0]} ↗</a>`).join('')}</div></article>`).join('');

document.querySelector('#transport-body').innerHTML = transport.map(row=>`<tr><td><strong>${row[0]}</strong></td><td>${row[1]}</td><td><strong>${row[2]}</strong><small>${row[4]}</small></td><td><span class="status ${row[3]==='已提供'?'':'pending'}">${row[3]}</span></td></tr>`).join('');

const maxBudget = Math.max(...budgets.map(b=>b[2]));
document.querySelector('#budget-bars').innerHTML = budgets.map(b=>`<div class="budget-row"><span>${b[0]}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(b[2]/maxBudget*100)}%"></div></div><strong>${Math.round(b[1]/1000)}–${Math.round(b[2]/1000)}K</strong></div>`).join('');

const stops = [['台北','02/04 出發',25.08,121.23,'#0b2b46'],['溫哥華','02/04–05 · 1 晚',49.20,-123.18,'#49d799'],['黃刀鎮','02/05–09 · 4 晚',62.47,-114.37,'#49d799'],['里斯本','02/10–14 · 4 晚',38.72,-9.14,'#f09247'],['波多','02/14–17 · 3 晚',41.15,-8.61,'#f09247'],['巴塞隆納','02/17–21 · 4 晚',41.39,2.17,'#f09247'],['馬德里','02/21–24 · 3 晚',40.42,-3.70,'#f09247'],['塞維亞','02/24–27 · 3 晚',37.39,-5.99,'#f09247'],['阿姆斯特丹','02/27–03/03 · 4 晚',52.37,4.90,'#4f8fbd']];

const mapStatus = document.querySelector('#map-status');
const mapButtons = [...document.querySelectorAll('[data-map-view]')];
const mapLink = stop => `https://www.google.com/maps/search/?api=1&query=${stop[2]},${stop[3]}`;
document.querySelector('#map-city-list').innerHTML = stops.map((s,i)=>`<article class="map-city"><button type="button" data-map-stop="${i}" aria-label="在地圖查看${s[0]}"><span>${i+1}</span><strong>${s[0]}</strong></button><small>${s[1]}${i===0?' · 03/04 回台':''}</small><a href="${mapLink(s)}" target="_blank" rel="noreferrer">Google 地圖 ↗</a></article>`).join('');

// Split at the date line: Taipei → Vancouver crosses the Pacific, not Eurasia.
function mapLeg(a,b) {
  const start = [a[2],a[3]], end = [b[2],b[3]];
  if (Math.abs(end[1]-start[1])<=180) return [start,end];
  const unwrapped = end[1] + (end[1]<start[1] ? 360 : -360);
  const edge = unwrapped>180 ? 180 : -180;
  const latitude = start[0]+(end[0]-start[0])*(edge-start[1])/(unwrapped-start[1]);
  return [[start,[latitude,edge]],[[latitude,-edge],end]];
}

if (window.L) {
  document.querySelector('#trip-map').replaceChildren();
  const map = L.map('trip-map',{scrollWheelZoom:false,worldCopyJump:true,minZoom:0,zoomSnap:.25});
  let activeView = 'europe';
  let tileFailed = false;
  const views = {europe:[3,4,5,6,7,8],canada:[1,2],world:stops.map((_,i)=>i)};
  const captions = {europe:'歐洲段：里斯本 → 波多 → 巴塞隆納 → 馬德里 → 塞維亞 → 阿姆斯特丹',canada:'加拿大段：溫哥華過夜 → 黃刀鎮 4 晚極光；接往歐洲的轉機點待確認。',world:'全程：台灣 → 加拿大 → 葡萄牙 → 西班牙 → 荷蘭 → 台灣。跨太平洋連線於地圖兩側銜接。'};
  const layer = L.layerGroup().addTo(map);
  const markers = [];
  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  const updateStatus = () => { mapStatus.textContent = captions[activeView] + (tileFailed?' 部分底圖無法載入，可使用下方 Google 地圖連結。':''); };
  tiles.on('tileerror',()=>{tileFailed=true;updateStatus();});
  function fitView() {
    map.invalidateSize();
    const bounds = activeView==='world' ? [[5,-180],[72,180]] : views[activeView].map(i=>[stops[i][2],stops[i][3]]);
    map.fitBounds(bounds,{padding:[70,55],maxZoom:activeView==='europe'?5:4,animate:false});
  }
  function showView(view) {
    activeView=view;
    layer.clearLayers();
    map.closePopup();
    const indices=views[view];
    for(let i=0;i<stops.length;i++) {
      const next=(i+1)%stops.length;
      if(!indices.includes(i)||!indices.includes(next)) continue;
      const rail=[3,5,6].includes(i);
      L.polyline(mapLeg(stops[i],stops[next]),{color:rail?'#ac571b':'#27677e',weight:rail?4:3,opacity:.85,dashArray:rail?null:'8 7'}).addTo(layer)
        .bindPopup(`${stops[i][0]} → ${stops[next][0]}<br>${rail?'鐵路':'航空'}路線示意${i===2?'（轉機點待確認）':''}`);
    }
    indices.forEach(i=>{
      const s=stops[i];
      const icon=L.divIcon({className:'trip-pin',html:`<span class="custom-marker" style="--marker:${s[4]}">${i+1}</span>`,iconSize:[30,30],iconAnchor:[15,15]});
      markers[i]=L.marker([s[2],s[3]],{icon,title:s[0],alt:s[0]}).addTo(layer)
        .bindTooltip(s[0],{permanent:view!=='world',direction:[3,4,8].includes(i)?'left':'right',offset:[3,4,8].includes(i)?[-18,0]:[18,0],className:'city-label'})
        .bindPopup(`<strong>${i+1}. ${s[0]}</strong><small>${s[1]}${i===0?' · 03/04 回台':''}</small><a href="${mapLink(s)}" target="_blank" rel="noreferrer">開啟 Google 地圖 ↗</a>`);
    });
    mapButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mapView===view)));
    document.querySelectorAll('.map-city').forEach((card,i)=>{card.hidden=!indices.includes(i);});
    updateStatus();
    fitView();
  }
  mapButtons.forEach(b=>b.addEventListener('click',()=>showView(b.dataset.mapView)));
  document.querySelector('#map-reset').addEventListener('click',fitView);
  document.querySelectorAll('[data-map-stop]').forEach(b=>b.addEventListener('click',()=>{
    const i=Number(b.dataset.mapStop);
    map.setView([stops[i][2],stops[i][3]],8,{animate:false});
    markers[i].openPopup();
    document.querySelector('#trip-map').scrollIntoView({behavior:'smooth',block:'center'});
  }));
  showView('europe');
  if(window.ResizeObserver) new ResizeObserver(()=>fitView()).observe(document.querySelector('#trip-map'));
} else {
  document.querySelector('.map-fallback').textContent='互動地圖未能載入，請使用下方城市的 Google 地圖連結。';
  mapStatus.textContent='各城市日期與外部地圖仍可使用。';
  document.querySelectorAll('[data-map-view], [data-map-stop], #map-reset').forEach(b=>{b.disabled=true;});
}
