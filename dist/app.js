document.documentElement.classList.add('js');

const itinerary = [
  {d:'02/04',w:'四',r:'canada',c:'台北 → 溫哥華',t:'飛越太平洋',x:'搭乘 CI0032 自桃園出發，當晚抵達溫哥華。',a:['入境後入住 Richmond／機場周邊飯店','休息調整時差，隔天保留彈性'],m:'飛行日',temp:'YVR 約 3–8°C'},
  {d:'02/05',w:'五',r:'canada',c:'溫哥華',t:'出發前緩衝',x:'留在溫哥華補給、整理冬季裝備，準備隔日飛往黃刀鎮。',a:['確認 Air North 5 位成人票價與行李規則','準備抵達北境當晚會用到的保暖層'],m:'緩衝',temp:'約 3–8°C'},
  {d:'02/06',w:'六',r:'canada',c:'溫哥華 → 黃刀鎮',t:'抵達北境',x:'搭 Air North 4N869 直飛黃刀鎮，辦理入住後休息。',a:['YVR 14:55 → YZF 18:25（參考班次）','機場計程車接送與 5 人行李容量先向住宿確認'],m:'轉場',temp:'約 -20–35°C'},
  {d:'02/07',w:'日',r:'canada',c:'黃刀鎮',t:'市區散步與第一晚極光',x:'白天走訪 Downtown、Old Town 與大奴湖周邊；夜間參加預約的極光團。',a:['領取預訂冬裝','極光團含接送與熱飲，確認 Greenhaven 接送地址'],m:'極光 1',temp:'約 -20–35°C'},
  {d:'02/08',w:'一',r:'canada',c:'黃刀鎮',t:'狗拉雪橇與第二晚極光',x:'參加 Beck’s Kennels 狗拉雪橇活動，晚間再追一次極光。',a:['活動成團、接送時間與接送方式待確認','夜間行程後保留足夠休息'],m:'極光 2',temp:'約 -20–35°C'},
  {d:'02/09',w:'二',r:'黃刀鎮 → 溫哥華',t:'晚間返抵溫哥華',x:'退房後保留市區自由時間，搭 Air North 4N880 返回溫哥華。',a:['YZF 19:15 → YVR 21:00（參考班次）','入住溫哥華市區，隔日不安排早班長途交通'],m:'飛行日',temp:'YVR 約 3–8°C'},
  {d:'02/10',w:'三',r:'canada',c:'溫哥華',t:'港灣與市集慢遊',x:'睡飽後安排史丹利公園、煤氣鎮或格蘭佛島；依體力和天候選擇。',a:['優先使用計程車或白天大眾運輸','確認隔日 Amtrak 出發站、證件與行李規定'],m:'城市日',temp:'約 3–8°C'},
  {d:'02/11',w:'四',r:'usa',c:'溫哥華 → 西雅圖',t:'搭火車南下',x:'搭 Amtrak Cascades 前往西雅圖，抵達後入住市中心。班次時間與車票待核實。',a:['準備美國入境所需文件並預留通關時間','車站至飯店安排計程車或叫車'],m:'鐵路',temp:'約 5–10°C'},
  {d:'02/12',w:'五',r:'usa',c:'西雅圖',t:'派克市場與海濱',x:'走訪 Pike Place Market、Seattle Waterfront 與市中心地標。',a:['熱門景點間以計程車／叫車銜接','晚間避免前往不熟悉的偏僻區域'],m:'市區',temp:'約 5–10°C'},
  {d:'02/13',w:'六',r:'usa',c:'西雅圖',t:'太空針塔與玻璃藝術',x:'安排 Seattle Center、Space Needle 與 Chihuly Garden and Glass。',a:['熱門景點先查預約時段','路線以步行短段加計程車為主'],m:'景點',temp:'約 5–10°C'},
  {d:'02/14',w:'日',r:'usa',c:'西雅圖',t:'渡輪或飛行博物館',x:'視天候與同行者體力，選擇 Bainbridge Island 渡輪或 Museum of Flight。',a:['渡輪行程先確認當日班表','博物館往返預約計程車／叫車'],m:'彈性日',temp:'約 5–10°C'},
  {d:'02/15',w:'一',r:'usa',c:'西雅圖 → 拉斯維加斯',t:'飛往沙漠城市',x:'搭乘待確認的直飛或合適航班前往 LAS，入住大道周邊飯店。',a:['選擇白天航班與可追蹤的接送方式','機場使用官方計程車排班區或叫車上車點'],m:'飛行日',temp:'約 14–20°C'},
  {d:'02/16',w:'二',r:'usa',c:'拉斯維加斯',t:'大道地標與水舞',x:'在 Strip 安排輕鬆步行路線，欣賞飯店建築、室內花園與百樂宮水舞。',a:['場館間距離較長，搭計程車減少夜間步行','秀場門票與入場時間待預訂'],m:'城市日',temp:'約 14–20°C'},
  {d:'02/17',w:'三',r:'usa',c:'拉斯維加斯',t:'Sphere 與表演夜',x:'白天彈性休息，晚間安排 Sphere 或一場已預訂的大型演出。',a:['依官方售票頁確認節目與入場規則','飯店至場館使用計程車或叫車'],m:'表演',temp:'約 14–20°C'},
  {d:'02/18',w:'四',r:'usa',c:'拉斯維加斯',t:'大峽谷一日團',x:'預訂含往返接送的 South Rim 小團；確認出發時間、停靠點與總車程。',a:['選擇有明確集合地點與回程安排的業者','備妥飲水、保暖衣物與暈車用品'],m:'當地團',temp:'依景區天候'},
  {d:'02/19',w:'五',r:'usa',c:'拉斯維加斯',t:'胡佛水壩或市區休息',x:'參加有接送的胡佛水壩半日團，或安排飯店休息與市區活動。',a:['確認團費是否含門票與接送','不安排自行租車前往'],m:'當地團',temp:'約 14–20°C'},
  {d:'02/20',w:'六',r:'usa',c:'拉斯維加斯',t:'自由活動與出發準備',x:'保留彈性購物、休息與整理行李，隔日飛往洛杉磯。',a:['確認 LAS → LAX 航段與行李規則','預約機場接送或使用官方上車區'],m:'彈性日',temp:'約 14–20°C'},
  {d:'02/21',w:'日',r:'usa',c:'拉斯維加斯 → 洛杉磯',t:'飛往南加州',x:'搭乘待確認的航班前往 LAX，入住交通方便、便於參加當地團的住宿區。',a:['從機場使用官方計程車排班區或叫車','不租車；抵達後以預約接送與短程叫車為主'],m:'飛行日',temp:'約 16–23°C'},
  {d:'02/22',w:'一',r:'usa',c:'洛杉磯',t:'好萊塢與比佛利山莊',x:'參加涵蓋 Hollywood、TCL Chinese Theatre 與 Beverly Hills 的市區導覽團。',a:['確認團集合點、時長與是否含飯店接送','行程結束後搭計程車返回住宿'],m:'當地團',temp:'約 16–23°C'},
  {d:'02/23',w:'二',r:'usa',c:'洛杉磯',t:'環球影城',x:'安排一整天遊玩 Universal Studios Hollywood。',a:['事先購票並確認入園日期','往返使用官方接駁、計程車或叫車'],m:'主題樂園',temp:'約 16–23°C'},
  {d:'02/24',w:'三',r:'usa',c:'洛杉磯',t:'海岸與聖塔莫尼卡',x:'在 Santa Monica Pier、海濱步道與周邊街區安排輕鬆散步。',a:['白天活動，長距離路段搭車銜接','視天候與體力保留休息時間'],m:'海岸',temp:'約 16–23°C'},
  {d:'02/25',w:'四',r:'usa',c:'洛杉磯',t:'蓋蒂中心與博物館',x:'預約 Getty Center；依交通狀況決定是否加排附近景點。',a:['查詢當日開放時間與免費預約規則','使用叫車往返，避免夜間長距離步行'],m:'藝術',temp:'約 16–23°C'},
  {d:'02/26',w:'五',r:'usa',c:'洛杉磯',t:'迪士尼樂園',x:'預留整天前往 Anaheim 的 Disneyland Park，先確認園區票券與交通接送。',a:['長距離往返優先預約接送或合規當地團','確認回程集合點與最晚出發時間'],m:'主題樂園',temp:'約 16–23°C'},
  {d:'02/27',w:'六',r:'usa',c:'洛杉磯',t:'加州冒險樂園或休息',x:'可選 Disney California Adventure，或依體力改成休息與自由活動。',a:['若續玩園區，先確認跨園票券條款','避免將連續長日程排滿'],m:'彈性日',temp:'約 16–23°C'},
  {d:'02/28',w:'日',r:'usa',c:'洛杉磯',t:'收尾與返台準備',x:'保留一天整理行李、採買與確認隔日航班接送。',a:['確認 LAX 航廈、報到時間與行李限制','預約前往機場的計程車／叫車'],m:'緩衝',temp:'約 16–23°C'},
  {d:'03/01',w:'一',r:'usa',c:'洛杉磯 → 台北',t:'自 LAX 返台',x:'依實際出票班次前往 LAX。航班時間、航空公司與抵台日期待確認。',a:['預留充足國際線報到與安檢時間','將護照、藥品與重要文件放入隨身行李'],m:'返程',temp:'航班待確認'}
];

