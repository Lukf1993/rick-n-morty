export interface ICard {
    id: number
    name: string
    status: string
    species: string
    gender: string
    origin: {
        name: string
        url: string
    }
    location: {
        name: string
        url: string
    }
    image: string
    episode: string[]
    url: string
}

export interface IInfo {
    next: string | null
    prev: string | null
}