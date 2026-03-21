import { Category, IProducts } from "./IProducts";

export interface IPagination {
  isSucess: boolean
  message: string
  status: number
  entities: IProducts[]
  totalCount: number
  pageNumber: number
  pageSize: number
}

export interface IPaginationCategory {
  isSucess: boolean
  message: string
  status: number
  entities: Category[]
  totalCount: number
  pageNumber: number
  pageSize: number
}