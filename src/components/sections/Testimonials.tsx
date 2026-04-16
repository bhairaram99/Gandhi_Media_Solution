/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useState } from "react";

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Lisha",
    role: "Manager",
    quote:
      "Turpis massa tincidunt dui ut ornare lectus sit. Vitae ultricies leo integer malesuada. Amet massa vitae tortor condimentum. Elementum nibh tellus molestie nunc non blandit massa enim. Varius vel pharetra.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Thomas",
    role: "Designer",
    quote:
      "Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Semper quis lectus nulla at volutpat. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Lobortis elementum.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
  },
];

const BIG_IMAGE = "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=1400&h=700&fit=crop";

// Featured section title ("How We Feel From Our Clients")
const SECTION_HEADING = "How We Feel From Our Clients";

function QuoteIcon() {
  return (
    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" aria-hidden className="gaaga-testimonial-quote-icon">
      <path d="M0 26V15.8C0 13.1 .5 10.5 1.5 8.1 2.5 5.7 4 3.7 5.9 2.1 7.8.5 10 0 12.4 0L13.6 3C11.5 3.6 9.8 4.8 8.5 6.5 7.2 8.2 6.5 10.1 6.4 12.2H12.7V26H0ZM19.3 26V15.8C19.3 13.1 19.8 10.5 20.8 8.1 21.8 5.7 23.3 3.7 25.2 2.1 27.1.5 29.3 0 31.7 0L32.9 3C30.8 3.6 29.1 4.8 27.8 6.5 26.5 8.2 25.8 10.1 25.7 12.2H32V26H19.3Z" fill="currentColor"/>
    </svg>
  );
}

function StarRow() {
  return (
    <div className="gaaga-testimonial-stars" aria-label="5 stars">
      {[0,1,2,3,4].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#dd4242">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const items = testimonials?.length ? testimonials.map((t, i) => ({
    ...t,
    avatar: DEFAULT_TESTIMONIALS[i]?.avatar,
  })) : DEFAULT_TESTIMONIALS;

  return (
    <section className="gaaga-testimonials-section">
      <Container>
        <SectionTitle eyebrow="Client Feedback" title={SECTION_HEADING} centered className="gaaga-testimonials-heading" />

        {/* Two-column testimonial cards */}
        <div className="gaaga-testimonials-grid">
          {items.map((item) => (
            <div key={item.name} className="gaaga-testimonial-card">
              <QuoteIcon />
              <StarRow />
              <p className="gaaga-testimonial-text">{item.quote}</p>
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
                  {" – "}
                  <span>{item.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Big full-width image below the cards */}
      <div className="gaaga-testimonials-big-image">
        <img src={BIG_IMAGE} alt="Team collaboration" className="gaaga-testimonials-big-img" loading="lazy" />
        <div className="gaaga-testimonials-join-card">
          <span className="gaaga-know-more-line" aria-hidden />
          <span className="gaaga-know-more-dot" aria-hidden>•</span>
          Join Now
        </div>
      </div>
    </section>
  );
}
