import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import About from "@/components/sections/About";
import ContactCTA from "@/components/sections/ContactCTA";
import Container from "@/components/ui/Container";
import homeData from "@/data/home.json";
import { createPageMetadata } from "@/lib/helpers";
import type { HomeContent } from "@/types";

export const metadata: Metadata = createPageMetadata("About", "Learn about the GaaGa-inspired digital team and process.", "/about");

export default function AboutPage() {
  const home = homeData as HomeContent;

  return (
    <>
      <section className="gms-page-hero">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="gms-page-title">About Us</h1>
          <p className="gms-page-copy">We design and build digital experiences that combine conversion-driven UX, premium visuals, and scalable engineering practices.</p>
        </Container>
      </section>

      <About about={home.about} />
      <ContactCTA cta={home.cta} />
    </>
  );
}
