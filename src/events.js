const campaignFacebookUrl = 'https://www.facebook.com/profile.php?id=61584383458056'
const eventTimeZone = 'Asia/Taipei'

export const events = [
  {
    id: '2026-09-05-sanxia-market',
    startsAt: '2026-09-05T09:00:00+08:00',
    endsAt: '2026-09-05T11:00:00+08:00',
    title: '好骨力・一起逛市場',
    place: '三峽市場',
    district: '三峽',
    sourceUrl: campaignFacebookUrl,
  },
  {
    id: '2026-09-06-yingge-market',
    startsAt: '2026-09-06T09:00:00+08:00',
    endsAt: '2026-09-06T11:00:00+08:00',
    title: '好骨力・一起逛市場',
    place: '鶯歌市場',
    district: '鶯歌',
    sourceUrl: campaignFacebookUrl,
  },
]

function parseEventDate(event, field = 'startsAt') {
  const date = new Date(event[field])
  if (Number.isNaN(date.getTime())) throw new Error(`Invalid ${field} for event: ${event.id}`)
  return date
}

function formatEvent(event, status) {
  const date = parseEventDate(event)
  const time = new Intl.DateTimeFormat('zh-TW', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: eventTimeZone,
  }).format(date).replace(/^(上午|下午)/, '$1 ')

  return {
    ...event,
    status,
    day: new Intl.DateTimeFormat('en-US', { day: '2-digit', timeZone: eventTimeZone }).format(date),
    month: new Intl.DateTimeFormat('en-US', { month: 'short', timeZone: eventTimeZone }).format(date).toUpperCase(),
    weekday: new Intl.DateTimeFormat('zh-TW', { weekday: 'short', timeZone: eventTimeZone }).format(date),
    time,
  }
}

export function groupEventsByDate(items, referenceDate = new Date()) {
  const now = referenceDate.getTime()
  const sorted = [...items].sort((first, second) => parseEventDate(first) - parseEventDate(second))
  const isUpcoming = (event) => parseEventDate(event, event.endsAt ? 'endsAt' : 'startsAt').getTime() >= now

  return {
    upcoming: sorted.filter(isUpcoming).map((event) => formatEvent(event, 'upcoming')),
    past: sorted.filter((event) => !isUpcoming(event)).reverse().map((event) => formatEvent(event, 'past')),
  }
}
