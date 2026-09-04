<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import portrait from './assets/人物_2.webp'
import character from './assets/人物_1.webp'
import gallerySource from './assets/gallery-source.jpg'
import { galleryItems } from './gallery-data'
import { policies } from './policies'
import { youtubeShorts } from './youtube-shorts'

const menuOpen = ref(false)
const activeDistrict = ref('土城')

const navItems = [
  { label: '認識亞倫', href: '#about' },
  { label: '四大政見', href: '#policies' },
  { label: '在地行動', href: '#local' },
  { label: '照片牆', href: 'gallery.html' },
  { label: '最新影音', href: '#videos' },
  { label: '最新行程', href: '#events' },
]

const localActions = {
  土城: {
    headline: '從捷運站到鄰里街道，讓更多土城朋友認識亞倫',
    copy: '用一聲聲問候主動介紹自己，從每一次握手與交談開始，讓新人吳亞倫一步步走進土城鄉親的日常。',
    tags: ['海山捷運站', '鄰里街道'],
  },
  樹林: {
    headline: '一步一腳印，和樹林鄉親面對面交朋友',
    copy: '從樹林車站、長壽公園到博愛早市，走進人群、親切互動，用真誠累積熟悉感，也爭取每一份支持。',
    tags: ['樹林車站', '長壽公園', '博愛早市'],
  },
  三峽: {
    headline: '走進三峽日常，讓新人被看見、被認識',
    copy: '勤走北大特區、公有市場與鄰里活動，主動向三峽朋友介紹亞倫，也用每一次相遇拉近彼此的距離。',
    tags: ['北大特區', '三峽市場', '鄰里走訪'],
  },
  鶯歌: {
    headline: '持續走訪，成為鶯歌鄉親熟悉的新面孔',
    copy: '從鶯歌車站到二橋、大湖等社區，帶著笑容主動問候，讓更多朋友認識吳姐姐，也認識這份服務地方的初心。',
    tags: ['鶯歌車站', '二橋社區', '大湖里'],
  },
}

const events = [
  {
    day: '05',
    month: 'SEP',
    weekday: '週六',
    title: '好骨力・一起逛市場',
    place: '三峽市場',
    time: '上午 09:00',
    district: '三峽',
  },
  {
    day: '06',
    month: 'SEP',
    weekday: '週日',
    title: '好骨力・一起逛市場',
    place: '鶯歌市場',
    time: '上午 09:00',
    district: '鶯歌',
  },
]

function pickRandomItems(items, count) {
  const shuffled = [...items]
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]]
  }
  return shuffled.slice(0, count)
}

const featuredGalleryItems = pickRandomItems(galleryItems, 4)

function formatViewCount(viewCount) {
  return `${new Intl.NumberFormat('zh-TW').format(viewCount)} 次觀看`
}

function pickRecentShorts(items, count) {
  const cutoff = new Date()
  cutoff.setMonth(cutoff.getMonth() - 2)

  const sortedItems = [...items].sort((first, second) => new Date(second.publishedAt) - new Date(first.publishedAt))
  const recentItems = sortedItems.filter((video) => new Date(video.publishedAt) >= cutoff)

  return pickRandomItems(recentItems, count).map((video) => ({
    ...video,
    viewsLabel: formatViewCount(video.views),
    thumbnail: `https://i.ytimg.com/vi/${video.id}/frame0.jpg`,
  }))
}

const videos = pickRecentShorts(youtubeShorts, 3)

let observer

function handleEscape(event) {
  if (event.key === 'Escape' && menuOpen.value) closeMenu()
}

function handleDesktopResize() {
  if (window.innerWidth > 900 && menuOpen.value) closeMenu()
}

