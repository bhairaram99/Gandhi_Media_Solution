"use client";

import Container from "@/components/ui/Container";

const SERVICES = [
  {
    title: "SEO Optimization",
    description:
      "Duis tristique sollicitudin nibh sit amet commodo nulla. Aliquet nec ullamcorper sit amet risus nullam eget felis eget.",
    image: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-1-service-4.jpg",
    href: "https://gaaga.wpenginepowered.com/services/online-advertising/",
  },
  {
    title: "Mobile App Marketing",
    description:
      "Tincidunt vitae semper quis lectus nulla metus aliquam eleifend mi in nulla ut faucibus pulvinar elementum integer.",
    image: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-1-service-3.jpg",
    href: "https://gaaga.wpenginepowered.com/services/startup-marketing/",
  },
  {
    title: "Mobile App Development",
    description:
      "Arcu bibendum at varius vel pharetra vel. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque.",
    image: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-1-service-2.jpg",
    href: "https://gaaga.wpenginepowered.com/services/promotion-marketing/",
  },
  {
    title: "Creative Web Designs",
    description:
      "Pellentesque diam volutpat commodo sed egestas. Mattis ullamcorper velit sed ullamcorper morbi. Quis vel eros donec ac odio.",
    image: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-1-service-1.jpg",
    href: "https://gaaga.wpenginepowered.com/services/marketing-campaign/",
  },
];

function KnowMoreLink({ href }: { href: string }) {
  return (
    <a href={href} className="gaaga-know-more">
      <span className="gaaga-know-more-line" aria-hidden />
      <span className="gaaga-know-more-dot" aria-hidden>•</span>
      Know more
    </a>
  );
}

export default function Services() {
  return (
    <section className="gaaga-services-section" id="services">
      {/* Promotion Title Section */}
      <div className="gaaga-promo-container">
        <Container>
          <h2 className="gaaga-promo-title">
            <span className="gaaga-promo-line">It&apos;s Time To Take Your Digital Marketing</span>

            <span className="gaaga-promo-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/content-image-small-size-4.png"
                alt=""
                className="gaaga-promo-img gaaga-promo-img--rect"
              />
              To The Next Level
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://aimax.wpengine.com/wp-content/uploads/2023/06/group-image.png"
                alt=""
                className="gaaga-promo-img is-circle"
              />
              We Are
            </span>

            <span className="gaaga-promo-line">Always Here To Help You Grow Your</span>

            <span className="gaaga-promo-line">
              Business
              <a href="#" className="gaaga-promo-video-btn" aria-label="Play video">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 9L0 18V0L16 9Z" fill="currentColor" />
                </svg>
              </a>
            </span>
          </h2>
        </Container>
      </div>

      {/* Stats Counter Row */}
      <div className="gaaga-stats-row">
        <Container>
          <div className="gaaga-stats-grid">
            {[
              { number: "10", label: "Years\nExperience" },
              { number: "12+", label: "Advanced\nTools" },
              { number: "52", label: "Clients\nStatsfied" },
              { number: "90", label: "Projects\nCompeleted" },
            ].map((stat) => (
              <div key={stat.label} className="gaaga-stat-item">
                <span className="gaaga-stat-number">{stat.number}</span>
                <span className="gaaga-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Services Section */}
      <div className="gaaga-services-bg">
        <div className="gaaga-services-bg-overlay" aria-hidden />
        <Container>
          <div className="gaaga-services-title">
            <p className="gaaga-services-eyebrow">
              <span className="gaaga-services-eyebrow-line" aria-hidden />
              <span className="gaaga-services-eyebrow-dot" aria-hidden>•</span>
              Services
              <span className="gaaga-services-eyebrow-dot" aria-hidden>•</span>
              <span className="gaaga-services-eyebrow-line" aria-hidden />
            </p>
            <h2 className="gaaga-services-main-title">What We Have to Offer</h2>
          </div>
        </Container>

        {/* 4-column services with hover image reveal */}
        <div className="gaaga-services-grid">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="gaaga-service-col"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.title}
                className="gaaga-service-hover-image"
                loading="lazy"
              />

              <div className="gaaga-service-content">
                <h3 className="gaaga-service-title">{service.title}</h3>
                <p className="gaaga-service-desc">{service.description}</p>
                <KnowMoreLink href={service.href} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
