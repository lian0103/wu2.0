import marketGreeting from './assets/gallery/122148398949146115.jpg'
import communityGathering from './assets/gallery/122148398919146115.jpg'
import marketOutreach from './assets/gallery/122148398853146115.jpg'

export const facebookPhotosUrl = 'https://www.facebook.com/profile.php?id=61584383458056&sk=photos'

// 陣列順序即顯示時序（最新到最舊）；x / y 對應目前素材圖中的照片位置。
// 日後排程可將 image 欄位改成原始照片網址，並維持最新資料在最前方。
export const galleryItems = [
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
