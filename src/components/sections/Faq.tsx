"use client";

import Container from "@/components/ui/Container";
import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "How Much Experience Do You Have In This Field?",
    answer:
      "Our digital strategy begins with a deep-dive audit of your current online presence. We analyze competitors, identify gaps, and craft a comprehensive roadmap tailored to your goals and budget. With over 10 years of experience in digital marketing and web development, we bring proven methodologies to every project.",
  },
  {
    question: "What Kind Of Technology Do You Use?",
    answer:
      "We use cutting-edge technologies including React, Next.js, Node.js, and cloud infrastructure from AWS and Google Cloud. Our design stack includes Figma for UX/UI and modern CSS frameworks for pixel-perfect implementations.",
  },
  {
    question: "How Much Do You Charge To Build A Business Website?",
    answer:
      "Project costs vary based on complexity and scope. A standard business website ranges from $5,000–$20,000. We offer flexible packages and can work within your budget to deliver maximum value. Contact us for a free estimate.",
  },
  {
    question: "How Long Does A Typical Project Take?",
    answer:
      "Timeline depends on project complexity. A basic website typically takes 4–6 weeks, while a full digital marketing campaign runs 3–6 months. We provide detailed project timelines at the start of every engagement.",
  },
];

const FAQ_IMAGE = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&h=700&fit=crop";

const TRUSTPILOT_STARS = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&h=700&fit=crop";

function ArrowIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`gaaga-faq-arrow${open ? " gaaga-faq-arrow--open" : ""}`}
      aria-hidden
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="gaaga-faq-section">
      <Container>
        <div className="gaaga-faq-layout">
          {/* Left: Accordion */}
          <div className="gaaga-faq-left">
            <p className="gaaga-faq-eyebrow">
              <span className="gaaga-eyebrow-line" aria-hidden />
              <span className="gaaga-eyebrow-dot" aria-hidden>•</span>
              FAQ's
            </p>
            <div className="gaaga-faq-items">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`gaaga-faq-item${isOpen ? " gaaga-faq-item--open" : ""}`}
                  >
                    <button
                      className="gaaga-faq-trigger"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      id={`faq-q-${index}`}
                    >
                      <span className="gaaga-faq-arrow-wrap" aria-hidden>
                        <svg width="0" height="0" viewBox="0 0 0 0" fill="none" style={{ display: "none" }} />
                        {/* Red play/arrow icon */}
                        <span className={`gaaga-faq-play${isOpen ? " gaaga-faq-play--open" : ""}`}>
                          <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                            <path d="M0 0L10 6L0 12V0Z" fill="#dd4242"/>
                          </svg>
                        </span>
                      </span>
                      <span className="gaaga-faq-question">{item.question}</span>
                    </button>
                    <div
                      className="gaaga-faq-body"
                      style={{ maxHeight: isOpen ? "400px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}
                      role="region"
                      aria-labelledby={`faq-q-${index}`}
                    >
                      <p className="gaaga-faq-answer">{item.answer}</p>
                    </div>
                    <div className="gaaga-faq-divider" aria-hidden />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image with Trustpilot overlay */}
          <div className="gaaga-faq-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FAQ_IMAGE}
              alt="Team working"
              className="gaaga-faq-img"
              loading="lazy"
            />
            {/* Trustpilot badge overlay */}
            <div className="gaaga-faq-trustpilot">
              <div className="gaaga-faq-trustpilot-inner">
                <span className="gaaga-faq-trustpilot-dot" aria-hidden>•</span>
                <span className="gaaga-faq-trustpilot-brand">Trustpilot</span>
                <div className="gaaga-faq-trustpilot-stars" aria-label="4.8 out of 5">
                  {[0,1,2,3,4].map(i => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#dd4242">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="gaaga-faq-trustpilot-count">over 4.8k ratings</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
