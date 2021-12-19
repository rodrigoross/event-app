// Centraliza onde todos os tipos de objetos serão usados no projeto.

export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}

type TaskType = 'personal' | 'work' | 'miscellaneos'

export interface TodoItem {
  label: string
  type: TaskType
  isComplete: boolean
}
