/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const FOOTER_SERVICES = [
  "Branding & Identity",
  "Web Design & Development",
  "Mobile App Development",
  "UI & UX Designing",
  "Digital Marketing",
];

const INSTAGRAM_IMAGES = [
  { src: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-2.png", alt: "Gaaga Insta Img 2" },
  { src: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/06/home-one-instagram-1.jpg", alt: "Home one instagram" },
  { src: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-4.png", alt: "Gaaga Insta Img 4" },
  { src: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-5.png", alt: "Gaaga Insta Img 5" },
  { src: "https://gaaga.wpenginepowered.com/wp-content/uploads/2023/05/Gaaga-Insta-Img-1.png", alt: "Gaaga Insta Img 1" },
];

function GaaGaLogo() {
  return (
    <span className="gaaga-logo" aria-label="GaaGa">
      <span className="gaaga-logo-dot" aria-hidden>•</span>
      <span className="gaaga-logo-text">
        Gaa<span className="gaaga-logo-bold">Ga</span>
      </span>
      <span className="gaaga-logo-dot" aria-hidden>•</span>
    </span>
  );
}

export default function Footer() {
  const marqueeImages = [...INSTAGRAM_IMAGES, ...INSTAGRAM_IMAGES];

  return (
    <footer className="gaaga-footer">
      <div className="gaaga-footer-instagram-strip" aria-label="Instagram gallery">
        <div className="gaaga-footer-instagram-intro">
          <p className="gaaga-footer-instagram-subtitle">Follow us on Instagram</p>
          <p className="gaaga-footer-instagram-handle">@gaaga</p>
        </div>

        <div className="gaaga-footer-instagram-marquee">
          <div className="gaaga-footer-instagram-track">
            {marqueeImages.map((img, i) => (
              <a
                key={`${img.src}-${i}`}
                className="gaaga-footer-instagram-item"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="View our Instagram"
              >
                <img src={img.src} alt={img.alt} className="gaaga-footer-instagram-image" loading="lazy" />

                <span className="gaaga-footer-instagram-overlay" aria-hidden>
                  <span className="gaaga-footer-instagram-icon">
                    <i className="wdticon-instagram" />
                  </span>
                  <span className="gaaga-footer-instagram-overlay-subtitle">Follow us on Instagram</span>
                  <span className="gaaga-footer-instagram-overlay-title">@gaaga</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="gaaga-footer-columns">
        <div className="gaaga-footer-col gaaga-footer-col--brand">
          <Link href="/" aria-label="GaaGa home">
            <GaaGaLogo />
          </Link>

          <p className="gaaga-footer-tagline">
            Sodales ut etiam sit amet. Eget nulla facilisi etiam dignissim. Aliquam
            vestibulum morbi blandit cursus risus. Ultrices vitae auctor eu augue ut
            lectus. Ultricies integer quis auctor elit sed vulputate mi sit amet.
          </p>

          <div className="gaaga-footer-subscribe-rail" aria-label="Subscribe">
            <span className="gaaga-footer-subscribe-line" aria-hidden />
            <a href="#" className="gaaga-footer-subscribe-link">
              <span className="gaaga-footer-subscribe-dot" aria-hidden>
                •
              </span>
              <span>Subscribe</span>
            </a>
          </div>
        </div>

        <div className="gaaga-footer-col">
          <h4 className="gaaga-footer-col-title">Contact Us</h4>

          <address className="gaaga-footer-contact">
            <p>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
            <p>
              Phone : <a href="tel:+000123456789">+000 - 123 - 456789</a>
            </p>
            <p>
              Mail : <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <p>Working Hours : 8hrs</p>
          </address>
        </div>

        <div className="gaaga-footer-col">
          <h4 className="gaaga-footer-col-title">Services</h4>

          <ul className="gaaga-footer-links">
            {FOOTER_SERVICES.map((service) => (
              <li key={service}>
                <Link href="/services">{service}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gaaga-footer-bottom">
        <nav className="gaaga-footer-bottom-nav" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <a href="#">Pages</a>
          <a href="#">Portfolio</a>
          <Link href="/services">Services</Link>
        </nav>

        <div className="gaaga-footer-bottom-social" aria-label="Social links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.55c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95V21H9z" />
            </svg>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
              <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V10H8v3h2.4v8h3.1z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <p className="gaaga-footer-bottom-copy">
          Copyright <a href="http://we-design-tech.com/">©WedesignTech</a> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
