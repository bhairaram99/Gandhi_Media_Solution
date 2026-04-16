import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import blogData from "@/data/blog.json";
import { createPageMetadata } from "@/lib/helpers";
import type { BlogPost } from "@/types";

export const metadata: Metadata = createPageMetadata("Blog", "Read design and development insights from the team.", "/blog");

export default function BlogPage() {
  const posts = blogData.posts as BlogPost[];

  return (
    <>
      <section className="gms-page-hero">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 className="gms-page-title">Blog</h1>
          <p className="gms-page-copy">Fresh notes on growth design, frontend engineering, and production quality UI systems.</p>
        </Container>
      </section>

      <section className="gms-section bg-[#090d1e]">
        <Container>
          <div className="gms-grid-3">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden p-0" id={post.slug}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={640}
                  height={360}
                  className="h-[220px] w-full object-cover"
                />
                <div className="p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.1em] text-[#959ab0]">{post.date}</p>
                  <h2 className="mb-3 text-[30px] font-semibold leading-[1.12] text-white">{post.title}</h2>
                  <p className="text-[#b9bdcc]">{post.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
