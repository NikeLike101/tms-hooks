export type User = {
    login: string
    passwordHash: string
    sessionStartDate: number
}

export type BlogUser = {
    id: number
    name: string
    website: string
    company: CompanyType
}

type CompanyType = {
    name: string
    catchPhrase: string
    bs: string
}

export type BlogPost = {
    userId: number
    id: number
    title: string
    body: string
}

export type PostComment = {
    postId: number
    id: number
    name: string
    body: string
    email: string
}