const stays = [
  {city:'溫哥華',area:'Richmond／YVR · 2/4–2/6 共 2 晚',name:'抵達與出發緩衝',rate:'房價待查',desc:'選有機場接駁或鄰近 Canada Line 的住宿；5 人與行李接駁容量先確認。',opts:[['溫哥華機場住宿地圖','https://maps.google.com/?q=Vancouver+Airport+hotels']]},
  {city:'黃刀鎮',area:'Downtown · 2/6–2/9 共 3 晚',name:'Greenhaven Guesthouse Downtown',rate:'NT$ 35,470／房；5 人分攤約 NT$ 7,094／人',desc:'3 房、4 床、2 衛浴，最多 6 人；最終價格、取消條件與床位安排待確認。',opts:[['Greenhaven Airbnb','https://www.airbnb.com/rooms/17071515']]},
  {city:'溫哥華',area:'Downtown · 2/9–2/11 共 2 晚',name:'市中心交通便利住宿',rate:'房價待查',desc:'2/9 晚間返抵 YVR 後入住，為 2/11 Amtrak 南下保留緩衝。',opts:[['溫哥華市中心住宿地圖','https://maps.google.com/?q=Vancouver+Downtown+hotels']]},
  {city:'西雅圖',area:'Capitol Hill／近輕軌站 · 2/11–2/15',name:'交通方便的住宿候選區',rate:'房價待查',desc:'照片手寫註記 Capitol Hill（國會山）與輕軌站，住宿區尚未確認。照片圈選 4 天 3 夜，但目前行程是 4 晚，需核對停留長度。',opts:[['Capitol Hill 住宿地圖','https://maps.google.com/?q=Capitol+Hill+Seattle+hotels']]},
  {city:'拉斯維加斯',area:'The Strip · 2/15–2/21 共 6 晚',name:'大道周邊飯店',rate:'房價待查',desc:'選在主要場館與團體接送點附近，減少夜間長距離步行。',opts:[['拉斯維加斯大道住宿地圖','https://maps.google.com/?q=Las+Vegas+Strip+hotels']]},
  {city:'洛杉磯',area:'Westwood／Santa Monica · 2/21–3/1 共 8 晚',name:'適合預約接送與當地團的基地',rate:'房價待查',desc:'依景點與團體接送範圍選址；全段不自駕，以計程車、叫車與預約行程移動。',opts:[['洛杉磯住宿地圖','https://maps.google.com/?q=Los+Angeles+hotels']]}
];

