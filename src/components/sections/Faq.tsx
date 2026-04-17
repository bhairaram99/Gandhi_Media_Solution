"use client";

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

const FAQ_IMAGE = "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/Gaaga-Home-1-Faq-Bg-Img-Ps.png";
const FAQ_ROTATE_WIDGET_IMAGE =
  "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/Gaaga-Faq-Rotate-Widget-Large-Img.png";

function RotatingConnectWidget() {
  return (
    <div
      className="pointer-events-none absolute left-[54.5%] top-0 z-[5] grid h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 place-items-center max-[1024px]:left-1/2 max-[1024px]:h-[150px] max-[1024px]:w-[150px] max-[767px]:h-[126px] max-[767px]:w-[126px]"
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={FAQ_ROTATE_WIDGET_IMAGE}
        alt=""
        className="h-[148px] w-[148px] animate-[gaaga-rotate_12s_linear_infinite] object-contain select-none max-[1024px]:h-[122px] max-[1024px]:w-[122px] max-[767px]:h-[102px] max-[767px]:w-[102px]"
      />
      <span className="absolute text-[44px] leading-none text-[#dd4242] max-[767px]:text-[32px]">✳</span>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="gaaga-faq-section relative w-full overflow-visible bg-[#111319]">
      <RotatingConnectWidget />

      <div className="gaaga-faq-layout grid grid-cols-[minmax(0,55fr)_minmax(0,45fr)] items-stretch gap-0 max-[1024px]:grid-cols-1">
        {/* Left: Accordion */}
        <div className="gaaga-faq-left lg:relative lg:z-[3] lg:-mr-[58px]">
          <p className="gaaga-faq-eyebrow">
            <span className="gaaga-eyebrow-line" aria-hidden />
            <span className="gaaga-eyebrow-dot" aria-hidden>•</span>
            FAQ&apos;s
          </p>
          <h2 className="gaaga-faq-heading">Our Expert Answers</h2>

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
                    <span className="gaaga-faq-play" aria-hidden>
                      ▶
                    </span>
                    <span className="gaaga-faq-question">{item.question}</span>
                  </button>

                  <div
                    className="gaaga-faq-body"
                    style={{ maxHeight: isOpen ? "340px" : "0" }}
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

        {/* Right: Full-height image */}
        <div className="gaaga-faq-right lg:relative lg:z-[1]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FAQ_IMAGE}
            alt="Professionals in office"
            className="gaaga-faq-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
