export interface EventItem {
  id: number
  title: string
  description?: string
  startDate: string
  endDate?: string
  location?: string
  status: 'upcoming' | 'completed' | 'cancelled'
}