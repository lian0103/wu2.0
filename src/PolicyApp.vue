<script setup>
import { computed, onMounted } from 'vue'
import character from './assets/人物_1.webp'
import { getPolicy, policies } from './policies'

const requestedSlug = new URLSearchParams(window.location.search).get('id')
const policy = getPolicy(requestedSlug)
const currentIndex = policies.findIndex((item) => item.slug === policy.slug)
const nextPolicy = computed(() => policies[(currentIndex + 1) % policies.length])

onMounted(() => {
  document.title = `${policy.short}｜${policy.title.replace('\n', '・')}｜吳亞倫・吳姐姐`
  const description = document.querySelector('meta[name="description"]')
  description?.setAttribute('content', policy.description)
})
</script>

<template>
  <div class="policy-page" :class="`policy-theme-${policy.tone}`">
    <a class="skip-link" href="#policy-main">跳至主要內容</a>

    <header class="policy-header">
      <a class="brand" href="./" aria-label="回到吳亞倫首頁">
        <span class="brand-mark">吳</span>
        <span class="brand-copy">
          <strong>吳亞倫</strong>
          <small>吳姐姐</small>
        </span>
      </a>
      <nav aria-label="政見頁導覽">
        <a href="./#policies">四大政見</a>
        <a class="policy-header-action" href="./#action">加入我們</a>
      </nav>
    </header>

    <main id="policy-main">
      <section class="policy-hero">
        <div class="policy-hero-grid" aria-hidden="true"></div>
        <div class="policy-hero-inner">
          <div class="policy-hero-copy">
            <a class="policy-back" href="./#policies">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6" /></svg>
              回到四大政見
            </a>
            <p class="policy-count">POLICY {{ policy.id }} / 04</p>
            <span class="policy-label">{{ policy.short }}</span>
            <h1>{{ policy.title }}</h1>
            <p class="policy-statement">{{ policy.statement }}</p>
          </div>

          <div class="policy-hero-symbol" aria-hidden="true">
            <span>{{ policy.id }}</span>
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
      </section>

      <section class="policy-overview" aria-labelledby="overview-title">
        <div class="policy-section-heading">
          <span>WHY IT MATTERS</span>
          <h2 id="overview-title">從每天遇到的困難開始</h2>
        </div>
        <div class="policy-overview-grid">
          <article>
            <span class="overview-index">01</span>
            <h3>市民的困擾</h3>
            <p>{{ policy.challenge }}</p>
          </article>
          <article class="is-accent">
            <span class="overview-index">02</span>
            <h3>亞倫的主張</h3>
            <p>{{ policy.proposal }}</p>
          </article>
        </div>
      </section>

      <section class="policy-actions" aria-labelledby="actions-title">
        <div class="policy-section-heading is-light">
          <span>WHAT WE CAN DO</span>
          <h2 id="actions-title">市議員能推動的三件事</h2>
          <p>透過預算審查、政策提案與市政監督，把主張落實成可以追蹤的行動。</p>
        </div>
        <div class="policy-action-list">
          <article v-for="(action, index) in policy.actions" :key="action[0]">
            <span>0{{ index + 1 }}</span>
            <div>
              <h3>{{ action[0] }}</h3>
              <p>{{ action[1] }}</p>
            </div>
          </article>
        </div>
      </section>

      <section class="policy-outcomes" aria-labelledby="outcomes-title">
        <div class="policy-section-heading">
          <span>THE CHANGE</span>
          <h2 id="outcomes-title">希望帶來的改變</h2>
        </div>
        <div class="outcome-list">
          <div v-for="(outcome, index) in policy.outcomes" :key="outcome">
            <strong>{{ index + 1 }}</strong>
            <p>{{ outcome }}</p>
          </div>
        </div>
      </section>

      <section class="policy-next">
        <div class="policy-next-copy">
          <p>NEXT POLICY</p>
          <span>{{ nextPolicy.short }}</span>
          <h2>{{ nextPolicy.title }}</h2>
          <a class="button button-light" :href="`policy.html?id=${nextPolicy.slug}`">
            看下一項政見
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
        <img :src="character" alt="" />
      </section>
    </main>

    <footer class="policy-footer">
      <a href="./">吳亞倫・吳姐姐</a>
      <span>新人新氣象，服務有力量</span>
    </footer>

    <nav class="mobile-actions" aria-label="手機快速行動">
      <a href="./#policies">四大政見</a>
      <a href="./#action">加入我們</a>
      <a href="https://donate.tpp.org.tw/support/MGHnhwbm" target="_blank" rel="noopener noreferrer">小額捐款</a>
    </nav>
  </div>
</template>
