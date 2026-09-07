<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import ElectionCountdown from './ElectionCountdown.vue'
import portrait from './assets/人物_2.webp'
import character from './assets/人物_1.webp'
import milestone from './assets/about/milestone.webp'
import dialogue from './assets/about/dialogue.webp'
import forum from './assets/about/forum.webp'
import local from './assets/about/local.webp'
import research from './assets/about/research.webp'
import ride from './assets/about/ride.webp'

const menuOpen = ref(false)
let observer

const navItems = [
  { label: '首頁', href: '/' },
  { label: '一路走來', href: '#journey' },
  { label: '在地日常', href: '#roots' },
  { label: '公益行動', href: '#service' },
  { label: '做事方式', href: '#values' },
]

const journey = [
  {
    year: '2023',
    label: '站出來',
    title: '從一位小草支持者開始',
    copy: '總統大選期間，因為支持柯文哲與理性、務實、科學的理念，亞倫第一次從關心政治走向街頭，成為志工隊伍裡的一員。',
  },
  {
    year: '2024',
    label: '一起學習',
    title: '把熱情變成可以累積的行動',
    copy: '從街頭宣傳到「眾草座談」，她和夥伴一邊做、一邊學，讓支持者不只相遇，也能交換知識、練習思考公共問題。',
  },
  {
    year: '2025',
    label: '走入地方',
    title: '從熟悉的生活圈，走向四個行政區',
    copy: '以北大特區與三峽市場的日常為起點，腳步逐漸走遍土城、樹林、三峽、鶯歌，在市場、社區與街頭累積一次次真實對話。',
  },
  {
    year: '2026',
    label: '承擔責任',
    title: '從志工走向市議員參選人',
    copy: '一路參與之後，她決定承擔更大的責任：把職場的專業、志工的執行力與地方的聲音，一起帶進市政監督。',
  },
]

function closeMenu() {
  menuOpen.value = false
}

function handleEscape(event) {
  if (event.key === 'Escape') closeMenu()
}

function handleDesktopResize() {
  if (window.innerWidth > 900) closeMenu()
}

watch(menuOpen, (isOpen) => document.body.classList.toggle('menu-is-open', isOpen))

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })
  document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
  window.addEventListener('keydown', handleEscape)
  window.addEventListener('resize', handleDesktopResize)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('keydown', handleEscape)
  window.removeEventListener('resize', handleDesktopResize)
  document.body.classList.remove('menu-is-open')
})
</script>

