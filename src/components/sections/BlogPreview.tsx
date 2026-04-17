import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import type { BlogPost } from "@/types";

interface BlogPreviewProps {
  posts: BlogPost[];
}

const BLOG_DATA = [
  {
    date: "JUNE 22, 2023",
    title: "Creative & smart business ideas",
    excerpt: "Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id...",
    image: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/blog-12.jpg",
    href: "https://gaaga.wpenginepowered.com/creative-smart-business-ideas/",
  },
  {
    date: "JUNE 19, 2023",
    title: "Small ideas make great brands",
    excerpt: "Tempor orci eu lobortis elementum nibh tellus molestie nunc...",
    image: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/blog-3.jpg",
    href: "https://gaaga.wpenginepowered.com/small-ideas-make-great-brands/",
  },
];

function ReadMore({ href }: { href: string }) {
  return (
    <Link href={href} className="gaaga-blog-readmore">
      <span className="gaaga-know-more-dot" aria-hidden>•</span>
      Read More
    </Link>
  );
}

export default function BlogPreview({ posts }: BlogPreviewProps) {
  void posts;

  return (
    <section className="gaaga-blog-section">
      <Container>
        <SectionTitle
          eyebrow="Blog"
          title="Digital World News"
          centered
          className="gaaga-blog-heading"
        />

        <div className="gaaga-blog-grid">
          {BLOG_DATA.map((post, index) => (
            <article key={index} className="gaaga-blog-card">
              <div
                className="gaaga-blog-card-image"
                style={{ backgroundImage: `url(${post.image})` }}
                aria-hidden
              />

              <div className="gaaga-blog-card-body">
                <p className="gaaga-blog-date">{post.date}</p>

                <h3 className="gaaga-blog-title">
                  <Link href={post.href}>{post.title}</Link>
                </h3>

                <p className="gaaga-blog-excerpt">{post.excerpt}</p>

                <ReadMore href={post.href} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
