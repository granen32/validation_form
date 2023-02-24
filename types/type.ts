export type UserStore = {
  isLogin: boolean
  setIsLogin: (b: boolean) => void
}

export type Comment = {
  id: string
  description: string
  date: Date | string
}