const transportGroups = [
  {code:'CANADA',region:'加拿大',summary:'溫哥華往返黃刀鎮；2/9 晚返抵溫哥華，2/11 再南下西雅圖。',modes:[
    {type:'air',label:'飛機',note:'台北與黃刀鎮航段',items:[
      {date:'02/04',route:'台北 TPE → 溫哥華 YVR',service:'CI0032 · 23:35 → 19:00（同日，既有行程記錄）',status:'待出票核對',detail:'抵達後先在溫哥華住宿；出發日及時刻以實際機票為準。',price:'票價待確認',link:'https://www.china-airlines.com/tw/zh',source:'中華航空｜查詢航班'},
      {date:'02/06',route:'溫哥華 YVR → 黃刀鎮 YZF',service:'Air North 4N869 · 14:55 → 18:25（參考班次）',status:'待確認',detail:'1 人含稅參考；確認 5 人座位、行李和最新班表。',price:'CAD 322.83／人（舊參考）',link:'https://booking.flyairnorth.com/servlet/FlightDetailsServlet',source:'Air North｜訂位'},
      {date:'02/09',route:'黃刀鎮 YZF → 溫哥華 YVR',service:'Air North 4N880 · 19:15 → 21:00（參考班次）',status:'待確認',detail:'晚間抵達後先入住溫哥華，不接續夜間長途交通。',price:'CAD 325.98／人（舊參考）',link:'https://booking.flyairnorth.com/servlet/FlightDetailsServlet',source:'Air North｜訂位'}
    ]},
    {type:'land',label:'陸地',note:'飯店接駁、火車與當地接送',items:[
      {date:'02/04',route:'YVR 機場 → Richmond 飯店',service:'飯店接駁或 Canada Line＋短程計程車',status:'先確認',detail:'確認住宿接駁時段與 5 人、行李的載運容量。',price:'依住宿與當日票價',link:'https://www.translink.ca/',source:'TransLink｜交通資訊'},
      {date:'02/06・09',route:'YZF 機場 ↔ Greenhaven',service:'預約計程車／住宿接送',status:'先確認',detail:'確認 5 人連行李是否需分乘，以及回程接送預約方式。',price:'每趟費用待詢價',link:'https://www.google.com/maps/search/Yellowknife+taxi',source:'黃刀鎮｜計程車資訊'},
      {date:'02/11',route:'溫哥華 Pacific Central → Seattle King Street',service:'Amtrak Cascades',status:'待查班次',detail:'不自駕跨境南下；確認班次、車站報到時間、入境文件與行李規則。',price:'票價與班次待查',link:'https://www.amtrak.com/cascades-train',source:'Amtrak Cascades｜官方資訊'},
      {date:'全程',route:'城市內與活動接駁',service:'預約團、計程車或叫車',status:'依行程預約',detail:'長距離活動優先選含接送的團；夜間或不熟悉區域使用計程車／叫車。',price:'依活動與距離詢價',link:'https://www.google.com/maps',source:'路線查詢'}
    ]}
  ]},
  {code:'USA',region:'美國西部',summary:'西雅圖 → 拉斯維加斯 → 洛杉磯；不安排租車。',modes:[
    {type:'air',label:'飛機',note:'跨州與返台航段',items:[
      {date:'02/15',route:'西雅圖 SEA → 拉斯維加斯 LAS',service:'優先查詢直飛航班；照片註記 2/7、2/8',status:'日期待核',detail:'照片手寫 $154、Choice $194、另圈選 $239；幣別未註。手寫日期不同於目前 2/15 行程，不能視為當日票價。',price:'手寫候選價 $154／$194／$239；2/15 票價待查',link:'https://www.google.com/travel/flights',source:'查詢航班'},
      {date:'02/21',route:'拉斯維加斯 LAS → 洛杉磯 LAX',service:'搭機，不租車；照片手寫目的地為「LOS」',status:'日期待核',detail:'照片手寫 $71、Choice $106 + $45、另圈選 $151；幣別未註。手寫日期 2/22–2/25，晚於目前 2/21 行程；目的機場代碼需確認。',price:'手寫候選價 $71／$106／$151；2/21 票價待查',link:'https://www.google.com/travel/flights',source:'查詢航班'},
      {date:'03/01',route:'洛杉磯 LAX → 台北 TPE',service:'返台航班待選',status:'待查',detail:'以 3/1 自 LAX 出發為條件查航班；抵台日期依實際航班確認。',price:'票價待查',link:'https://www.google.com/travel/flights',source:'查詢航班'}
    ]},
    {type:'land',label:'市區與當地團',note:'預約接送優先，不自駕',items:[
      {date:'02/11–15',route:'西雅圖市區景點',service:'步行短段＋計程車／叫車',status:'依地點安排',detail:'飯店選在中心區；渡輪與景點門票出發前核對官方時刻。',price:'依路程與票種',link:'https://kingcounty.gov/en/dept/metro',source:'King County Metro｜交通'},
      {date:'02/18–19',route:'大峽谷／胡佛水壩',service:'含往返接送的當地團',status:'待預訂',detail:'比較業者評價、集合點、總車程、取消規則與是否含門票。',price:'團費待詢價',link:'https://www.nps.gov/grca/planyourvisit/index.htm',source:'Grand Canyon National Park｜官方資訊'},
      {date:'02/22–28',route:'洛杉磯景點與 Anaheim',service:'預約團、計程車／叫車',status:'依行程預約',detail:'環球影城與迪士尼先規劃往返接送；避免夜間長距離轉乘。',price:'依行程詢價',link:'https://www.metro.net/',source:'Metro Los Angeles｜交通'}
    ]}
  ]}
];

