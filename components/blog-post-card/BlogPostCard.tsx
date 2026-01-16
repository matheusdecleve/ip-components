import Image from "next/image";
import Link from "next/link";
import { BlogPostCardProps } from "./types";

export function BlogPostCard({ posts }: BlogPostCardProps) {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 padding-section">
      {posts.map((post) => (
        <article key={post.id}>
          <Image src={post.image} alt={post.imageAlt} width={400} height={288} className="w-full h-72 object-cover block mb-6 bg-[#DADADA]" />

          <span className="flex max-w-fit py-1 px-2 mb-4 text-sm bg-[#f0f0f0]">{post.category}</span>

          <h2 className="!text-[32px]/10 mt-4 mb-2">{post.title}</h2>

          <p className="text-base mb-4">{post.excerpt}</p>

          <Link href={post.href} className="text-sm text-primary flex items-center gap-x-2">
            Ler mais
            <Image src="/images/icons/arrow-right.svg" alt="Ícone de seta" width={8} height={8} />
          </Link>
        </article>
      ))}
    </div>
  );
}
