# 吳亞倫競選形象網站 2.0

Vue 3 + Vite 多頁靜態網站，部署至 GitHub Pages。

## 開發與建置

```bash
npm install
npm run dev
npm run build
```

正式建置會預渲染首頁、照片牆，以及 `/policies/:slug/` 四個政見頁。

## 內容更新

- `src/events.js`：行程使用包含時區的 `startsAt`／`endsAt`，首頁會自動切換即將舉行與活動回顧。
- `src/policies.js`：四大政見內容與靜態網址 slug。
- `src/gallery-data.js`：照片牆內容。
- `src/youtube-shorts.js`：首頁 YouTube Shorts 清單。

## GA4 事件

主要互動由 `src/analytics.js` 統一送出，包括捐款、志工、政見、行政區、行程、照片牆、社群、聯絡與導航點擊。若要作為 GA4 關鍵事件，仍需在 GA4 管理介面中將指定事件標記為關鍵事件。
