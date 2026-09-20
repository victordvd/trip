document.documentElement.classList.add('js');

const itinerary = [
  {d:'02/04',w:'四',r:'canada',c:'台北 → 溫哥華',t:'飛越日期變更線',x:'搭乘 CI0032，23:35 自桃園第二航廈起飛，同日 19:00 抵達溫哥華。',a:['入境、領行李後入住機場或 Richmond 飯店','不安排同晚黃刀鎮轉機，保留延誤緩衝'],m:'飛行日',temp:'YVR 3–8°C'},
  {d:'02/05',w:'五',r:'canada',c:'溫哥華 → 黃刀鎮',t:'進入加拿大北境',x:'上午補給，搭 AC254 直飛黃刀鎮；抵達後領取極地衣物。',a:['YVR 14:45 → YZF 17:19；建議含托運票價不超過 NT$ 10,000','晚餐後早休；精神充足才加排自選極光'],m:'轉場',temp:'YZF -20–35°C'},
  {d:'02/06',w:'六',r:'canada',c:'黃刀鎮',t:'城市與第一晚極光',x:'用白天認識北方生活，晚上以機動追獵尋找最清朗的天空。',a:['威爾斯親王北方文化中心、Frame Lake 步道','22:00–02:00 極光追獵；準備腳架與備用電池'],m:'極光 1',temp:'-20–35°C'},
  {d:'02/07',w:'日',r:'canada',c:'黃刀鎮',t:'狗拉雪橇與極光村',x:'白天體驗雪地活動，晚上改用固定營地，分散觀測型態。',a:['半日狗拉雪橇與熱飲體驗','Aurora Village 帳篷營地與原住民故事'],m:'極光 2',temp:'-20–35°C'},
  {d:'02/08',w:'一',r:'canada',c:'黃刀鎮',t:'冰湖、舊城與補拍夜',x:'上午慢起，午後走訪 Great Slave Lake 周邊與 Yellowknife Old Town。',a:['Bush Pilots Monument、冰路視天候開放','冰釣或雪地摩托；晚間第三次極光'],m:'極光 3',temp:'-20–35°C'},
  {d:'02/09',w:'二',r:'canada',c:'黃刀鎮 → 里斯本',t:'跨大西洋移動',x:'以加拿大航空同一張票經溫哥華、多倫多轉往里斯本，轉機皆超過 3 小時。',a:['AC253 05:05 → AC110 11:20 → AC810 21:10','2/10 09:20 抵達 LIS；行李放一套換洗與基本盥洗用品'],m:'飛行日',temp:'機上過夜'},
  {d:'02/10',w:'三',r:'portugal',c:'里斯本',t:'沿著石板路慢慢落地',x:'抵達日只排低強度舊城散步，讓身體從極地時差切回歐洲節奏。',a:['Baixa、商業廣場、Alfama 巷弄','傍晚選一座 miradouro 看夕陽'],m:'抵達日',temp:'9–16°C'},
  {d:'02/11',w:'四',r:'portugal',c:'里斯本',t:'貝倫的航海記憶',x:'沿塔霍河走訪大航海時代地標，用博物館與甜點串成完整一天。',a:['熱羅尼莫斯修道院、貝倫塔、發現者紀念碑','Pastéis de Belém；晚間回 Chiado'],m:'文化',temp:'9–16°C'},
  {d:'02/12',w:'五',r:'portugal',c:'辛特拉',t:'雲霧裡的浪漫宮殿',x:'搭火車往返辛特拉，主排佩納宮與雷加萊拉；避免一天塞入三座宮殿。',a:['佩納宮預約上午時段','雷加萊拉莊園；大雨時改里斯本室內景點'],m:'一日遊',temp:'7–14°C'},
  {d:'02/13',w:'六',r:'portugal',c:'里斯本',t:'電車、街區與市場',x:'以步行和短程電車穿過生活街區，保留一段自由採買與咖啡時間。',a:['Estrela、Bica、Chiado 街區','Time Out Market 或傳統小館晚餐'],m:'慢遊',temp:'9–16°C'},
  {d:'02/14',w:'日',r:'portugal',c:'里斯本 → 波多',t:'沿著葡萄牙北上',x:'上午搭 Alfa Pendular 或 Intercidades 前往波多，午後在河岸展開第一眼。',a:['Lisboa Oriente → Porto Campanhã 約 3 小時','入住後走 Ribeira、路易一世大橋下層'],m:'火車',temp:'7–15°C'},
  {d:'02/15',w:'一',r:'portugal',c:'波多',t:'花磚與鐘樓的城市',x:'把舊城高低差切成順坡路線，減少反覆爬坡。',a:['聖本篤車站、教士塔、萊羅書店','Bolhão 市場、Santa Catarina 街'],m:'舊城',temp:'7–15°C'},
  {d:'02/16',w:'二',r:'portugal',c:'波多',t:'從酒窖望回舊城',x:'過橋到 Vila Nova de Gaia，將酒窖導覽和河岸景色排在同一區。',a:['預約一間波特酒酒窖導覽','傍晚至 Foz 海岸；雨天改 Palácio da Bolsa'],m:'河岸',temp:'7–15°C'},
  {d:'02/17',w:'三',r:'portugal',c:'波多',t:'直飛前的緩衝日',x:'目前可核實的直飛落在隔日；多留一天可補足 Foz 海岸、咖啡館或雨天備案。',a:['保留半天自由活動與整理行李','VY1171 已含托運後再出票'],m:'緩衝',temp:'7–15°C'},
  {d:'02/18',w:'四',r:'spain',c:'波多 → 巴塞隆納',t:'飛入加泰隆尼亞',x:'搭 VY1171 直飛；中午抵達後只排哥德區與 El Born 晚餐。',a:['OPO 08:45 → BCN T1 11:30','機場進城優先 Aerobús 或計程車'],m:'飛行日',temp:'7–15°C'},
  {d:'02/19',w:'五',r:'spain',c:'巴塞隆納',t:'高第的光線實驗',x:'上午進聖家堂，午後步行至聖保羅醫院，避免跨城移動。',a:['聖家堂含塔樓時段票','聖十字聖保羅醫院、Eixample 晚餐'],m:'建築',temp:'7–15°C'},
  {d:'02/20',w:'六',r:'spain',c:'巴塞隆納',t:'奎爾公園與現代主義',x:'早場進奎爾公園，午後沿 Gràcia 走向 Passeig de Gràcia。',a:['奎爾公園 Monumental Zone','巴特婁之家或米拉之家二選一；雨天改畢卡索博物館'],m:'經典',temp:'7–15°C'},
  {d:'02/21',w:'日',r:'spain',c:'巴塞隆納 → 馬德里',t:'高鐵穿越西班牙',x:'搭上午 AVE／Avlo 前往馬德里，午後入住後走麗池公園。',a:['Barcelona Sants → Madrid Atocha 約 2.5–3 小時','麗池公園、水晶宮外觀、Gran Vía 夜景'],m:'高鐵',temp:'3–13°C'},
  {d:'02/22',w:'一',r:'spain',c:'馬德里',t:'普拉多與文學區',x:'把主力放在普拉多美術館，避免同日連看三大館造成疲勞。',a:['普拉多美術館預留 3 小時','Barrio de las Letras、海鮮飯或小酒館'],m:'藝術',temp:'3–13°C'},
  {d:'02/23',w:'二',r:'spain',c:'馬德里',t:'王宮與城市生活',x:'從王宮一路步行至主廣場，再以市場和購物街收尾。',a:['馬德里王宮、阿穆德納主教座堂','主廣場、聖米格爾市場、Gran Vía'],m:'城市',temp:'3–13°C'},
  {d:'02/24',w:'三',r:'spain',c:'馬德里 → 塞維亞',t:'向南進入安達魯西亞',x:'中午前搭高鐵南下，午後只排 Santa Cruz 舊城與晚餐。',a:['Madrid Atocha → Sevilla Santa Justa 約 2.5–3 小時','Metropol Parasol 日落或舊城夜遊'],m:'高鐵',temp:'8–19°C'},
  {d:'02/25',w:'四',r:'spain',c:'塞維亞',t:'王宮、主教堂與佛朗明哥',x:'核心景點都在步行範圍，晚間以小型 tablao 表演收尾。',a:['塞維亞王宮早場、主教座堂與 Giralda','預約 19:00 前後佛朗明哥表演'],m:'經典',temp:'8–19°C'},
  {d:'02/26',w:'五',r:'spain',c:'塞維亞',t:'廣場、花園與河的兩岸',x:'用較鬆的一天補足戶外景觀，若下雨則移入藝術與陶瓷景點。',a:['西班牙廣場、瑪麗亞路易莎公園','Triana 市場與陶瓷街區'],m:'慢遊',temp:'8–19°C'},
  {d:'02/27',w:'六',r:'netherlands',c:'塞維亞 → 阿姆斯特丹',t:'從南歐飛向低地國',x:'搭 HV6730 直飛，午後入住後保留一段運河散步。',a:['SVQ 10:10 → AMS 13:15','入住後走九街或 Jordaan'],m:'飛行日',temp:'2–8°C'},
  {d:'02/28',w:'日',r:'netherlands',c:'阿姆斯特丹',t:'黃金時代與運河日常',x:'上午國家博物館，午後穿過 Museumplein 前往 Jordaan。',a:['Rijksmuseum 預約開館時段','Jordaan、Anne Frank House 外圍與運河帶'],m:'博物館',temp:'2–8°C'},
  {d:'03/01',w:'一',r:'netherlands',c:'阿姆斯特丹',t:'梵谷、街區與水上視角',x:'上午看梵谷，午後到 De Pijp，黃昏搭有暖氣的運河船。',a:['Van Gogh Museum 定時票','Albert Cuyp Markt、運河遊船'],m:'藝術',temp:'2–8°C'},
  {d:'03/02',w:'二',r:'netherlands',c:'荷蘭近郊',t:'風車或古城二選一',x:'晴朗時去贊瑟斯漢斯；風雨較強則改搭火車到烏特勒支。',a:['方案 A：Zaanse Schans 半日＋阿姆斯特丹自由時間','方案 B：Utrecht 舊城與 Oudegracht'],m:'一日遊',temp:'2–8°C'},
  {d:'03/03',w:'三',r:'netherlands',c:'阿姆斯特丹 → 台北',t:'從運河城市返航',x:'搭 CI74 直飛台北；國際線至少提前 3 小時抵達 Schiphol。',a:['AMS 10:40 → TPE T1 06:25+1','機上過夜，保留一套輕便衣物'],m:'飛行日',temp:'機上過夜'},
  {d:'03/04',w:'四',r:'netherlands',c:'抵達台灣',t:'旅程完成',x:'抵達桃園後不安排工作或長途接駁，讓身體恢復時差。',a:['確認所有行李與退稅單據','備份照片、整理保險或延誤文件'],m:'返抵',temp:'TPE 約 16–22°C'}
];

