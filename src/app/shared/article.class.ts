export interface IArticle {
  image: string,
  title: string,
  text: string,
  type: string,
  date: string,
  descr: {
    text: string,
    title: string,
    list: {
      1: string,
      2: string,
      3: string,
      4: string
    }
  },
  id: number,
  summary: string,
  quote: string
}