import Image from "next/image";
import FeatureIcon from "@/components/icons/FeatureIcons";
import Container from "@/components/ui/Container";
import type { AboutFeature, HeroData } from "@/types";

interface HeroProps {
  hero: HeroData;
  features?: AboutFeature[];
}

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
  twitter: "https://www.twitter.com",
  pinterest: "https://www.pinterest.com",
};

function SocialIcon({ kind }: { kind: "facebook" | "instagram" | "twitter" | "pinterest" }) {
  if (kind === "facebook") {
    return (
      <svg viewBox="0 0 25 25" aria-hidden="true" focusable="false">
        <path d="M15,24H9.4v-9.1H5.8V9.5h3.6v-2c0-2.3,0.6-4,1.9-5.1c1.5-1.3,3.9-1.7,7.3-1.2l0.6,0.1v4.9h-3c-0.8,0-1.1,0.2-1.1,1.3v2h4.1l-0.7,5.4H15V24z M10.7,22.7h3v-9.1h3.6l0.3-2.8h-3.9V7.5c0-1.7,0.8-2.6,2.4-2.6h1.7V2.4c-2.7-0.4-4.6,0-5.7,0.9c-1,0.8-1.5,2.2-1.5,4.1v3.3H7.1v2.8h3.6V22.7z" />
      </svg>
    );
  }

  if (kind === "instagram") {
    return (
      <svg viewBox="0 0 25 25" aria-hidden="true" focusable="false">
        <path d="M16.7,23H8.3C4.8,23,2,20.2,2,16.7V8.3C2,4.8,4.8,2,8.3,2h8.4C20.2,2,23,4.8,23,8.3v8.4C23,20.2,20.2,23,16.7,23z M8.3,3.2c-2.8,0-5.1,2.3-5.1,5.1v8.4c0,2.8,2.3,5.1,5.1,5.1h8.4c2.8,0,5.1-2.3,5.1-5.1V8.3c0-2.8-2.3-5.1-5.1-5.1H8.3z" />
        <path d="M12.5,17.5c-2.8,0-5-2.3-5-5s2.3-5,5-5h0c2.8,0,5,2.3,5,5C17.6,15.3,15.3,17.5,12.5,17.5z M12.5,8.6c-2.1,0-3.9,1.7-3.9,3.9s1.7,3.9,3.9,3.9s3.9-1.7,3.9-3.9C16.4,10.4,14.6,8.6,12.5,8.6L12.5,8.6z" />
        <path d="M18.3,7.8c-0.6,0-1-0.5-1-1s0.5-1,1-1s1,0.5,1,1S18.9,7.8,18.3,7.8z" />
      </svg>
    );
  }

  if (kind === "twitter") {
    return (
      <svg viewBox="0 0 25 25" aria-hidden="true" focusable="false">
        <path d="M8.2,20.6c-2.3,0-4.6-0.7-6.6-1.9l-0.1,0l-0.2-0.4l0.1-0.4l0.4-0.2l0.2,0c1.7,0.2,3.3-0.2,4.7-1c-1.4-0.4-2.6-1.5-3.1-3l0-0.1l0-0.2c0-0.2,0.2-0.3,0.3-0.4C2.7,12.1,2,10.7,2,9.2l0-0.1l0.2-0.3l0.4-0.2l0.2,0.1c-0.9-1.4-1-3.4-0.2-4.9l0.1-0.1l0.4-0.4l0.4,0.4c1.9,2.4,4.7,3.9,7.8,4.2c-0.1-1.3,0.4-2.7,1.3-3.7c0.9-0.9,2.1-1.4,3.3-1.5c1.3,0,2.5,0.4,3.4,1.3c0.7-0.2,1.4-0.4,2.1-0.7l0.2,0l0.5-0.1l0.1,0.5c0.2,1.4-0.3,2.9-1.4,3.8c0.1,2.5-0.6,5-1.9,7.1c-1.8,2.8-4.6,4.8-7.9,5.5C10.1,20.5,9.1,20.6,8.2,20.6z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 25 25" aria-hidden="true" focusable="false">
      <path d="M8.2,23.1c-0.3,0-0.6-0.2-0.7-0.6c-0.3-1.4-0.3-2.9,0-4.3c0-0.1,0-0.2,0.1-0.3l1.4-6.1c-0.6-1.4-0.4-3.2,0.5-4.3c0.6-0.8,1.4-1.1,2.3-1c0.5,0.1,0.9,0.3,1.3,0.7c1,1.2,0.4,3-0.2,4.8c-0.1,0.3-0.2,0.6-0.3,0.9c-0.2,0.7,0.2,1.2,0.6,1.4c0.6,0.3,1.6,0.2,2.4-0.9c1-1.5,1.6-4.1,0.8-6c-0.4-1.1-1.3-1.8-2.5-2c-1.8-0.3-3.5,0-4.7,1.1c-1.1,1-1.7,2.3-1.6,3.8l0,0c0,0.7,0.3,1.3,0.7,1.8c0.2,0.3,0.3,0.6,0.2,1L8,14.1c-0.1,0.2-0.3,0.4-0.5,0.5c-0.2,0.1-0.5,0.1-0.7,0c-1-0.4-1.8-1.2-2.2-2.2c-0.1-0.3-0.3-0.7-0.3-1c-0.5-2.3,0-4.5,1.4-6.3C7.4,2.9,9.9,1.8,12.8,1.8c1.2,0,2.4,0.2,3.6,0.7c3.7,1.6,5.1,5.2,3.9,9.8c-0.7,2.6-2.8,4.5-5.2,5c-1.4,0.3-2.6,0-3.5-0.8l-0.5,2c0,0.1-0.1,0.2-0.1,0.3c-0.5,1.4-1.2,2.7-2.2,3.8L8.6,23l-0.3,0.1C8.3,23.1,8.2,23.1,8.2,23.1z" />
    </svg>
  );
}

export default function Hero({ hero, features = [] }: HeroProps) {
  const scrollTarget = hero.scrollTarget ?? "#scroll-down";
  const primaryHref = hero.primaryHref ?? "#";
  const secondaryHref = hero.secondaryHref ?? "https://www.youtube.com/watch?v=PAdBwqza7cE";
  const mainEndsWithA = /\sA$/i.test(hero.titleMain);
  const titleMainLead = mainEndsWithA ? hero.titleMain.replace(/\sA$/i, "") : hero.titleMain;
  const titleMainAccent = mainEndsWithA ? "A" : "";
  const [titleAccentLead = "", ...titleAccentTailParts] = hero.titleAccent.split(" ");
  const titleAccentTail = titleAccentTailParts.join(" ");

  return (
    <section className="gms-hero border-b border-[#20263f]" aria-label="Hero">
      <Container className="gms-hero-shell">
        <div className="gms-hero-grid">
          <div className="gms-hero-content-wrap">
            <div className="gms-hero-social" aria-label="Social links">
              <a href={SOCIAL_LINKS.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
                <SocialIcon kind="facebook" />
              </a>
              <a href={SOCIAL_LINKS.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                <SocialIcon kind="instagram" />
              </a>
              <a href={SOCIAL_LINKS.twitter} aria-label="Twitter" target="_blank" rel="noreferrer">
                <SocialIcon kind="twitter" />
              </a>
              <a href={SOCIAL_LINKS.pinterest} aria-label="Pinterest" target="_blank" rel="noreferrer">
                <SocialIcon kind="pinterest" />
              </a>

              <a href={scrollTarget} className="gms-hero-scroll" aria-label="Scroll down">
                <span>Scroll</span>
                <span className="gms-hero-scroll-icon" aria-hidden>
                  ●
                </span>
              </a>
            </div>

            <div className="gms-hero-content">
              <p className="gms-hero-eyebrow">
                <span className="line" />
                <span className="dot">•</span>
                {hero.eyebrow}
              </p>

              <h1 className="gms-hero-title">
                {titleMainLead} {titleMainAccent ? <span className="gms-highlight">{titleMainAccent}</span> : null}
                <br />
                <span className="gms-highlight">{titleAccentLead}</span> {titleAccentTail} <span className="gms-highlight gms-title-dot">.</span>
              </h1>

              <p className="gms-hero-description">{hero.description}</p>

              <div className="gms-hero-actions">
                <a href={primaryHref} className="primary-link" aria-label={hero.primaryCta}>
                  <span className="line" />
                  <span className="dot">•</span>
                  {hero.primaryCta}
                </a>

                <a href={secondaryHref} className="video-link" aria-label={hero.secondaryCta} target="_blank" rel="noreferrer">
                  <span className="play-icon" aria-hidden>
                    <span className="play-triangle" />
                  </span>
                  {hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>

          <div className="gms-hero-media">
            <Image
              src={hero.image}
              alt="Hero visual"
              width={1024}
              height={898}
              className="hero-image"
              priority
            />
          </div>
        </div>
      </Container>

      {features.length > 0 ? (
        <Container>
          <div className="gms-hero-features" aria-label="Feature highlights">
            {features.map((feature) => (
              <article className="gms-hero-feature" key={feature.title}>
                <span className="feature-icon" aria-hidden>
                  <FeatureIcon title={feature.title} className="gms-feature-svg" />
                </span>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      ) : null}
    </section>
  );
}
