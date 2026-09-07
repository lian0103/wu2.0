export const electionDay = {
  date: '2026-11-28',
  dateLabel: '11.28',
  title: '115年地方公職人員選舉',
  sourceUrl: 'https://info.cec.gov.tw/',
}

const taipeiTimeZone = 'Asia/Taipei'
const millisecondsPerDay = 24 * 60 * 60 * 1000

function getCalendarDay(date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: taipeiTimeZone,
  }).formatToParts(date)
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]))
  return Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day))
}

export function getElectionCountdown(referenceDate = new Date()) {
  const [year, month, day] = electionDay.date.split('-').map(Number)
  const electionCalendarDay = Date.UTC(year, month - 1, day)
  const days = Math.round((electionCalendarDay - getCalendarDay(referenceDate)) / millisecondsPerDay)

  if (days > 0) return { state: 'counting', days }
  if (days === 0) return { state: 'today', days: 0 }
  return { state: 'complete', days: 0 }
}
