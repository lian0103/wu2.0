<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { electionDay, getElectionCountdown } from './election'

const currentTime = ref(new Date())
const countdown = computed(() => getElectionCountdown(currentTime.value))
const accessibleLabel = computed(() => {
  if (countdown.value.state === 'counting') return `距離投票日還有 ${countdown.value.days} 天，投票日 ${electionDay.dateLabel}`
  if (countdown.value.state === 'today') return `今天是投票日，${electionDay.dateLabel}`
  return `${electionDay.dateLabel} 投票已完成`
})

let refreshTimer

onMounted(() => {
  refreshTimer = window.setInterval(() => {
    currentTime.value = new Date()
  }, 60 * 1000)
})

onBeforeUnmount(() => window.clearInterval(refreshTimer))
</script>

<template>
  <aside class="election-countdown" :class="`is-${countdown.state}`" :aria-label="accessibleLabel">
    <span class="election-countdown-date">
      <time :datetime="electionDay.date">{{ electionDay.dateLabel }}</time>
      <small>投票日</small>
    </span>
    <span class="election-countdown-rule" aria-hidden="true"></span>
    <span class="election-countdown-main">
      <small>選戰倒數</small>
      <strong v-if="countdown.state === 'counting'"><b>{{ countdown.days }}</b><em>天</em></strong>
      <strong v-else-if="countdown.state === 'today'" class="is-message">今天投票</strong>
      <strong v-else class="is-message">投票完成</strong>
    </span>
  </aside>
</template>
