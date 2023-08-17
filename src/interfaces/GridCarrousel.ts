export interface IGridCarrouselItem {
  size?: 'big' | 'broad' | 'long'
  image?: string
  alt?: string
  title?: string
  text?: string
  link?: string
  target?: boolean
  hover?: {
    title?: string
    text?: string
  }
}
