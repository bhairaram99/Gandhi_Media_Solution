import Container from "@/components/ui/Container";
import type { ContactCtaData } from "@/types";

interface ContactCTAProps {
  cta: ContactCtaData;
}

export default function ContactCTA({ cta }: ContactCTAProps) {
  void cta;

  return (
    <section className="gaaga-energy-banner" aria-label="Case study call to action">
      <Container>
        <div className="gaaga-energy-banner-inner">
          <p className="gaaga-energy-banner-ghost" aria-hidden>
            Case Study
          </p>

          <h2 className="gaaga-energy-banner-title">Get Fresh Energy With New Ideas</h2>

          <a href="#" className="gaaga-know-more gaaga-energy-banner-join" id="cta-join-now">
            <span className="gaaga-know-more-line" aria-hidden />
            <span className="gaaga-know-more-dot" aria-hidden>
              •
            </span>
            Join Now
          </a>
        </div>
      </Container>
    </section>
  );
}
