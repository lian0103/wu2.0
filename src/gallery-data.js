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
