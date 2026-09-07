<script setup>
import { computed, ref } from 'vue'
import ElectionCountdown from './ElectionCountdown.vue'
import gallerySource from './assets/gallery-source.jpg'
import { facebookPhotosUrl, galleryItems } from './gallery-data'

const visibleCount = ref(10)
const visiblePhotos = computed(() => galleryItems.slice(0, visibleCount.value))

function showMorePhotos() {
  visibleCount.value = Math.min(visibleCount.value + 6, galleryItems.length)
}
</script>

<template>
  <div class="gallery-page">
    <a class="skip-link" href="#gallery-main">跳至主要內容</a>
    <ElectionCountdown />

    <header class="gallery-header">
      <a class="brand" href="./" aria-label="回到吳亞倫首頁">
        <span class="brand-mark">吳</span>
        <span class="brand-copy"><strong>吳亞倫</strong><small>吳姐姐</small></span>
      </a>
      <nav aria-label="照片牆導覽">
        <a href="./#events">最新行程</a>
        <a class="gallery-header-action" href="./#action" data-track-event="join_navigation" data-track-location="gallery_header">加入我們</a>
      </nav>
    </header>

    <main id="gallery-main">
      <section class="gallery-hero">
        <div class="gallery-grid-lines" aria-hidden="true"></div>
        <div class="gallery-hero-inner">
          <a class="gallery-back" href="./">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
            回到首頁
          </a>
          <p class="gallery-kicker"><span></span>RECENT MOMENTS</p>
          <h1>每一次相遇，<br /><em>都是地方的故事</em></h1>
          <p>走進市場、車站、社區與地方活動，用照片記錄亞倫和鄉親一起走過的每一步。</p>
          <div class="gallery-hero-actions">
            <a class="is-primary" href="#photo-wall">
              查看最新照片
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14m-6-6 6 6 6-6" /></svg>
            </a>
            <a :href="facebookPhotosUrl" target="_blank" rel="noopener noreferrer" data-track-event="facebook_outbound" data-track-location="gallery_hero">前往 Facebook 看全部</a>
          </div>
        </div>
      </section>

      <section id="photo-wall" class="gallery-wall-section" aria-labelledby="wall-title">
        <div class="gallery-wall-heading">
          <div>
            <span>PHOTO WALL</span>
            <h2 id="wall-title">近期行程照片</h2>
          </div>
          <p>照片依更新時間由新到舊排列，先呈現近期內容，再依序載入更多地方行動紀錄。</p>
        </div>

        <div class="gallery-wall" aria-live="polite">
          <a
            v-for="(photo, index) in visiblePhotos"
            :key="photo.id"
            class="gallery-card"
            :href="photo.url || facebookPhotosUrl"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${photo.title}，前往 Facebook 查看照片`"
            data-track-event="gallery_photo_click"
            data-track-location="gallery_wall"
            :data-track-id="photo.id"
            :data-track-label="photo.title"
          >
            <div
              class="gallery-photo"
              :style="{
                backgroundImage: `url(${photo.image || gallerySource})`,
                backgroundSize: photo.image ? 'cover' : undefined,
                backgroundPosition: photo.image ? 'center' : undefined,
                '--photo-x': photo.x,
                '--photo-y': photo.y,
              }"
              role="img"
              :aria-label="photo.title"
            ></div>
            <div class="gallery-card-copy">
              <span>{{ photo.district }}・{{ photo.date }}</span>
              <strong>{{ photo.title }}</strong>
            </div>
          </a>
        </div>

        <div class="gallery-load-more">
          <button
            v-if="visibleCount < galleryItems.length"
            type="button"
            data-track-event="gallery_load_more"
            data-track-location="gallery_wall"
            @click="showMorePhotos"
          >載入更多照片</button>
          <span>目前顯示 {{ visiblePhotos.length }}／{{ galleryItems.length }} 則</span>
        </div>
      </section>

      <section class="gallery-cta">
        <p>想即時掌握下一站？</p>
        <h2>追蹤吳姐姐，<br />一起走進地方日常。</h2>
        <a :href="facebookPhotosUrl" target="_blank" rel="noopener noreferrer" data-track-event="facebook_outbound" data-track-location="gallery_cta">追蹤 Facebook</a>
      </section>
    </main>

    <footer class="gallery-footer">
      <a href="./">吳亞倫・吳姐姐</a>
      <span>新人新氣象，服務有力量</span>
    </footer>

    <nav class="mobile-actions" aria-label="手機快速行動">
      <a href="./#policies" data-track-event="policy_click" data-track-location="gallery_mobile_bar" data-track-id="overview">看政見</a>
      <a href="./#action" data-track-event="join_navigation" data-track-location="gallery_mobile_bar">加入我們</a>
      <a href="https://donate.tpp.org.tw/support/MGHnhwbm" target="_blank" rel="noopener noreferrer" data-track-event="donate_click" data-track-location="gallery_mobile_bar">小額捐款</a>
    </nav>
  </div>
</template>
