/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

const WP_TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Lisha",
    role: "Manager",
    quote:
      "Turpis massa tincidunt dui ut ornare lectus sit. Vitae ultricies leo integer malesuada. Amet massa vitae tortor condimentum. Elementum nibh tellus molestie nunc non blandit massa enim. Varius vel pharetra.",
    avatar: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-testimonial-4.png",
  },
  {
    name: "Thomas",
    role: "Designer",
    quote:
      "Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Semper quis lectus nulla at volutpat. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Lobortis elementum.",
    avatar: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-testimonial-1.png",
  },
];

const SECTION_HEADING = "How We Feel From Our Clients";

export default function Testimonials({ testimonials }: TestimonialsProps) {
  void testimonials;

  const items = WP_TESTIMONIALS;

  return (
    <section className="gaaga-testimonials-section">
      <Container>
        <SectionTitle eyebrow="Client Feedback" title={SECTION_HEADING} centered className="gaaga-testimonials-heading" />

        <div className="gaaga-testimonials-grid">
          {items.map((item) => (
            <div key={item.name} className="gaaga-testimonial-card">
              <div className="gaaga-testimonial-detail">
                <span className="gaaga-testimonial-quote-icon" aria-hidden>
                  ❝
                </span>
                <p className="gaaga-testimonial-text">{item.quote}</p>
              </div>

              <div className="gaaga-testimonial-meta">
                <div className="gaaga-testimonial-author">
                  {item.avatar && (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="gaaga-testimonial-avatar"
                      loading="lazy"
                    />
                  )}

                  <p className="gaaga-testimonial-name">
                    <span className="gaaga-testimonial-name-accent">{item.name}</span>
                    <span className="gaaga-testimonial-name-divider" aria-hidden>
                      —
                    </span>
                    <span>{item.role}</span>
                  </p>
                </div>

                <ul className="gaaga-testimonial-stars" aria-label="Rated three out of five stars">
                  {[0, 1, 2, 3, 4].map((starIndex) => (
                    <li
                      key={`${item.name}-${starIndex}`}
                      className={starIndex < 3 ? "is-filled" : "is-empty"}
                      aria-hidden
                    >
                      ★
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
