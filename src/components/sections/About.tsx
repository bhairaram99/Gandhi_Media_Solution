import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import type { AboutData } from "@/types";

interface AboutProps {
  about: AboutData;
}

export default function About({ about }: AboutProps) {
  return (
    <section className="gms-section border-b border-[#20263f] bg-[#111319]">
      <Container>
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-end">
          <SectionTitle eyebrow={about.eyebrow} title={about.title} />
          <p className="text-[17px] leading-8 text-[#b9bdcc]">{about.description}</p>
        </div>

        <div className="gms-grid-3">
          {about.features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="mb-3 text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="text-[#b7bdd2]">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
