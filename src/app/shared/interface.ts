export interface ICartItem {
  product: IProduct,
  quantity: number;
}

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

export interface IArticleCard {
  image: string,
  title: string,
  text: string,
  author: string
}

export interface IProduct {
  id: number,
  title: string,
  image: string,
  price: number,
  descr: string,
  type: string,
  publisher: string,
  text: string,
  isbn: number,
  language: string,
  paperback: string,
  dimensions: string
}

export interface IReviewCard {
  image: string,
  name: string,
  title: string,
  text: string,
  rating: boolean[]
}