const stays = [
  {city:'溫哥華',area:'YVR／Richmond · 1 晚',name:'機場旁過夜',rate:'NT$ 4,500–7,500／房',desc:'選免費接駁或步行可達捷運的飯店，隔日從容返回機場。',opts:[['Fairmont Vancouver Airport','https://maps.google.com/?q=Fairmont+Vancouver+Airport'],['Radisson Blu Vancouver Airport','https://maps.google.com/?q=Radisson+Blu+Vancouver+Airport']]},
  {city:'黃刀鎮',area:'Downtown · 4 晚',name:'步行生活圈',rate:'NT$ 7,000–10,000／房',desc:'多數極光團可接送，白天步行到超市、餐廳與文化中心。',opts:[['The Explorer Hotel','https://maps.google.com/?q=The+Explorer+Hotel+Yellowknife'],['Chateau Nova Yellowknife','https://maps.google.com/?q=Chateau+Nova+Yellowknife']]},
  {city:'里斯本',area:'Baixa／Chiado · 4 晚',name:'舊城與交通交會',rate:'NT$ 4,500–7,000／房',desc:'方便搭電車、地鐵與前往辛特拉的火車，夜間也容易步行覓食。',opts:[['My Story Hotel Tejo','https://maps.google.com/?q=My+Story+Hotel+Tejo'],['Browns Central Hotel','https://maps.google.com/?q=Browns+Central+Hotel+Lisbon']]},
  {city:'波多',area:'Batalha／Bolhão · 4 晚',name:'住在坡頂較省力',rate:'NT$ 4,000–6,500／房',desc:'從車站和舊城高處開始走，回程可搭地鐵，避免每天拖行李爬坡。',opts:[['NH Collection Porto Batalha','https://maps.google.com/?q=NH+Collection+Porto+Batalha'],['Moov Hotel Porto Centro','https://maps.google.com/?q=Moov+Hotel+Porto+Centro']]},
  {city:'巴塞隆納',area:'Eixample · 3 晚',name:'棋盤街區中心',rate:'NT$ 5,500–8,500／房',desc:'位於聖家堂、舊城與 Sants 車站之間，搭地鐵與步行都順。',opts:[['Hotel Jazz Barcelona','https://maps.google.com/?q=Hotel+Jazz+Barcelona'],['Catalonia Passeig de Gràcia','https://maps.google.com/?q=Catalonia+Passeig+de+Gracia']]},
  {city:'馬德里',area:'Atocha／Centro · 3 晚',name:'高鐵與美術館兼顧',rate:'NT$ 4,500–7,500／房',desc:'靠近抵達和南下車站，也能步行到普拉多、文學區與麗池公園。',opts:[['Catalonia Atocha','https://maps.google.com/?q=Catalonia+Atocha'],['Room Mate Alba','https://maps.google.com/?q=Room+Mate+Alba+Madrid']]},
  {city:'塞維亞',area:'Centro／Santa Cruz · 3 晚',name:'橘樹庭院旁',rate:'NT$ 4,500–7,500／房',desc:'核心景點集中步行完成；從 Santa Justa 搭計程車入住最省力。',opts:[['H10 Casa de la Plata','https://maps.google.com/?q=H10+Casa+de+la+Plata'],['Hotel Amadeus Sevilla','https://maps.google.com/?q=Hotel+Amadeus+Sevilla']]},
  {city:'阿姆斯特丹',area:'Centrum／Amstel · 4 晚',name:'避開最吵鬧的核心',rate:'NT$ 6,500–10,500／房',desc:'選電車或地鐵直達中央車站與 Museumplein 的區域，安靜但不偏遠。',opts:[['Motel One Waterlooplein','https://maps.google.com/?q=Motel+One+Amsterdam+Waterlooplein'],['citizenM Amstel','https://maps.google.com/?q=citizenM+Amstel']]}
];

