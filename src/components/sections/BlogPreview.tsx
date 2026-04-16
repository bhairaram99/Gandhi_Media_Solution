/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import type { BlogPost } from "@/types";

interface BlogPreviewProps {
  posts: BlogPost[];
}

// Use real Gaaga-style images but reliable alternates
const BLOG_DATA = [
  {
    date: "JUNE 22, 2023",
    title: "Creative & smart business ideas",
    excerpt: "Phasellus faucibus scelerisque eleifend donec. Sit amet aliquam id...",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=450&fit=crop",
    href: "/blog",
  },
  {
    date: "JUNE 19, 2023",
    title: "Small ideas make great brands",
    excerpt: "Tempor orci eu lobortis elementum nibh tellus molestie nunc...",
    image: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=400&h=450&fit=crop",
    href: "/blog",
  },
  {
    date: "JUNE 15, 2023",
    title: "Digital marketing next level",
    excerpt: "Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam...",
    image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=400&h=450&fit=crop",
    href: "/blog",
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
              {/* Image on left, content on right */}
              <div className="gaaga-blog-card-image">
                <img src={post.image} alt={post.title} className="gaaga-blog-img" loading="lazy" />
              </div>
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
