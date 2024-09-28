interface Bread {
    calories: number
}

interface Bread {
    type: string
}

const francePan: Bread = {
    calories: 300,
    type: 'hard'
}

// 型エイリアスで表現
type MaboDofu = {
    calories: number
    spicyLevel: number
}

type Rice = {
    calories: number
    gram: number
}

type MaboDon = MaboDofu & Rice

const maboDon: MaboDon = {
    calories: 500,
    spicyLevel: 19,
    gram: 360
}

interface Book {
    page: number
    title: string
}

interface Magazine extends Book {
    cycle : 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
    page: 300,
    title: "ジャンプ",
    cycle: 'weekly'
}

type  BookType = {
    page: number
    title: string
}

interface Handbook extends BookType {
    theme: string
}

const cotrip: Handbook = {
    page: 120,
    title: 'ことりっぷ',
    theme: "旅行"
}

class Comic implements Book {
    page: number
    title: string

    constructor(page: number, title: string, private publishYear: string) {
        this.page = page
        this.title = title
    }

    getPublishYear() {
        return this.title + "が発売されたのは" + this.publishYear + "年です"
    }
}

const popularComic = new Comic(200, "ワンピース", "1882")
console.log(popularComic.getPublishYear());

