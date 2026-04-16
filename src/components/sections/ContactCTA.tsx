import Container from "@/components/ui/Container";
import type { ContactCtaData } from "@/types";

interface ContactCTAProps {
  cta: ContactCtaData;
}

export default function ContactCTA({ cta }: ContactCTAProps) {
  return (
    <section className="gms-cta-section">
      {/* Background dark overlay with subtle gradient */}
      <div className="gms-cta-bg" aria-hidden />

      <Container>
        <div className="gms-cta-inner">
          <p className="gms-section-eyebrow" style={{ justifyContent: "center" }}>
            Contact Us
          </p>
          <h2 className="gms-cta-title">{cta.title}</h2>
          <p className="gms-cta-description">{cta.description}</p>
          <a href="/contact" className="gms-cta-button" id="cta-start-project">
            {cta.primaryCta}
          </a>
        </div>
      </Container>
    </section>
  );
}