const transportGroups = [
  {
    code:'CANADA', region:'加拿大', summary:'02/04–10 · 先在溫哥華過夜，再進黃刀鎮；跨洋段以同票保護轉機。',
    modes:[
      {type:'air', label:'飛機', note:'3 段航程', items:[
        {date:'02/04', route:'台北 TPE → 溫哥華 YVR', service:'CI0032 · 23:35 → 19:00（同日）', status:'已提供', detail:'春節首日出發；與回程 CI74 合購開口票。', price:'兩段合購建議 ≤ NT$ 50,000', link:'https://www.china-airlines.com/tw/zh', source:'中華航空｜班次與多航點票價'},
        {date:'02/05', route:'溫哥華 YVR → 黃刀鎮 YZF', service:'AC254 · 14:45 → 17:19 · 直飛', status:'推薦', detail:'隔日銜接，保留冬季延誤緩衝。', price:'含托運建議 ≤ NT$ 10,000', link:'https://www.aircanada.com/ca/en/aco/home/book.html', source:'加拿大航空｜班次與票價'},
        {date:'02/09–10', route:'黃刀鎮 YZF → 里斯本 LIS', service:'AC253／AC110／AC810 · 經 YVR、YYZ', status:'推薦', detail:'三段必須同一張票；兩次轉機皆逾 3 小時。', price:'同票建議 ≤ NT$ 40,000', link:'https://www.aircanada.com/ca/en/aco/home/book.html', source:'加拿大航空｜多航點查詢'}
      ]},
      {type:'land', label:'陸地', note:'機場、飯店與極光接駁', items:[
        {date:'02/04', route:'YVR 機場 → Richmond／機場飯店', service:'飯店接駁優先；次選 Canada Line＋短程計程車', status:'抵達日', detail:'19:00 抵達後先入境、領行李；選有免費機場接駁的住宿最省力。', price:'免費接駁／Canada Line 約 C$10 起（參考）', link:'https://www.translink.ca/transit-fares/pricing-and-fare-zones', source:'TransLink｜票價與分區'},
        {date:'02/05・09', route:'YZF 機場 ↔ 黃刀鎮市區', service:'飯店接駁或計程車 · 約 10–15 分鐘', status:'先確認', detail:'官方確認無公共運輸；清晨離境請前一晚預約計程車。', price:'飯店接駁常免費／計程車約 C$20–30（估算）', link:'https://www.inf.gov.nt.ca/en/services/airports/traveller-information', source:'黃刀鎮機場｜計程車與接駁'},
        {date:'02/06–08', route:'市區飯店 ↔ 極光觀測點', service:'參加含飯店接送的極光團', status:'推薦', detail:'夜間低溫且路況不熟，不建議自駕；預訂時確認接送飯店與集合時間。', price:'接送通常含在團費內；依業者方案', link:'https://exploreyellowknife.com/plan-your-trip', source:'Explore Yellowknife｜業者資訊'}
      ]}
    ]
  },
  {
    code:'EUROPE', region:'歐洲', summary:'02/10–03/03 · 遠距離跨國用直飛，葡萄牙與西班牙城際移動以鐵路為主。',
    modes:[
      {type:'air', label:'飛機', note:'2 段歐洲內飛＋返台', items:[
        {date:'02/18', route:'波多 OPO → 巴塞隆納 BCN', service:'VY1171 · 08:45 → 11:30 · 直飛', status:'推薦', detail:'以航空公司官網加入托運後的總價判斷。', price:'含托運建議 NT$ 3,500–5,500', link:'https://www.vueling.com/en', source:'Vueling｜班次與含行李票價'},
        {date:'02/27', route:'塞維亞 SVQ → 阿姆斯特丹 AMS', service:'HV6730 · 10:10 → 13:15 · 直飛', status:'推薦', detail:'午後抵達，仍保留傍晚散步時間。', price:'含托運建議 NT$ 4,500–7,000', link:'https://www.transavia.com/en-EU/home/', source:'Transavia｜班次與含行李票價'},
        {date:'03/03–04', route:'阿姆斯特丹 AMS → 台北 TPE', service:'CI74 · 10:40 → 06:25+1 · 直飛', status:'推薦', detail:'國際線建議提前 3 小時抵達 Schiphol。', price:'與 CI0032 合購建議 ≤ NT$ 50,000', link:'https://www.china-airlines.com/tw/zh', source:'中華航空｜班次與多航點票價'}
      ]},
      {type:'land', label:'陸地', note:'3 段城際列車＋機場接駁', items:[
        {date:'02/14', route:'里斯本 Oriente → 波多 Campanhã', service:'CP Alfa Pendular／Intercidades · 約 3 小時', status:'待開賣', detail:'選中午前抵達班次；CP 官網通常約出發前 60 天開賣。', price:'2026 參考：IC 二等 €28.05／AP Turística €35.70', link:'https://www1.cp.pt/passageiros/en/buy-tickets', source:'CP 國鐵｜班次與票價'},
        {date:'02/18', route:'巴塞隆納機場 BCN → 市區', service:'Aerobús · 24 小時營運', status:'抵達日', detail:'直達 Plaça Catalunya；住宿不在沿線時再轉地鐵。', price:'2026 參考：單程 €7.75／來回 €13.30', link:'https://aerobusbarcelona.es/en/rates/', source:'Aerobús｜班次、站點與票價'},
        {date:'02/21', route:'Barcelona Sants → Madrid Atocha', service:'AVE／Avlo 高鐵 · 約 2.5–3 小時', status:'待開賣', detail:'建議上午班；2027 車次尚未開放查詢。', price:'Avlo 官網自 €7；實際建議抓 €20–60', link:'https://www.renfe.com/es/en', source:'Renfe｜官方班次與購票'},
        {date:'02/24', route:'Madrid Atocha → Sevilla Santa Justa', service:'AVE／Avlo 高鐵 · 約 2.5–3 小時', status:'待開賣', detail:'選中午前抵達；2027 車次尚未開放查詢。', price:'Avlo 官網自 €7；實際建議抓 €20–60', link:'https://www.renfe.com/es/en', source:'Renfe｜官方班次與購票'},
        {date:'02/27・03/03', route:'AMS Schiphol ↔ 阿姆斯特丹市區', service:'NS 火車 · 約 17 分鐘', status:'推薦', detail:'中央車站周邊搭火車；其他區域依住宿位置改選巴士。', price:'參考：單程約 €5–6／Amsterdam Travel Ticket 1 日 €20', link:'https://www.ns.nl/en/travel/destinations/taking-the-train-to-the-airport', source:'NS 荷鐵｜班次與票價'}
      ]}
    ]
  }
];

