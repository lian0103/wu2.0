import weeklySchedule from './assets/gallery/122152508955146115.jpg'
import fluVaccineNotice from './assets/gallery/122152376541146115.jpg'
import octoberBanquetConversation from './assets/gallery/122152241595146115.jpg'
import octoberBanquetSpeech from './assets/gallery/122152241535146115.jpg'
import octoberBanquetToast from './assets/gallery/122152241517146115.jpg'
import octoberBanquetStage from './assets/gallery/122152241457146115.jpg'
import octoberBanquetCheers from './assets/gallery/122152241421146115.jpg'
import octoberBanquetGreeting from './assets/gallery/122152241379146115.jpg'
import photo965897 from './assets/gallery/122149965897146115.jpg'
import photo965831 from './assets/gallery/122149965831146115.jpg'
import photo965819 from './assets/gallery/122149965819146115.jpg'
import photo902993 from './assets/gallery/122149902993146115.jpg'
import photo902969 from './assets/gallery/122149902969146115.jpg'
import photo902909 from './assets/gallery/122149902909146115.jpg'
import photo902885 from './assets/gallery/122149902885146115.jpg'
import photo868649 from './assets/gallery/122149868649146115.jpg'
import photo724661 from './assets/gallery/122149724661146115.jpg'
import photo724601 from './assets/gallery/122149724601146115.jpg'
import photo724577 from './assets/gallery/122149724577146115.jpg'
import photo636311 from './assets/gallery/122149636311146115.jpg'
import photo555449 from './assets/gallery/122149555449146115.jpg'
import photo444035 from './assets/gallery/122149444035146115.jpg'
import photo308957 from './assets/gallery/122149308957146115.jpg'
import photo308909 from './assets/gallery/122149308909146115.jpg'
import banquetGreeting from './assets/gallery/122148764805146115.jpg'
import banquetToast from './assets/gallery/122148764757146115.jpg'
import banquetConversation from './assets/gallery/122148764721146115.jpg'
import banquetHighFive from './assets/gallery/122148764679146115.jpg'
import banquetLeaderGreeting from './assets/gallery/122148764625146115.jpg'
import banquetElderGreeting from './assets/gallery/122148764595146115.jpg'
import pickleballDebut from './assets/gallery/122148683967146115.jpg'
import websiteLaunch from './assets/gallery/122148655011146115.jpg'
import photo833 from './assets/gallery/122148520833146115.jpg'
import photo815 from './assets/gallery/122148520815146115.jpg'
import photo761 from './assets/gallery/122148520761146115.jpg'
import photo737 from './assets/gallery/122148520737146115.jpg'
import photo677 from './assets/gallery/122148520677146115.jpg'
import photo653 from './assets/gallery/122148520653146115.jpg'
import photo593 from './assets/gallery/122148520593146115.jpg'
import photo569 from './assets/gallery/122148520569146115.jpg'
import marketGreeting from './assets/gallery/122148398949146115.jpg'
import communityGathering from './assets/gallery/122148398919146115.jpg'
import marketOutreach from './assets/gallery/122148398853146115.jpg'

export const facebookPhotosUrl = 'https://www.facebook.com/profile.php?id=61584383458056&sk=photos'