watch(menuOpen, (isOpen) => {
  document.body.classList.toggle('menu-is-open', isOpen)
})

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.14 },
  )

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

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main">跳至主要內容</a>

    <header class="site-header">
      <a href="#top" class="brand" aria-label="回到首頁" @click="closeMenu">
        <span class="brand-mark">吳</span>
        <span class="brand-copy">
          <strong>吳亞倫</strong>
          <small>吳姐姐</small>
        </span>
      </a>

      <button
        class="menu-toggle"
        :class="{ 'is-active': menuOpen }"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="main-navigation"
        :aria-label="menuOpen ? '關閉網站選單' : '開啟網站選單'"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span>
      </button>

      <nav id="main-navigation" class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="主要選單">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">
          {{ item.label }}
        </a>
        <a class="nav-action nav-join" href="#action" @click="closeMenu">加入我們</a>
        <a
          class="nav-action nav-donate"
          href="https://donate.tpp.org.tw/support/MGHnhwbm"
          target="_blank"
          rel="noopener noreferrer"
        >
          小額捐款
        </a>
      </nav>
    </header>

    <main id="main">
      <section id="top" class="hero" aria-label="吳亞倫候選人介紹">
        <div class="hero-grid" aria-hidden="true"></div>
        <div class="hero-orbit hero-orbit-one" aria-hidden="true"></div>
        <div class="hero-orbit hero-orbit-two" aria-hidden="true"></div>

        <div class="hero-content">
          <div class="hero-copy">
            <p class="hero-eyebrow hero-animate hero-delay-1">
              <span class="pulse-dot"></span>
              新北市議員參選人
            </p>
            <h1 class="hero-animate hero-delay-2">
              <span class="name">吳亞倫</span>
              <span class="nickname">吳姐姐</span>
            </h1>
            <div class="slogan hero-animate hero-delay-3">
              <span>新人新氣象</span>
              <strong>服務有力量<span class="slogan-mark">！</span></strong>
            </div>
            <p class="hero-lead hero-animate hero-delay-4">
              從居住正義、育兒支持到安全交通，<br />
              把市民每天遇到的問題，變成市政真正要解決的事。
            </p>
            <div class="hero-actions hero-animate hero-delay-5">
              <a class="button button-primary" href="#policies">
                看四大政見
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a class="button button-ghost" href="#action">加入吳姐姐</a>
            </div>
            <div class="districts hero-animate hero-delay-6" aria-label="服務地區">
              <span>土城</span><i></i><span>樹林</span><i></i><span>三峽</span><i></i><span>鶯歌</span>
            </div>
          </div>

          <div class="hero-visual" aria-label="吳亞倫候選人形象照">
            <div class="portrait-halo hero-animate hero-delay-2"></div>
            <div class="portrait-word word-one" aria-hidden="true">NEW</div>
            <div class="portrait-word word-two" aria-hidden="true">POWER</div>
            <img class="hero-portrait hero-animate hero-delay-3" :src="portrait" alt="吳亞倫微笑形象照" />
            <div class="candidate-badge hero-animate hero-delay-5">
              <span>一步一腳印</span>
              <strong>為地方認真</strong>
            </div>
            <div class="area-badge hero-animate hero-delay-6">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" />
                <circle cx="12" cy="10" r="2" />
              </svg>
              <span>深耕<br /><strong>土樹三鶯</strong></span>
            </div>
          </div>
        </div>

        <div class="mobile-hero-content">
          <p class="hero-eyebrow hero-animate hero-delay-1">
            <span class="pulse-dot"></span>
            新北市議員參選人
          </p>
          <h1 class="hero-animate hero-delay-2">
            <span class="name">吳亞倫</span>
            <span class="nickname">吳姐姐</span>
          </h1>
          <div class="slogan hero-animate hero-delay-3">
            <span>新人新氣象</span>
            <strong>服務有力量<span class="slogan-mark">！</span></strong>
          </div>
          <p class="mobile-hero-lead hero-animate hero-delay-4">
            從居住正義、育兒支持到安全交通，把市民每天遇到的問題，變成市政真正要解決的事。
          </p>
          <div class="hero-actions hero-animate hero-delay-5">
            <a class="button button-primary" href="#policies">
              看四大政見
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a class="button button-ghost" href="#action">加入吳姐姐</a>
          </div>
          <div class="mobile-hero-stage hero-animate hero-delay-5">
            <div class="mobile-districts">
              <span>服務選區</span>
              <strong>土城・樹林<br />三峽・鶯歌</strong>
            </div>
            <div class="mobile-portrait-frame">
              <div class="mobile-portrait-ring" aria-hidden="true"></div>
              <img :src="portrait" alt="吳亞倫微笑形象照" />
            </div>
          </div>
        </div>

        <a class="scroll-cue" href="#policies" aria-label="向下瀏覽">
          <span>SCROLL</span>
          <i></i>
        </a>
      </section>

      <section id="policies" class="section policies-section">
        <div class="section-heading" data-reveal>
          <div>
            <p class="section-kicker">OUR PROMISES</p>
            <h2>四個生活承諾<br /><em>讓改變發生在日常</em></h2>
          </div>
          <p class="section-intro">
            政策不該只是艱深的文字。從住得安心、育兒有支持，到通勤與道路安全，每一項都從市民的真實生活出發。
          </p>
        </div>

        <div class="policy-grid">
          <article
            v-for="(policy, index) in policies"
            :key="policy.id"
            class="policy-card"
            :class="`tone-${policy.tone}`"
            data-reveal
            :style="{ '--delay': `${index * 90}ms` }"
          >
            <div class="policy-topline">
              <span class="policy-number">{{ policy.id }}</span>
              <div class="policy-icon" aria-hidden="true">
                <svg v-if="policy.icon === 'home'" viewBox="0 0 48 48">
                  <path d="M7 22 24 8l17 14v18H29V28H19v12H7V22Z" />
                </svg>
                <svg v-else-if="policy.icon === 'family'" viewBox="0 0 48 48">
                  <circle cx="18" cy="16" r="6" /><circle cx="33" cy="18" r="5" />
                  <path d="M7 39c1-9 5-13 11-13s10 4 11 13M27 28c2-2 4-3 7-3 5 0 8 4 8 12" />
                </svg>
                <svg v-else-if="policy.icon === 'bike'" viewBox="0 0 48 48">
                  <circle cx="12" cy="34" r="8" /><circle cx="36" cy="34" r="8" />
                  <path d="m12 34 9-15 7 15H12Zm9-15h9m-4-6h7m-4 0 7 21" />
                </svg>
                <svg v-else viewBox="0 0 48 48">
                  <path d="M15 42 21 6M33 42 27 6M24 10v7m0 7v7m0 7v4" />
                </svg>
              </div>
            </div>
            <span class="policy-short">{{ policy.short }}</span>
            <h3>{{ policy.title }}</h3>
            <p>{{ policy.description }}</p>
            <a :href="`policy.html?id=${policy.slug}`" class="text-link" :aria-label="`深入了解：${policy.short}`">
              我想了解
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </article>
        </div>
      </section>

      <section id="local" class="section local-section">
        <div class="local-layout">
          <div class="local-copy" data-reveal>
            <p class="section-kicker light">LOCAL ACTION</p>
            <h2>勤走地方選區<br /><em>讓更多人看見</em></h2>
            <p>不是等選舉才出現。亞倫和夥伴持續走進市場、車站、公園與社區，讓每一次握手都成為理解地方的開始。</p>

            <div class="district-tabs" role="tablist" aria-label="選擇行政區">
              <button
                v-for="(_, district) in localActions"
                :key="district"
                type="button"
                role="tab"
                :aria-selected="activeDistrict === district"
                :class="{ active: activeDistrict === district }"
                @click="activeDistrict = district"
              >
                {{ district }}
              </button>
            </div>

            <div class="district-panel" role="tabpanel" :key="activeDistrict">
              <span class="panel-index">{{ activeDistrict }}</span>
              <h3>{{ localActions[activeDistrict].headline }}</h3>
              <p>{{ localActions[activeDistrict].copy }}</p>
              <div class="location-tags">
                <span v-for="tag in localActions[activeDistrict].tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>

          <div class="local-visual" data-reveal>
            <div class="map-shape" aria-hidden="true">
              <svg viewBox="0 0 620 540">
                <path class="map-area area-1" d="M96 108 222 47l112 72-31 120-146 12L75 190Z" />
                <path class="map-area area-2" d="m334 119 133-55 96 103-61 116-199-44Z" />
                <path class="map-area area-3" d="m157 251 146-12 78 103-50 142-174-23-83-124Z" />
                <path class="map-area area-4" d="m303 239 199 44 39 126-210 75 50-142Z" />
                <path class="route-line" d="M118 163c94-13 107 94 206 55s123 16 157 91-73 52-100 101-131-45-199-11" />
                <circle cx="124" cy="163" r="9" /><circle cx="325" cy="218" r="9" />
                <circle cx="480" cy="308" r="9" /><circle cx="183" cy="399" r="9" />
              </svg>
            </div>
            <span class="map-label label-tucheng">樹林</span>
            <span class="map-label label-shulin">土城</span>
            <span class="map-label label-sanxia">鶯歌</span>
            <span class="map-label label-yingge">三峽</span>
            <img :src="character" alt="吳亞倫 Q 版人物舉拳向前" />
            <div class="visual-stamp"><strong>在地</strong><span>新人</span></div>
          </div>
        </div>

        <div class="local-gallery" data-reveal>
          <div class="local-gallery-heading">
            <div>
              <p class="section-kicker light">RECENT MOMENTS</p>
              <h3>近期行動現場</h3>
            </div>
            <div class="local-gallery-intro">
              <p>每一次握手、每一段交談，都是理解地方的開始。這裡隨機精選近期走訪紀錄。</p>
              <a class="text-link local-gallery-link" href="gallery.html">
                瀏覽完整照片牆
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
          </div>

          <div class="local-gallery-grid">
            <a
              v-for="photo in featuredGalleryItems"
              :key="photo.id"
              class="local-gallery-card"
              href="gallery.html"
              :aria-label="`${photo.title}，前往完整照片牆`"
            >
              <div
                class="local-gallery-photo"
                :style="{
                  backgroundImage: `url(${gallerySource})`,
                  '--photo-x': photo.x,
                  '--photo-y': photo.y,
                }"
                role="img"
                :aria-label="photo.title"
              ></div>
              <div class="local-gallery-meta">
                <span>{{ photo.district }}</span>
                <strong>{{ photo.title }}</strong>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="about" class="section about-section">
        <div class="about-card" data-reveal>
          <div class="about-photo">
            <div class="about-photo-bg"></div>
            <img :src="portrait" alt="吳亞倫候選人形象照" />
            <span class="vertical-type">WU YA-LUN</span>
          </div>
          <div class="about-copy">
            <p class="section-kicker">MEET YA-LUN</p>
            <h2>不像典型政治人物，<br /><em>更像你熟悉的吳姐姐</em></h2>
            <p class="about-lead">
              從證券業與企業管理走進公共服務，亞倫相信政治不必誇大，而是用專業、科學與一次次務實行動，把生活變得更好。
            </p>
            <div class="credential-grid">
              <div><strong>9<span>年</span></strong><small>證券產業歷練</small></div>
              <div><strong>EMBA</strong><small>東吳大學碩士</small></div>
              <div><strong>4<span>區</span></strong><small>深耕土樹三鶯</small></div>
            </div>
            <blockquote>「用雙腳走入基層，用理念贏得市民朋友的託付。」</blockquote>
          </div>
        </div>
      </section>

      <section id="videos" class="section videos-section">
        <div class="section-heading" data-reveal>
          <div>
            <p class="section-kicker">LATEST STORIES</p>
            <h2>一分鐘，看見<br /><em>真實的吳亞倫</em></h2>
          </div>
          <a
            class="button button-ghost"
            href="https://www.youtube.com/@wuyalun1209/shorts"
            target="_blank"
            rel="noopener noreferrer"
          >
            前往 YouTube
          </a>
        </div>

        <div class="video-grid">
          <a
            v-for="(video, index) in videos"
            :key="video.id"
            class="video-card"
            :class="{ featured: index === 0 }"
            :href="`https://www.youtube.com/shorts/${video.id}`"
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            :style="{ '--delay': `${index * 100}ms` }"
          >
            <div class="video-image">
              <img :src="video.thumbnail" :alt="video.title" loading="lazy" />
              <span class="play-button" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="m9 7 8 5-8 5V7Z" /></svg>
              </span>
              <span class="video-category">{{ video.category }}</span>
            </div>
            <div class="video-meta">
              <h3>{{ video.title }}</h3>
              <span>{{ video.viewsLabel }}</span>
            </div>
          </a>
        </div>
      </section>

      <section id="events" class="section events-section">
        <div class="events-layout">
          <div class="events-heading" data-reveal>
            <p class="section-kicker">MEET US</p>
            <h2>下一站，<br /><em>市場見！</em></h2>
            <p>來打聲招呼、聊聊你所在意的地方大小事。每一個聲音，亞倫都想親自聽見。</p>
            <a
              class="text-link large"
              href="https://www.facebook.com/profile.php?id=61584383458056"
              target="_blank"
              rel="noopener noreferrer"
            >
              追蹤最新行程
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>

          <div class="event-list">
            <article v-for="(event, index) in events" :key="event.place" class="event-card" data-reveal :style="{ '--delay': `${index * 110}ms` }">
              <div class="event-date">
                <span>{{ event.month }}</span>
                <strong>{{ event.day }}</strong>
              </div>
              <div class="event-info">
                <span class="event-district">{{ event.district }}・{{ event.weekday }}</span>
                <h3>{{ event.title }}</h3>
                <p>
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>
                  {{ event.place }}・{{ event.time }}
                </p>
              </div>
              <a
                href="https://www.facebook.com/profile.php?id=61584383458056"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="查看活動詳情"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section id="action" class="action-section">
        <div class="action-rings" aria-hidden="true"></div>
        <div class="action-inner">
          <div class="action-copy" data-reveal>
            <p class="section-kicker light">JOIN THE MOVEMENT</p>
            <h2>一個人走得快，<br /><em>一群人走得更遠</em></h2>
            <p>每一份支持，都是讓地方政治向前一步的力量。加入志工、分享理念，或用小額捐款一起完成這場清新的選舉。</p>
            <div class="action-buttons">
              <a
                class="button button-light"
                href="https://line.me/ti/g2/DG8AWz6XYx1T4QOzjQYkduMy-u5ZuerKI6Rb9g"
                target="_blank"
                rel="noopener noreferrer"
              >
                加入志工夥伴
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
              <a
                class="button button-outline-light"
                href="https://donate.tpp.org.tw/support/MGHnhwbm"
                target="_blank"
                rel="noopener noreferrer"
              >
                小額支持
              </a>
            </div>
          </div>
          <div class="action-character" data-reveal>
            <div class="power-word" aria-hidden="true">POWER</div>
            <img :src="character" alt="吳亞倫 Q 版人物舉拳向前" />
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-brand">
        <span class="brand-mark">吳</span>
        <div><strong>吳亞倫・吳姐姐</strong><small>新人新氣象，服務有力量</small></div>
      </div>
      <div class="footer-links">
        <a href="gallery.html">照片牆</a>
        <a href="https://www.facebook.com/profile.php?id=61584383458056" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.youtube.com/@wuyalun1209" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="mailto:tppsanying@gmail.com">聯絡團隊</a>
      </div>
      <p>2026 吳亞倫／吳姐姐競選志工團隊</p>
    </footer>

    <nav class="mobile-actions" aria-label="手機快速行動">
      <a href="#policies">看政見</a>
      <a href="#action">加入我們</a>
      <a href="https://donate.tpp.org.tw/support/MGHnhwbm" target="_blank" rel="noopener noreferrer">小額捐款</a>
    </nav>
  </div>
</template>