const budgets = [['長程與區域機票',95000,125000],['住宿（26 晚）',70000,100000],['極光與雪地活動',30000,45000],['城際與市內交通',30000,45000],['餐飲與景點',45000,60000],['保險與預備金',15000,25000]];

const preparationItems = [
  {id:'passport',category:'證件',title:'確認護照效期與英文姓名',description:'護照需涵蓋完整旅程；所有機票、保險與訂房姓名須與護照完全一致。',dueDate:'2026-09-30',dueLabel:'2026/09/30 前',useDates:'02/04–03/04',locations:['全程'],link:null},
  {id:'long-haul-flights',category:'交通',title:'鎖定長程與加拿大航班',description:'先處理 CI 開口票，再把 YVR–YZF 與 YZF–LIS 開在加拿大航空同一張票。',dueDate:'2026-10-15',dueLabel:'2026/10/15 前',useDates:'02/04–10、03/03–04',locations:['台北','溫哥華','黃刀鎮','里斯本','阿姆斯特丹'],link:{url:'https://www.china-airlines.com/tw/zh',label:'中華航空查票'}},
  {id:'lodging',category:'住宿',title:'確認 8 個住宿基地',description:'優先選交通方便且可取消的房型，逐一核對入住、退房與城市稅規則。',dueDate:'2026-10-22',dueLabel:'2026/10/22 前',useDates:'02/04–03/03',locations:['溫哥華','黃刀鎮','里斯本','波多','巴塞隆納','馬德里','塞維亞','阿姆斯特丹'],link:null},
  {id:'aurora-gear',category:'冬季',title:'預訂極光活動與極地衣物',description:'安排追獵與固定營地兩種觀測方式，確認外套、雪褲、手套、雪靴及飯店接送。',dueDate:'2026-10-31',dueLabel:'2026/10/31 前',useDates:'02/05–09',locations:['黃刀鎮'],link:{url:'https://exploreyellowknife.com/plan-your-trip',label:'黃刀旅遊資訊'}},
  {id:'eta',category:'證件',title:'申請加拿大 eTA',description:'使用本次搭機所持護照申請；若出發前換發護照，需重新檢查申請狀態。',dueDate:'2026-11-04',dueLabel:'2026/11/04 前',useDates:'02/04–10',locations:['溫哥華','黃刀鎮'],link:{url:'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta.html',label:'加拿大政府 eTA'}},
  {id:'eu-entry-rules',category:'證件',title:'第一次複查 EES／ETIAS 規定',description:'2027 年規則仍可能調整，只依歐盟官方公告確認是否需事前申請或完成其他程序。',dueDate:'2026-11-04',dueLabel:'2026/11/04 複查',useDates:'02/10–03/03',locations:['葡萄牙','西班牙','荷蘭'],link:{url:'https://travel-europe.europa.eu/',label:'歐盟官方資訊'}},
  {id:'insurance',category:'保障',title:'投保旅遊與行程延誤保險',description:'核對冬季活動、海外醫療、班機延誤及行李損失保障，保存保單與緊急聯絡方式。',dueDate:'2026-11-15',dueLabel:'2026/11/15 前',useDates:'02/04–03/04',locations:['全程'],link:null},
  {id:'portugal-rail',category:'交通',title:'購買里斯本至波多火車',description:'CP 開賣後選擇中午前後抵達班次，確認 Lisboa Oriente 與 Porto Campanhã 車站。',dueDate:'2026-12-16',dueLabel:'2026/12/16 起留意',useDates:'02/14',locations:['里斯本','波多'],link:{url:'https://www1.cp.pt/passageiros/en/buy-tickets',label:'CP 國鐵'}},
  {id:'spain-rail',category:'交通',title:'購買西班牙兩段高鐵',description:'依序處理 Barcelona Sants–Madrid Atocha 與 Madrid Atocha–Sevilla Santa Justa。',dueDate:'2026-12-23',dueLabel:'2026/12/23 起留意',useDates:'02/21、02/24',locations:['巴塞隆納','馬德里','塞維亞'],link:{url:'https://www.renfe.com/es/en',label:'Renfe 官方購票'}},
  {id:'attractions',category:'預約',title:'預約熱門景點與活動時段',description:'優先處理辛特拉宮殿、聖家堂、奎爾公園、主要美術館、塞維亞王宮與佛朗明哥。',dueDate:'2026-12-31',dueLabel:'2026/12/31 前',useDates:'02/12、02/19–20、02/22–25、02/28–03/01',locations:['辛特拉','巴塞隆納','馬德里','塞維亞','阿姆斯特丹'],link:null},
  {id:'medicine',category:'健康',title:'備妥處方藥與常備藥',description:'準備足量藥品、原包裝與必要說明；重要藥品隨身攜帶，不放入托運行李。',dueDate:'2027-01-04',dueLabel:'2027/01/04 前',useDates:'02/04–03/04',locations:['全程'],link:null},
  {id:'money',category:'金流',title:'確認信用卡、現金與海外交易',description:'準備兩張不同發卡機構的卡片，確認加拿大元與歐元的小額現金安排。',dueDate:'2027-01-10',dueLabel:'2027/01/10 前',useDates:'02/04–03/04',locations:['加拿大','葡萄牙','西班牙','荷蘭'],link:null},
  {id:'connectivity',category:'通訊',title:'準備加拿大與歐洲網路方案',description:'確認 eSIM 啟用日期、流量與手機相容性，保留住宿及緊急聯絡資訊的離線版本。',dueDate:'2027-01-15',dueLabel:'2027/01/15 前',useDates:'02/04–03/04',locations:['加拿大','葡萄牙','西班牙','荷蘭'],link:null},
  {id:'luggage-power',category:'行李',title:'整理分層衣物與轉接設備',description:'以極地、歐洲冬季、機上過夜三組分裝；準備加拿大與歐洲可用的轉接頭及充電器。',dueDate:'2027-01-20',dueLabel:'2027/01/20 前',useDates:'02/04–03/04',locations:['黃刀鎮','歐洲全段'],link:null},
  {id:'camera',category:'攝影',title:'檢查腳架、記憶卡與耐寒電池',description:'完成相機韌體、容量與備份測試；多帶備用電池並準備貼身保暖收納。',dueDate:'2027-01-24',dueLabel:'2027/01/24 前',useDates:'02/06–08',locations:['黃刀鎮'],link:null},
  {id:'offline-documents',category:'文件',title:'下載離線票券與證件備份',description:'將護照、保單、機票、住宿、活動與交通票券存入手機離線資料夾，另留一份紙本。',dueDate:'2027-01-28',dueLabel:'2027/01/28 前',useDates:'02/04–03/04',locations:['全程'],link:null},
  {id:'weather-transfers',category:'確認',title:'確認天氣、接送與營運狀態',description:'複查極光團接送、YZF 清晨計程車、歐洲航班與列車，並依預報調整衣物。',dueDate:'2027-01-28',dueLabel:'2027/01/28 複查',useDates:'02/04–03/03',locations:['溫哥華','黃刀鎮','歐洲全段'],link:null},
  {id:'eu-entry-final',category:'證件',title:'最後複查 EES／ETIAS 規定',description:'出發前一週再次查看歐盟官方公告，完成當時確定適用的入境程序。',dueDate:'2027-01-28',dueLabel:'2027/01/28 複查',useDates:'02/10–03/03',locations:['葡萄牙','西班牙','荷蘭'],link:{url:'https://travel-europe.europa.eu/',label:'歐盟官方資訊'}},
  {id:'final-pack',category:'最後確認',title:'最終行李與隨身包檢查',description:'確認護照、手機、錢包、藥品、充電線、保暖層與一套換洗衣物已放入隨身行李。',dueDate:'2027-02-03',dueLabel:'2027/02/03',useDates:'02/04 出發',locations:['台北桃園機場'],link:null}
];

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

