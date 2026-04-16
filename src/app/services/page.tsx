import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Services from "@/components/sections/Services";
import ContactCTA from "@/components/sections/ContactCTA";
import Container from "@/components/ui/Container";
import servicesData from "@/data/services.json";
import homeData from "@/data/home.json";
import { createPageMetadata } from "@/lib/helpers";
import type { HomeContent, ServiceItem } from "@/types";

export const metadata: Metadata = createPageMetadata("Services", "Explore all digital services and delivery capabilities.", "/services");

export default function ServicesPage() {
  const services = servicesData.items as ServiceItem[];
  const home = homeData as HomeContent;

  return (
    <>
      <section className="gms-page-hero">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <h1 className="gms-page-title">Services</h1>
          <p className="gms-page-copy">From brand strategy to app engineering, our services are designed for measurable growth and premium user experience.</p>
        </Container>
      </section>

      <Services services={services} heading={servicesData.intro} />
      <ContactCTA cta={home.cta} />
    </>
  );
}
