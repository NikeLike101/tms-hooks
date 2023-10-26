


export type Film = {
    label: string
    year: number
    rating: number
    isLiked: boolean
    comments: Comment[]
}

export type Comment = {
    postId: number,
    id: number
    name: string
    email: string
    body: string
}