document.querySelector('#transport-groups').innerHTML = transportGroups.map(group=>`<article class="transport-region"><header class="transport-region-head"><div><span>${group.code}</span><h3>${group.region}</h3></div><p>${group.summary}</p></header><div class="transport-mode-grid">${group.modes.map(mode=>`<section class="mode-panel mode-${mode.type}" aria-label="${group.region}${mode.label}"><header><span class="mode-code">${mode.type==='air'?'AIR':'LAND'}</span><div><h4>${mode.label}</h4><p>${mode.note}</p></div></header><div class="transport-list">${mode.items.map(item=>`<article class="transport-item"><time>${item.date}</time><div class="transport-item-main"><h5>${item.route}</h5><strong>${item.service}</strong><p>${item.detail}</p><div class="transport-buy"><span>${item.price}</span><a href="${item.link}" target="_blank" rel="noreferrer">${item.source} ↗</a></div></div><span class="transport-chip ${['已提供','推薦'].includes(item.status)?'ready':'pending'}">${item.status}</span></article>`).join('')}</div></section>`).join('')}</div></article>`).join('');

const maxBudget = Math.max(...budgets.map(b=>b[2]));
document.querySelector('#budget-bars').innerHTML = budgets.map(b=>`<div class="budget-row"><span>${b[0]}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(b[2]/maxBudget*100)}%"></div></div><strong>${Math.round(b[1]/1000)}–${Math.round(b[2]/1000)}K</strong></div>`).join('');

