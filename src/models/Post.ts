import { Category } from '../enums/category.enum'
import { Platform } from '../enums/platform.enum'

export interface Post {
  category: Category
  title: string
  platform: Platform
  date: string
  image: string
  link: string
}