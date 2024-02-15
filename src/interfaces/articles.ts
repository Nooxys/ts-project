// interface Articles {
//   count: number
//   next: string
//   previous: null
//   results: Result[]
// }

interface Result {
  id: number
  title: string
  url: string
  image_url: string
  news_site: string
  summary: string
  published_at: Date | string
  updated_at: Date
  featured: boolean
  launches: Launch[]
  events: string[]
}

export interface Launch {
  launch_id: string
  provider: string
}

export default Result