const preparationStorageKey = 'trip-preparation-v1';
const preparationIds = new Set(preparationItems.map(item=>item.id));
let completedPreparation = new Set();
let preparationFilter = 'all';

try {
  const savedPreparation = JSON.parse(localStorage.getItem(preparationStorageKey) || '[]');
  if (Array.isArray(savedPreparation)) completedPreparation = new Set(savedPreparation.filter(id=>preparationIds.has(id)));
} catch (error) {
  completedPreparation = new Set();
}

const preparationList = document.querySelector('#preparation-list');
const preparationStatus = document.querySelector('#preparation-status');
const preparationProgressLabel = document.querySelector('#preparation-progress-label');
const preparationProgressBar = document.querySelector('#preparation-progress-bar');

const savePreparation = () => {
  try { localStorage.setItem(preparationStorageKey, JSON.stringify([...completedPreparation])); } catch (error) {}
};

const renderPreparation = () => {
  const visibleItems = preparationItems.filter(item => preparationFilter === 'all' || (preparationFilter === 'done' ? completedPreparation.has(item.id) : !completedPreparation.has(item.id)));
  preparationList.innerHTML = visibleItems.length ? visibleItems.map(item => {
    const done = completedPreparation.has(item.id);
    return `<article class="preparation-item${done?' is-complete':''}"><label class="preparation-check"><input type="checkbox" data-preparation-id="${item.id}" ${done?'checked':''}><span class="checkmark" aria-hidden="true"></span><span class="sr-only">${done?'取消完成':'標示完成'}：${item.title}</span></label><div class="preparation-date"><span>完成期限</span><time datetime="${item.dueDate}">${item.dueLabel}</time></div><div class="preparation-content"><div class="preparation-title-row"><span class="preparation-category">${item.category}</span><h3>${item.title}</h3></div><p>${item.description}</p><div class="preparation-meta"><span><b>使用日期</b>${item.useDates}</span><span><b>地點</b>${item.locations.join('・')}</span>${item.link?`<a href="${item.link.url}" target="_blank" rel="noreferrer">${item.link.label} ↗</a>`:''}</div></div></article>`;
  }).join('') : '<p class="preparation-empty">這個篩選條件目前沒有項目。</p>';

  const completed = completedPreparation.size;
  preparationProgressLabel.textContent = `已完成 ${completed}／${preparationItems.length} 項`;
  preparationProgressBar.style.width = `${Math.round(completed / preparationItems.length * 100)}%`;

  preparationList.querySelectorAll('[data-preparation-id]').forEach(checkbox => checkbox.addEventListener('change', () => {
    if (checkbox.checked) completedPreparation.add(checkbox.dataset.preparationId);
    else completedPreparation.delete(checkbox.dataset.preparationId);
    savePreparation();
    preparationStatus.textContent = `${checkbox.checked?'已完成':'已改為待完成'}：${preparationItems.find(item=>item.id===checkbox.dataset.preparationId).title}`;
    renderPreparation();
  }));
};

