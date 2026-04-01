import type {AuthorDto as AuthorDto} from './authors'


export enum BlogCategoryEnum {
    Learning="Learning",
    News = "News"

}

export type BlogArticleDto = {
    title: string;
    publishDate: Date
    category: BlogCategoryEnum
    description: string
    author: AuthorDto

}



export function getDefaultArticle(): BlogArticleDto {
    //... normally this would accept an id and get a blog from a list , but for the purpose.  of this assignment it gets a single defaut blog. Also normally the profilePath would point to an image in a particualr external profile photo resource

    return  {
        category: BlogCategoryEnum.Learning,
        description: "These languages are the backbone of every website, defining structure, content and presentation.",
        publishDate: new Date(2023, 12, 21),
        title: "HTML & CSS foundations",
        author: {
            id: 1,
            firstName: "Greg",
            lastName: "Hooper",
            profilePath: "/image-avatar.webp"

        }        
    }


}