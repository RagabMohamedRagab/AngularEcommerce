export interface IProducts {
  id: number
  name: string
  description: string
  oldPrice: number
  newPrice: number
  quantity: number
  productPhotos: ProductPhoto[]
  category: Category
}

export interface ProductPhoto {
  imageName: string
  productId: number
}

export interface Category {
  id:number,
  name: string
  description: string
}