document.querySelectorAll('[data-preparation-filter]').forEach(button => button.addEventListener('click', () => {
  preparationFilter = button.dataset.preparationFilter;
  document.querySelectorAll('[data-preparation-filter]').forEach(filterButton => {
    const active = filterButton === button;
    filterButton.classList.toggle('active', active);
    filterButton.setAttribute('aria-pressed', String(active));
  });
  renderPreparation();
}));

renderPreparation();

const stops = [['台北','02/04 出發',25.08,121.23,'#0b2b46'],['溫哥華','02/04–05 · 1 晚',49.20,-123.18,'#49d799'],['黃刀鎮','02/05–09 · 4 晚',62.47,-114.37,'#49d799'],['里斯本','02/10–14 · 4 晚',38.72,-9.14,'#f09247'],['波多','02/14–18 · 4 晚',41.15,-8.61,'#f09247'],['巴塞隆納','02/18–21 · 3 晚',41.39,2.17,'#f09247'],['馬德里','02/21–24 · 3 晚',40.42,-3.70,'#f09247'],['塞維亞','02/24–27 · 3 晚',37.39,-5.99,'#f09247'],['阿姆斯特丹','02/27–03/03 · 4 晚',52.37,4.90,'#4f8fbd']];

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
  const captions = {europe:'歐洲段：里斯本 → 波多 → 巴塞隆納 → 馬德里 → 塞維亞 → 阿姆斯特丹',canada:'加拿大段：溫哥華過夜 → 黃刀鎮 4 晚極光；2/9 經溫哥華、多倫多飛里斯本。',world:'全程：台灣 → 加拿大 → 葡萄牙 → 西班牙 → 荷蘭 → 台灣。跨太平洋連線於地圖兩側銜接。'};
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
        .bindPopup(`${stops[i][0]} → ${stops[next][0]}<br>${rail?'鐵路':'航空'}路線示意${i===2?'（經 YVR、YYZ）':''}`);
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
