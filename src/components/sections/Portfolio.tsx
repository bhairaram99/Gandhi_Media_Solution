/* eslint-disable @next/next/no-img-element */

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import type { PortfolioItem } from "@/types";

interface PortfolioProps {
  portfolio: PortfolioItem[];
}

interface TemplatePortfolioItem {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

const topPortfolioItems: TemplatePortfolioItem[] = [
  {
    category: "Digi-Marketing",
    title: "UI & UX Designs",
    excerpt: "Turpis egestas integer eget aliquet nibh praesent. Accumsan lacus vel facilisis volutpat est egestas dui.",
    image: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-portfolio-1.jpg",
    href: "https://gaaga.wpenginepowered.com/listings/ui-ux-designs/",
  },
  {
    category: "Digi-Marketing",
    title: "Global Network",
    excerpt: "Massa eget egestas purus viverra accumsan in nisl nisi. Quis commodo odio aenean urna porttit sed.",
    image: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-portfolio-2.jpg",
    href: "https://gaaga.wpenginepowered.com/listings/global-network/",
  },
  {
    category: "Digi-Marketing",
    title: "Brand Logos",
    excerpt: "Quis commodo odio platea dictumst aenean sed. Massa eget egestas purus viverra accumsan in nisl nisi.",
    image: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-portfolio-listing-images-6.jpg",
    href: "https://gaaga.wpenginepowered.com/listings/brand-logos/",
  },
];

const bottomPortfolioItems: TemplatePortfolioItem[] = [
  {
    category: "Web Development",
    title: "Creative Content",
    excerpt: "Egestas massa eget purus viverra accumsan in nisl nisi. Quis commodo odio aenean fames acsed.",
    image: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-portfolio-listing-images-4.jpg",
    href: "https://gaaga.wpenginepowered.com/listings/creative-content/",
  },
  {
    category: "Web Development",
    title: "Innovative Ideas",
    excerpt: "Diam maecenas ultricies mi eget mauris pharetra et ultrices. A scelerisque purus semper eget duis at tell.",
    image: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-portfolio-listing-images-5-1.jpg",
    href: "https://gaaga.wpenginepowered.com/listings/innovative-ideas/",
  },
];

function PortfolioCard({ item, wide = false }: { item: TemplatePortfolioItem; wide?: boolean }) {
  return (
    <article className={`gms-portfolio-listing-card${wide ? " gms-portfolio-listing-card--wide" : ""}`}>
      <div className="gms-portfolio-listing-image">
        <img src={item.image} alt={item.title} className="gms-portfolio-thumb" loading="lazy" />
        <div className="gms-portfolio-listing-content">
          <p className="gms-portfolio-listing-category">{item.category}</p>
          <h3>
            <a href={item.href} aria-label={item.title}>
              {item.title}
            </a>
          </h3>
          <p className="gms-portfolio-listing-excerpt">{item.excerpt}</p>
          <a className="gms-portfolio-listing-read-more" href={item.href} aria-label={`Read more about ${item.title}`}>
            <span className="line" />
            <span className="dot" />
            Read More
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio({ portfolio }: PortfolioProps) {
  void portfolio;

  return (
    <section id="scroll-down" className="gms-section gms-portfolio-section border-b border-[#20263f]">
      <Container className="gms-portfolio-container">
        <SectionTitle title="Our Project Portfolio" centered className="mb-14" />

        <div className="gms-portfolio-stack">
          <div className="gms-portfolio-row gms-portfolio-row-top">
            <PortfolioCard item={topPortfolioItems[0]} />
            <PortfolioCard item={topPortfolioItems[1]} wide />
            <PortfolioCard item={topPortfolioItems[2]} />
          </div>

          <div className="gms-portfolio-row gms-portfolio-row-bottom">
            <article className="gms-portfolio-all-projects">
              <h3>
                <span className="badge">All</span>
                Projects
              </h3>
              <p>
                Explore our recent work in branding, social media, websites, and marketing campaigns for growing businesses.
              </p>
              <a href="#" aria-label="View all projects">
                <span className="line" />
                <span className="dot">•</span>
                View All
              </a>
            </article>

            <PortfolioCard item={bottomPortfolioItems[0]} />
            <PortfolioCard item={bottomPortfolioItems[1]} />
          </div>
        </div>
      </Container>
    </section>
  );
}
