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
                <Link href="/services">
                  <span className="gaaga-footer-link-dot" aria-hidden>
                    •
                  </span>
                  <span>{service}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gaaga-footer-copyright">
        <p>
          Copyright <a href="http://we-design-tech.com/">©WedesignTech</a> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