const budgets = [['黃刀鎮含機票、住宿與已列活動／人',29293,29383]];

const preparationItems = [
  {id:'passport',category:'證件',title:'確認護照效期與英文姓名',description:'所有機票、保險與住宿姓名須與護照一致，並確認護照涵蓋全程。',dueDate:'2026-10-04',dueLabel:'現在確認',useDates:'02/04–03/03',locations:['台灣','加拿大','美國'],link:null},
  {id:'long-haul-flights',category:'交通',title:'確認台北往返與黃刀鎮航段',description:'確認 2/4 TPE–YVR、2/6 YVR–YZF、2/9 YZF–YVR，以及 3/1 LAX 返台的 5 人票價、行李與改退規則。',dueDate:'2026-10-15',dueLabel:'2026/10/15 前',useDates:'02/04、02/06、02/09、03/01',locations:['台北','溫哥華','黃刀鎮','洛杉磯'],link:{url:'https://www.google.com/travel/flights',label:'查詢航班'}},
  {id:'lodging',category:'住宿',title:'確認 6 段住宿安排',description:'依日期確認 Richmond、黃刀鎮、溫哥華市區、西雅圖、拉斯維加斯與洛杉磯的房型及取消條件。',dueDate:'2026-10-22',dueLabel:'2026/10/22 前',useDates:'02/04–03/01',locations:['溫哥華','黃刀鎮','西雅圖','拉斯維加斯','洛杉磯'],link:null},
  {id:'aurora-gear',category:'冬季',title:'預訂極光、狗拉雪橇與冬裝',description:'確認 2/7、2/8 極光團，2/8 狗拉雪橇，以及冬裝租期、尺寸、接送與取消條款。',dueDate:'2026-10-31',dueLabel:'2026/10/31 前',useDates:'02/07–09',locations:['黃刀鎮'],link:{url:'https://www.northernlightstours.co/bookyourtour/',label:'Northern Lights Tours'}},
  {id:'eta',category:'證件',title:'確認加拿大 eTA 與美國入境許可',description:'依每位旅客持有的護照與最新官方規定，確認加拿大搭機入境及美國入境／轉乘所需文件。',dueDate:'2026-11-04',dueLabel:'2026/11/04 前',useDates:'02/04–03/01',locations:['加拿大','美國'],link:{url:'https://esta.cbp.dhs.gov/',label:'美國 ESTA 官方網站'}},
  {id:'insurance',category:'保障',title:'投保旅遊與行程延誤保險',description:'核對海外醫療、冬季活動、航班延誤、行李與跨境行程保障。',dueDate:'2026-11-15',dueLabel:'2026/11/15 前',useDates:'02/04–03/03',locations:['全程'],link:null},
  {id:'us-transport',category:'交通',title:'預訂 Amtrak 與美國國內航班',description:'確認 2/11 溫哥華至西雅圖火車、2/15 SEA–LAS 與 2/21 LAS–LAX 航段及行李限制。',dueDate:'2026-11-30',dueLabel:'開賣後儘早處理',useDates:'02/11、02/15、02/21',locations:['溫哥華','西雅圖','拉斯維加斯','洛杉磯'],link:{url:'https://www.amtrak.com/cascades-train',label:'Amtrak Cascades'}},
  {id:'attractions',category:'預約',title:'預訂樂園、表演與當地團',description:'優先安排大峽谷／胡佛水壩接送團、Sphere 或演出、Universal Studios Hollywood 與 Disneyland。',dueDate:'2026-12-15',dueLabel:'2026/12/15 前',useDates:'02/16–28',locations:['拉斯維加斯','洛杉磯'],link:null},
  {id:'medicine',category:'健康',title:'備妥處方藥與常備藥',description:'準備足量藥品、原包裝與必要說明；重要藥品放入隨身行李。',dueDate:'2027-01-04',dueLabel:'2027/01/04 前',useDates:'02/04–03/03',locations:['全程'],link:null},
  {id:'money',category:'金流',title:'確認信用卡、現金與海外交易',description:'準備不同發卡機構的付款方式，確認加幣與美元的小額現金安排。',dueDate:'2027-01-10',dueLabel:'2027/01/10 前',useDates:'02/04–03/03',locations:['加拿大','美國'],link:null},
  {id:'connectivity',category:'通訊',title:'準備加拿大與美國網路方案',description:'確認 eSIM 覆蓋、啟用日期與手機相容性，離線保存住宿和接送資訊。',dueDate:'2027-01-15',dueLabel:'2027/01/15 前',useDates:'02/04–03/03',locations:['加拿大','美國'],link:null},
  {id:'luggage-power',category:'行李',title:'整理極地與城市行李',description:'分開準備黃刀鎮極地保暖層、城市冬衣及機上隨身用品。',dueDate:'2027-01-20',dueLabel:'2027/01/20 前',useDates:'02/04–03/03',locations:['黃刀鎮','美西城市'],link:null},
  {id:'camera',category:'攝影',title:'檢查相機、腳架與耐寒電池',description:'確認器材容量與備份，多帶備用電池並貼身保暖。',dueDate:'2027-01-24',dueLabel:'2027/01/24 前',useDates:'02/07–08',locations:['黃刀鎮'],link:null},
  {id:'offline-documents',category:'文件',title:'下載離線票券與證件備份',description:'離線保存護照、保單、機票、住宿、火車、活動票券與接送資料。',dueDate:'2027-01-28',dueLabel:'2027/01/28 前',useDates:'02/04–03/03',locations:['全程'],link:null},
  {id:'weather-transfers',category:'確認',title:'確認天氣、班次與接送',description:'出發前複查極光團、狗拉雪橇、Amtrak、國內航班與當地接送。',dueDate:'2027-02-01',dueLabel:'2027/02/01 複查',useDates:'02/04–03/01',locations:['溫哥華','黃刀鎮','西雅圖','拉斯維加斯','洛杉磯'],link:null},
  {id:'final-pack',category:'最後確認',title:'最終行李與隨身包檢查',description:'確認護照、手機、錢包、藥品、充電線、保暖層與換洗衣物已放入隨身行李。',dueDate:'2027-02-03',dueLabel:'2027/02/03',useDates:'02/04 出發',locations:['台北桃園機場'],link:null}
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
document.querySelector('#budget-bars').innerHTML = budgets.map(b=>`<div class="budget-row"><span>${b[0]}</span><div class="bar-track"><div class="bar-fill" style="width:${Math.round(b[2]/maxBudget*100)}%"></div></div><strong>NT$ ${b[1].toLocaleString()}–${b[2].toLocaleString()}</strong></div>`).join('');

const preparationStorageKey = 'trip-preparation-v1';
const preparationIds = new Set(preparationItems.map(item=>item.id));
let completedPreparation = new Set();
let preparationFilter = 'all';
try {
  const savedPreparation = JSON.parse(localStorage.getItem(preparationStorageKey) || '[]');
  if (Array.isArray(savedPreparation)) completedPreparation = new Set(savedPreparation.filter(id=>preparationIds.has(id)));
} catch (error) { completedPreparation = new Set(); }
const preparationList = document.querySelector('#preparation-list');
const preparationStatus = document.querySelector('#preparation-status');
const preparationProgressLabel = document.querySelector('#preparation-progress-label');
const preparationProgressBar = document.querySelector('#preparation-progress-bar');
const savePreparation = () => { try { localStorage.setItem(preparationStorageKey, JSON.stringify([...completedPreparation])); } catch (error) {} };
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
    if (checkbox.checked) completedPreparation.add(checkbox.dataset.preparationId); else completedPreparation.delete(checkbox.dataset.preparationId);
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

const stops = [
  ['台北','02/04 出發',25.08,121.23,'#0b2b46'],
  ['溫哥華','02/04–06 · 2 晚',49.20,-123.18,'#49d799'],
  ['黃刀鎮','02/06–09 · 3 晚',62.47,-114.37,'#49d799'],
  ['溫哥華','02/09–11 · 2 晚',49.20,-123.18,'#49d799'],
  ['西雅圖','02/11–15 · 4 晚',47.61,-122.33,'#4f8fbd'],
  ['拉斯維加斯','02/15–21 · 6 晚',36.17,-115.14,'#f09247'],
  ['洛杉磯','02/21–03/01 · 8 晚',34.05,-118.24,'#f09247'],
  ['台北','03/01 自 LAX 出發 · 抵達日待查',25.08,121.23,'#0b2b46']
];
const mapStatus = document.querySelector('#map-status');
const mapButtons = [...document.querySelectorAll('[data-map-view]')];
const mapLink = stop => `https://www.google.com/maps/search/?api=1&query=${stop[2]},${stop[3]}`;
document.querySelector('#map-city-list').innerHTML = stops.slice(1).map((s,i)=>`<article class="map-city"><button type="button" data-map-stop="${i+1}" aria-label="在地圖查看${s[0]}"><span>${i+1}</span><strong>${s[0]}</strong></button><small>${s[1]}</small><a href="${mapLink(s)}" target="_blank" rel="noreferrer">Google 地圖 ↗</a></article>`).join('');
function mapLeg(a,b) {
  const start=[a[2],a[3]],end=[b[2],b[3]];
  if(Math.abs(end[1]-start[1])<=180) return [start,end];
  const unwrapped=end[1]+(end[1]<start[1]?360:-360),edge=unwrapped>180?180:-180;
  const latitude=start[0]+(end[0]-start[0])*(edge-start[1])/(unwrapped-start[1]);
  return [[start,[latitude,edge]],[[latitude,-edge],end]];
}
if(window.L){
  document.querySelector('#trip-map').replaceChildren();
  const map=L.map('trip-map',{scrollWheelZoom:false,worldCopyJump:true,minZoom:0,zoomSnap:.25});
  let activeView='west',tileFailed=false;
  const views={canada:[1,2,3],west:[3,4,5,6],world:stops.map((_,i)=>i)};
  const captions={canada:'加拿大：溫哥華 → 黃刀鎮 3 晚 → 溫哥華；2/9 晚返抵。',west:'美國西部：西雅圖 → 拉斯維加斯 → 洛杉磯；跨城搭火車與飛機，不自駕。',world:'全程：台北 → 溫哥華 → 黃刀鎮 → 溫哥華 → 西雅圖 → 拉斯維加斯 → 洛杉磯 → 台北。'};
  const layer=L.layerGroup().addTo(map),markers=[];
  const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
  const updateStatus=()=>{mapStatus.textContent=captions[activeView]+(tileFailed?' 部分底圖無法載入，仍可使用下方 Google 地圖連結。':'');};
  tiles.on('tileerror',()=>{tileFailed=true;updateStatus();});
  function fitView(){map.invalidateSize();const bounds=activeView==='world'?[[5,-180],[72,180]]:views[activeView].map(i=>[stops[i][2],stops[i][3]]);map.fitBounds(bounds,{padding:[70,55],maxZoom:activeView==='world'?3:activeView==='west'?5:5,animate:false});}
  function showView(view){
    activeView=view;layer.clearLayers();map.closePopup();const indices=views[view];
    for(let i=0;i<stops.length-1;i++){
      if(!indices.includes(i)||!indices.includes(i+1)) continue;
      const rail=i===3,description=['台北 → 溫哥華<br>CI0032 · 參考航段','溫哥華 → 黃刀鎮<br>Air North 4N869 · 2/6','黃刀鎮 → 溫哥華<br>Air North 4N880 · 2/9 19:15–21:00','溫哥華 → 西雅圖<br>Amtrak Cascades · 2/11','西雅圖 → 拉斯維加斯<br>航班待查 · 2/15','拉斯維加斯 → 洛杉磯<br>航班待查 · 2/21','洛杉磯 → 台北<br>3/1 自 LAX 出發 · 航班待查'][i];
      for(const leg of mapLeg(stops[i],stops[i+1])) L.polyline(leg,{color:rail?'#ac571b':'#27677e',weight:rail?4:3,opacity:.85,dashArray:rail?null:'8 7'}).addTo(layer).bindPopup(description);
    }
    indices.forEach(i=>{const s=stops[i],icon=L.divIcon({className:'trip-pin',html:`<span class="custom-marker" style="--marker:${s[4]}">${i+1}</span>`,iconSize:[30,30],iconAnchor:[15,15]});markers[i]=L.marker([s[2],s[3]],{icon,title:s[0],alt:s[0]}).addTo(layer).bindTooltip(s[0],{permanent:view!=='world',direction:i>4?'left':'right',offset:i>4?[-18,0]:[18,0],className:'city-label'}).bindPopup(`<strong>${i+1}. ${s[0]}</strong><small>${s[1]}</small><a href="${mapLink(s)}" target="_blank" rel="noreferrer">開啟 Google 地圖 ↗</a>`);});
    mapButtons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mapView===view)));
    document.querySelectorAll('.map-city').forEach((card,i)=>{card.hidden=!indices.includes(i+1);});updateStatus();fitView();
  }
  mapButtons.forEach(b=>b.addEventListener('click',()=>showView(b.dataset.mapView)));
  document.querySelector('#map-reset').addEventListener('click',fitView);
  document.querySelectorAll('[data-map-stop]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.mapStop);map.setView([stops[i][2],stops[i][3]],8,{animate:false});markers[i].openPopup();document.querySelector('#trip-map').scrollIntoView({behavior:'smooth',block:'center'});}));
  showView('west');
  if(window.ResizeObserver) new ResizeObserver(()=>fitView()).observe(document.querySelector('#trip-map'));
}else{
  document.querySelector('.map-fallback').textContent='互動地圖未能載入，請使用下方城市的 Google 地圖連結。';
  mapStatus.textContent='各城市日期與外部地圖仍可使用。';
  document.querySelectorAll('[data-map-view],[data-map-stop],#map-reset').forEach(b=>{b.disabled=true;});
}