// 陣列順序即顯示時序（最新到最舊）；x / y 對應目前素材圖中的照片位置。
// 日後排程可將 image 欄位改成原始照片網址，並維持最新資料在最前方。
export const galleryItems = [
  // 2026-10-06 讀取 Facebook 公開相片頁；第一張為當日貼文，其餘顯示「1天」。
  { id: '122152508955146115', title: '亞倫本週嗡嗡嗡，四場揮手行程', district: '最新行程', date: '2026-10-06', image: weeklySchedule, url: 'https://www.facebook.com/photo.php?fbid=122152508955146115' },
  { id: '122152376541146115', title: '流感疫苗開打，提醒符合資格朋友接種', district: '健康提醒', date: '2026-10-05', image: fluVaccineNotice, url: 'https://www.facebook.com/photo.php?fbid=122152376541146115' },
  { id: '122152241595146115', title: '餐會交流，傾聽鄉親分享', district: '地方活動', date: '2026-10-05', image: octoberBanquetConversation, url: 'https://www.facebook.com/photo.php?fbid=122152241595146115' },
  { id: '122152241535146115', title: '活動致詞，向鄉親熱情問候', district: '地方活動', date: '2026-10-05', image: octoberBanquetSpeech, url: 'https://www.facebook.com/photo.php?fbid=122152241535146115' },
  { id: '122152241517146115', title: '餐敘交流，與鄉親舉杯致意', district: '地方活動', date: '2026-10-05', image: octoberBanquetToast, url: 'https://www.facebook.com/photo.php?fbid=122152241517146115' },
  { id: '122152241457146115', title: '地方餐會，與夥伴分享理念', district: '地方活動', date: '2026-10-05', image: octoberBanquetStage, url: 'https://www.facebook.com/photo.php?fbid=122152241457146115' },
  { id: '122152241421146115', title: '與鄉親同桌交流，熱情乾杯', district: '地方活動', date: '2026-10-05', image: octoberBanquetCheers, url: 'https://www.facebook.com/photo.php?fbid=122152241421146115' },
  { id: '122152241379146115', title: '關心長輩，親切握手問好', district: '地方活動', date: '2026-10-05', image: octoberBanquetGreeting, url: 'https://www.facebook.com/photo.php?fbid=122152241379146115' },
  // 2026-09-18 讀取 Facebook 公開相片頁；相對時間換算為台灣日期，同日依來源順序排列。
  { id: '122149965897146115', title: '街頭行動，向市民爭取支持', district: '地方行動', date: '2026-09-18', image: photo965897, url: 'https://www.facebook.com/photo.php?fbid=122149965897146115' },
  { id: '122149965831146115', title: '選戰重點，一張圖看懂', district: '選戰行動', date: '2026-09-18', image: photo965831, url: 'https://www.facebook.com/photo.php?fbid=122149965831146115' },
  { id: '122149965819146115', title: '與夥伴並肩衝刺', district: '選戰行動', date: '2026-09-18', image: photo965819, url: 'https://www.facebook.com/photo.php?fbid=122149965819146115' },
  { id: '122149902993146115', title: '騎車走街，深入地方宣傳', district: '地方行動', date: '2026-09-18', image: photo902993, url: 'https://www.facebook.com/photo.php?fbid=122149902993146115' },
  { id: '122149902969146115', title: '路口宣傳，與市民問好', district: '地方行動', date: '2026-09-18', image: photo902969, url: 'https://www.facebook.com/photo.php?fbid=122149902969146115' },
  { id: '122149902909146115', title: '選戰主張，持續向前', district: '選戰行動', date: '2026-09-18', image: photo902909, url: 'https://www.facebook.com/photo.php?fbid=122149902909146115' },
  { id: '122149902885146115', title: '與夥伴合影，凝聚支持', district: '選戰行動', date: '2026-09-18', image: photo902885, url: 'https://www.facebook.com/photo.php?fbid=122149902885146115' },
  { id: '122149868649146115', title: '鶯歌車站宣傳，向市民報告政見', district: '鶯歌車站', date: '2026-09-17', image: photo868649, url: 'https://www.facebook.com/photo.php?fbid=122149868649146115' },
  { id: '122149724661146115', title: '尖山里走訪，向鄉親問好', district: '尖山里', date: '2026-09-16', image: photo724661, url: 'https://www.facebook.com/photo.php?fbid=122149724661146115' },
  { id: '122149724601146115', title: '尖山里街頭宣傳', district: '尖山里', date: '2026-09-16', image: photo724601, url: 'https://www.facebook.com/photo.php?fbid=122149724601146115' },
  { id: '122149724577146115', title: '騎車走訪尖山里', district: '尖山里', date: '2026-09-16', image: photo724577, url: 'https://www.facebook.com/photo.php?fbid=122149724577146115' },
  { id: '122149636311146115', title: '無菸城市，推動戶外負壓吸菸室', district: '政策主張', date: '2026-09-16', image: photo636311, url: 'https://www.facebook.com/photo.php?fbid=122149636311146115' },
  { id: '122149555449146115', title: '志工夥伴見面會 9/24', district: '志工活動', date: '2026-09-15', image: photo555449, url: 'https://www.facebook.com/photo.php?fbid=122149555449146115' },
  { id: '122149444035146115', title: '參與新北市綠生活音樂節', district: '新北市美術館', date: '2026-09-14', image: photo444035, url: 'https://www.facebook.com/photo.php?fbid=122149444035146115' },
  { id: '122149308957146115', title: '地方行動重點圖卡', district: '地方行動', date: '2026-09-13', image: photo308957, url: 'https://www.facebook.com/photo.php?fbid=122149308957146115' },
  { id: '122149308909146115', title: '與夥伴分享地方主張', district: '地方行動', date: '2026-09-13', image: photo308909, url: 'https://www.facebook.com/photo.php?fbid=122149308909146115' },
  // 2026-09-10 讀取 Facebook 公開相片頁；以下六張顯示「1天」，日期精度為日。
  { id: '122148764805146115', title: '地方餐會，與鄉親握手問好', district: '社區活動', date: '2026-09-09', image: banquetGreeting, url: 'https://www.facebook.com/photo.php?fbid=122148764805146115' },
  { id: '122148764757146115', title: '餐會交流，與鄉親舉杯致意', district: '社區活動', date: '2026-09-09', image: banquetToast, url: 'https://www.facebook.com/photo.php?fbid=122148764757146115' },
  { id: '122148764721146115', title: '走進席間，傾聽地方聲音', district: '社區活動', date: '2026-09-09', image: banquetConversation, url: 'https://www.facebook.com/photo.php?fbid=122148764721146115' },
  { id: '122148764679146115', title: '熱情擊掌，向長輩親切問候', district: '社區活動', date: '2026-09-09', image: banquetHighFive, url: 'https://www.facebook.com/photo.php?fbid=122148764679146115' },
  { id: '122148764625146115', title: '與里長交流地方大小事', district: '社區活動', date: '2026-09-09', image: banquetLeaderGreeting, url: 'https://www.facebook.com/photo.php?fbid=122148764625146115' },
  { id: '122148764595146115', title: '關心長輩，傳遞溫暖與支持', district: '社區活動', date: '2026-09-09', image: banquetElderGreeting, url: 'https://www.facebook.com/photo.php?fbid=122148764595146115' },
  // 2026-09-08 上午核實來源分別顯示「12小時」與「18小時」，發布日期精度為日。
  { id: '122148683967146115', title: '第一次體驗匹克球', district: '三峽運動中心', date: '2026-09-07', image: pickleballDebut, url: 'https://www.facebook.com/photo.php?fbid=122148683967146115' },
  { id: '122148655011146115', title: '吳姐姐新網站正式上線', district: '最新動態', date: '2026-09-07', image: websiteLaunch, url: 'https://www.facebook.com/photo.php?fbid=122148655011146115' },
  // 2026-09-07 上午核實來源顯示「20小時」，發布日期精度為日；同日依來源順序排列。
  { id: '122148520833146115', title: '廟埕相聚，與鄉親握手問好', district: '地方活動', date: '2026-09-06', image: photo833, url: 'https://www.facebook.com/photo.php?fbid=122148520833146115' },
  { id: '122148520815146115', title: '餐會走訪，親切問候長輩', district: '地方活動', date: '2026-09-06', image: photo815, url: 'https://www.facebook.com/photo.php?fbid=122148520815146115' },
  { id: '122148520761146115', title: '廟埕交流，傾聽長輩分享', district: '地方活動', date: '2026-09-06', image: photo761, url: 'https://www.facebook.com/photo.php?fbid=122148520761146115' },
  { id: '122148520737146115', title: '地方活動，與鄉親熱情相見', district: '地方活動', date: '2026-09-06', image: photo737, url: 'https://www.facebook.com/photo.php?fbid=122148520737146115' },
  { id: '122148520677146115', title: '餐會現場，向大家揮手問候', district: '地方活動', date: '2026-09-06', image: photo677, url: 'https://www.facebook.com/photo.php?fbid=122148520677146115' },
  { id: '122148520653146115', title: '廟埕走訪，與鄉親面對面', district: '地方活動', date: '2026-09-06', image: photo653, url: 'https://www.facebook.com/photo.php?fbid=122148520653146115' },
  { id: '122148520593146115', title: '餐會交流，舉杯向長輩致意', district: '地方活動', date: '2026-09-06', image: photo593, url: 'https://www.facebook.com/photo.php?fbid=122148520593146115' },
  { id: '122148520569146115', title: '逐桌問候，與鄉親握手交流', district: '地方活動', date: '2026-09-06', image: photo569, url: 'https://www.facebook.com/photo.php?fbid=122148520569146115' },
  // 2026-09-06 08:30（台灣時間）來源顯示「14小時」，日期精度為日。
  // 同日照片維持來源相片牆順序；標題依照片可見內容摘要。
  { id: '122148398949146115', title: '市場走訪，與鄉親握手問好', district: '市場走訪', date: '2026-09-05', image: marketGreeting, url: 'https://www.facebook.com/photo.php?fbid=122148398949146115' },
  { id: '122148398919146115', title: '餐會交流，向長輩親切問候', district: '社區活動', date: '2026-09-05', image: communityGathering, url: 'https://www.facebook.com/photo.php?fbid=122148398919146115' },
  { id: '122148398853146115', title: '市場宣傳，與鄉親面對面', district: '市場走訪', date: '2026-09-05', image: marketOutreach, url: 'https://www.facebook.com/photo.php?fbid=122148398853146115' },
  { id: 'recent-01', title: '市場行程預告', district: '土樹三鶯', date: '近期更新', x: '0%', y: '0%' },
  { id: 'recent-02', title: '登記參選行動', district: '新北市', date: '近期更新', x: '20%', y: '0%' },
  { id: 'recent-03', title: '面對面傾聽市民', district: '在地走訪', date: '近期更新', x: '40%', y: '0%' },
  { id: 'recent-04', title: '夥伴共同向前', district: '新北市', date: '近期更新', x: '60%', y: '0%' },
  { id: 'recent-05', title: '地方活動交流', district: '在地行動', date: '近期更新', x: '80%', y: '0%' },
  { id: 'recent-06', title: '競選服務準備', district: '在地行動', date: '近期更新', x: '100%', y: '0%' },
  { id: 'recent-07', title: '街頭宣講', district: '地方行動', date: '近期更新', x: '0%', y: '33.3%' },
  { id: 'recent-08', title: '登記參選直播', district: '新北市', date: '近期更新', x: '20%', y: '33.3%' },
  { id: 'recent-09', title: '社區餐會走訪', district: '社區活動', date: '近期更新', x: '40%', y: '33.3%' },
  { id: 'recent-10', title: '市場拜訪交流', district: '市場走訪', date: '近期更新', x: '60%', y: '33.3%' },
  { id: 'recent-11', title: '社區服務行動', district: '社區活動', date: '近期更新', x: '80%', y: '33.3%' },
  { id: 'recent-12', title: '服務據點走訪', district: '地方行動', date: '近期更新', x: '100%', y: '33.3%' },
  { id: 'recent-13', title: '市場問候鄉親', district: '市場走訪', date: '近期更新', x: '0%', y: '66.6%' },
  { id: 'recent-14', title: '傾聽地方聲音', district: '市場走訪', date: '近期更新', x: '20%', y: '66.6%' },
  { id: 'recent-15', title: '與鄉親聊地方事', district: '社區活動', date: '近期更新', x: '40%', y: '66.6%' },
  { id: 'recent-16', title: '深入社區交流', district: '社區活動', date: '近期更新', x: '60%', y: '66.6%' },
  { id: 'recent-17', title: '地方活動分享', district: '在地行動', date: '近期更新', x: '80%', y: '66.6%' },
  { id: 'recent-18', title: '團隊並肩服務', district: '在地行動', date: '近期更新', x: '100%', y: '66.6%' },
  { id: 'recent-19', title: '宮廟參拜行程', district: '地方走訪', date: '近期更新', x: '0%', y: '100%' },
  { id: 'recent-20', title: '廟口與鄉親相見', district: '地方走訪', date: '近期更新', x: '20%', y: '100%' },
  { id: 'recent-21', title: '參與地方慶典', district: '地方走訪', date: '近期更新', x: '40%', y: '100%' },
  { id: 'recent-22', title: '走進地方信仰中心', district: '地方走訪', date: '近期更新', x: '60%', y: '100%' },
  { id: 'recent-23', title: '政策主張分享', district: '政策行動', date: '近期更新', x: '80%', y: '100%' },
  { id: 'recent-24', title: '街頭向市民問好', district: '地方行動', date: '近期更新', x: '100%', y: '100%' },
]
