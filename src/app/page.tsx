import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import Faq from "@/components/sections/Faq";
import LogosMarquee from "@/components/sections/LogosMarquee";
import homeData from "@/data/home.json";
import blogData from "@/data/blog.json";
import type { BlogPost, HomeContent } from "@/types";

export default function Home() {
  const home = homeData as HomeContent;
  const posts = blogData.posts as BlogPost[];

  return (
    <>
      <Hero hero={home.hero} features={home.about.features} />
      <Portfolio portfolio={home.portfolio} />
      <Services />
      <LogosMarquee />
      <Faq />
      <Testimonials testimonials={home.testimonials} />
      <ContactCTA cta={home.cta} />
      <BlogPreview posts={posts.slice(0, 2)} />
    </>
  );
}