<template>
  <div class="site-shell about-page">
    <a class="skip-link" href="#main">跳至主要內容</a>
    <ElectionCountdown />

    <header class="site-header">
      <a href="/" class="brand" aria-label="回到首頁" @click="closeMenu">
        <span class="brand-mark">吳</span>
        <span class="brand-copy"><strong>吳亞倫</strong><small>吳姐姐</small></span>
      </a>
      <button class="menu-toggle" :class="{ 'is-active': menuOpen }" type="button" :aria-expanded="menuOpen" aria-controls="about-navigation" :aria-label="menuOpen ? '關閉網站選單' : '開啟網站選單'" @click="menuOpen = !menuOpen">
        <span></span><span></span>
      </button>
      <nav id="about-navigation" class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="主要選單">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">{{ item.label }}</a>
        <a class="nav-action nav-join" href="#join" data-track-event="join_navigation" data-track-location="about_header" @click="closeMenu">加入我們</a>
        <a class="nav-action nav-donate" href="https://donate.tpp.org.tw/support/MGHnhwbm" target="_blank" rel="noopener noreferrer" data-track-event="donate_click" data-track-location="about_header">小額捐款</a>
      </nav>
    </header>

    <main id="main">
      <section class="about-hero">
        <div class="about-hero-grid" aria-hidden="true"></div>
        <div class="about-hero-copy">
          <p class="hero-eyebrow hero-animate hero-delay-1"><span class="pulse-dot"></span>認識吳亞倫・吳姐姐</p>
          <h1 class="hero-animate hero-delay-2">從平凡日常出發，<br /><em>一步步走進公共服務</em></h1>
          <p class="about-hero-lead hero-animate hero-delay-3">她曾是每天搭公車通勤的上班族，也是一位住在北大特區十多年的居民。從證券業、企業管理到志工行動，亞倫相信，真正的改變不是突然出現，而是在每一次參與裡慢慢長出來。</p>
          <div class="about-hero-tags hero-animate hero-delay-4">
            <span>東吳大學 EMBA</span><span>近 9 年證券業</span><span>芯蒝志工協會理事長</span>
          </div>
          <a class="text-link large hero-animate hero-delay-5" href="#journey">看看這一路怎麼走來 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
        </div>
        <div class="about-hero-portrait hero-animate hero-delay-3">
          <div class="about-hero-ring" aria-hidden="true"></div>
          <span class="about-hero-word" aria-hidden="true">GROW</span>
          <img :src="portrait" alt="吳亞倫微笑形象照" />
          <div class="about-name-card"><small>NEW TAIPEI CITY</small><strong>吳亞倫</strong><span>新北市議員參選人</span></div>
        </div>
      </section>

      <section id="roots" class="about-roots section">
        <div class="roots-copy" data-reveal>
          <p class="section-kicker">WHERE HOME IS</p>
          <h2>三峽<br /><em>是生活了十多年的家</em></h2>
          <p>北大特區是亞倫生活十多年的地方。過去，她和許多上班族一樣搭著公車通勤；下班採買、假日走逛，三峽市場就是再熟悉不過的日常生活圈。</p>
          <p>投入志工後，熟悉的生活圈慢慢向外延伸。從北大、三峽到鶯歌，再走進樹林與土城；每一次出發，都讓她更理解四個行政區不同的步調與需要。</p>
          <blockquote>「地方不是從資料上認識的，是一次次走進去、和人說話，才真正看見。」</blockquote>
        </div>
        <div class="roots-photo" data-reveal>
          <img :src="local" alt="吳亞倫在市場向長輩親切問候" loading="lazy" decoding="async" />
          <div class="roots-photo-note"><strong>10+ 年</strong><span>生活在北大特區</span></div>
        </div>
      </section>

      <section id="journey" class="journey-section section">
        <div class="journey-heading" data-reveal>
          <p class="section-kicker light">THE JOURNEY</p>
          <h2>不是一夕之間，<br /><em>是一路參與、一路成長</em></h2>
          <p>從支持者、志工、活動組織者，到決定參選。每一個階段，都建立在前一次真實的參與之上。</p>
        </div>
        <div class="journey-layout">
          <div class="journey-list">
            <article v-for="(item, index) in journey" :key="item.year" class="journey-item" data-reveal :style="{ '--delay': `${index * 80}ms` }">
              <div class="journey-year"><strong>{{ item.year }}</strong><span>{{ item.label }}</span></div>
              <div><h3>{{ item.title }}</h3><p>{{ item.copy }}</p></div>
            </article>
          </div>
          <div class="journey-collage" data-reveal>
            <figure class="collage-main"><img :src="forum" alt="吳亞倫與眾草座談工作夥伴合影" loading="lazy" decoding="async" /><figcaption>從相遇，到一起學習與行動</figcaption></figure>
            <figure class="collage-small"><img :src="milestone" alt="吳亞倫與志工團隊完成參選登記" loading="lazy" decoding="async" /><figcaption>把參與化成承擔</figcaption></figure>
          </div>
        </div>
      </section>

      <section id="service" class="service-section section">
        <div class="section-heading" data-reveal>
          <div><p class="section-kicker">GROWING TOGETHER</p><h2>把一個人的熱情，<br /><em>變成一群人的行動</em></h2></div>
          <p class="section-intro">志工經驗讓亞倫學會的，不只是站上街頭，更是如何找到夥伴、整合資源，讓一件好事真正發生。</p>
        </div>
        <div class="service-grid">
          <article data-reveal>
            <span>01</span><h3>知識分享</h3><p>透過眾草座談與知識性講座，讓關心公共事務的人有機會實體交流、一起理解議題。</p>
          </article>
          <article data-reveal style="--delay: 90ms">
            <span>02</span><h3>公益服務</h3><p>芯蒝志工協會舉辦多次捐血活動，也在路跑活動設攤，把志工能量帶進社會需要的地方。</p>
          </article>
          <article data-reveal style="--delay: 180ms">
            <span>03</span><h3>地方走讀</h3><p>騎著 YouBike、走進市場和社區，從實際路線與民眾經驗，認識地方生活的問題。</p>
          </article>
        </div>
        <div class="service-photo-strip" data-reveal>
          <img :src="dialogue" alt="吳亞倫在小型座談中與夥伴交流" loading="lazy" decoding="async" />
          <img :src="ride" alt="吳亞倫與志工騎乘 YouBike 認識地方路線" loading="lazy" decoding="async" />
        </div>
      </section>

      <section id="values" class="values-section section">
        <div class="values-photo" data-reveal><img :src="research" alt="吳亞倫對照地方地圖討論市政問題" loading="lazy" decoding="async" /><span>先理解問題，才提出答案</span></div>
        <div class="values-copy" data-reveal>
          <p class="section-kicker light">HOW SHE WORKS</p>
          <h2>把職場的專業，<br /><em>帶進公共服務</em></h2>
          <p>近九年的證券業歷練，讓亞倫習慣面對數字、風險與責任；企業後勤管理的經驗，則讓她理解一件事要落實，靠的是流程、協調與持續追蹤。</p>
          <p>如今，她希望把這些做事方法帶進地方政治：先傾聽、再研究；把預算說清楚、把進度追到底，讓市民每天遇到的問題，成為市政真正要解決的事。</p>
          <div class="value-points"><span>理性</span><span>務實</span><span>科學</span><span>公開透明</span></div>
          <a class="button button-light" href="/#policies" data-track-event="policy_click" data-track-location="about_values" data-track-id="overview">看吳姐姐的四大政見 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
        </div>
      </section>

      <section id="join" class="about-join">
        <div class="about-join-inner">
          <div data-reveal><p class="section-kicker">THE NEXT STEP</p><h2>這一路，還要和更多人一起走</h2><p>從一名志工開始的亞倫，相信每一個普通人的參與，都能讓地方多一點改變。歡迎你加入，成為下一段路的同行夥伴。</p><div class="action-buttons"><a class="button button-primary" href="https://line.me/ti/g2/DG8AWz6XYx1T4QOzjQYkduMy-u5ZuerKI6Rb9g" target="_blank" rel="noopener noreferrer" data-track-event="volunteer_click" data-track-location="about_join">加入志工夥伴 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a><a class="button button-ghost" href="/">回到首頁</a></div></div>
          <div class="about-join-character" data-reveal><span aria-hidden="true">TOGETHER</span><img :src="character" alt="吳亞倫 Q 版人物舉拳向前" /></div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-main"><div class="footer-brand"><span class="brand-mark">吳</span><div><strong>吳亞倫・吳姐姐</strong><small>新人新氣象，服務有力量</small></div></div><div class="footer-contact"><a class="footer-contact-card" href="mailto:tppsanying@gmail.com" data-track-event="contact_click" data-track-location="about_footer"><span class="footer-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 6h18v12H3zM3 7l9 7 9-7" /></svg></span><span class="footer-contact-copy"><small>聯絡團隊</small><strong>tppsanying@gmail.com</strong><span>寫信給我們</span></span></a><a class="footer-contact-card footer-location-card" href="https://maps.app.goo.gl/Yc6FjV2raULmgK2Q6" target="_blank" rel="noopener noreferrer" data-track-event="directions_click" data-track-location="about_footer"><span class="footer-contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" /><circle cx="12" cy="9" r="2.4" /></svg></span><span class="footer-contact-copy"><small>競選服務處</small><strong>吳亞倫競選服務處</strong><span>開啟 Google 地圖</span></span></a></div></div>
      <div class="footer-meta"><div class="footer-links"><a href="/">首頁</a><a href="gallery.html">照片牆</a><a href="https://www.facebook.com/profile.php?id=61584383458056" target="_blank" rel="noopener noreferrer">Facebook</a><a href="https://www.youtube.com/@wuyalun1209" target="_blank" rel="noopener noreferrer">YouTube</a></div><p>2026 吳亞倫／吳姐姐競選志工團隊</p></div>
    </footer>

    <nav class="mobile-actions" aria-label="手機快速行動"><a href="/#policies">看政見</a><a href="#join">加入我們</a><a href="https://donate.tpp.org.tw/support/MGHnhwbm" target="_blank" rel="noopener noreferrer">小額捐款</a></nav>
  </div>
</template>
