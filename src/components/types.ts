export type LoginDetails = {
  email: string
  password: string
}

export type SignupDetails = LoginDetails & {
  name: string
}

export type BlogData = {
  title: string
  body: string
}

type Post = {
  body: string
  id: number
  title: string
  userId: number
}

export type AllBlogPosts = BlogData & Post

export type BlogDetails = {
  id: string
  title: string
  body: string
}
