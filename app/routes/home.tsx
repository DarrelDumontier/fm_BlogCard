import type { Route } from "./+types/home";
import type { BlogArticleDto } from "~/model/blogArticle";
import { getDefaultArticle } from "~/model/blogArticle";

import BlogCard  from "../components/blogcard";


export  async function loader(args: Route.LoaderArgs): Promise<BlogArticleDto> {
  return getDefaultArticle()

}


export function meta({loaderData}: Route.MetaArgs) {
  return [
    { title: `Frontend Mentor:  Blog Card for ${loaderData.title}` ,},
    { name: "description", content: "For a Frontend Mentor  implements a provided blog card design" },
  ];
}




export default function Home({loaderData}: Route.ComponentProps) {
  return (
    <main className="min-h-screen w-full flex justify-center items-center">
      <BlogCard  article={loaderData}  />

    </main>
  );
}
