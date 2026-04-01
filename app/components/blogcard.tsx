import blogCardImage from '../../assets/images/illustration-article.svg'
import type {BlogArticleDto} from '../model/blogArticle'
import type {AuthorDto} from '../model/authors'


type BlogCardParameters = {
   article: BlogArticleDto
   className?: string
}

export default function BlogCard({article, className}: BlogCardParameters) {


    return (
        <div className={`@container box-border  w-80 sm:w-96 ${className || ''}`}>
            <article className="
                      [--cardBaseFont:14px] @sm:[--cardBaseFont:16px]
                      [--cardMetaFont:12px] @sm:[--cardMetaFont:14px]
                      [--cardTitleFont:20px] @sm:[--cardTitleFont:24px]
            
                     p-6 flex flex-col gap-5 
                     text-(length:--cardBaseFont) 
                     rounded-2xl border shadow-[8px_8px_0_0] 
                     bg-theme-white text-theme-lightgray shadow-theme-darkgray
                    ">
                
                    <img src={blogCardImage} alt="" className="rounded-lg"/>
                    <div><span className='p-2  text-(length:--cardMetaFont)  font-extrabold bg-theme-yellow text-theme-darkgray'>{article.category}</span></div>            
                    <p className='text-(length:--cardMetaFont)  '>Published  {new Intl.DateTimeFormat('en-GB', {day: '2-digit', month:'short', year:'numeric'}).format(article.publishDate)}</p>           
                    <h1 className='font-extrabold text-(length:--cardTitleFont) hover:cursor-pointer hover:text-theme-yellow text-theme-darkgray'>{article.title}</h1>
                    <p className='line-clamp-3'>{article.description}</p>             
                    <CardAuthorSummary  author={article.author} />
            </article>
        </div>
    );


}

function CardAuthorSummary({author}: {author:AuthorDto}) {
    return <div className='flex flex-row gap-2 items-center'>
        <img src={author.profilePath} alt={`${author.firstName} ${author.lastName}'s profile picture`}
            className='w-8' />
        <span className='text-(length:--cardMetaFont)  font-extrabold'>{author.firstName} {author.lastName}</span>

    </div>;
}
