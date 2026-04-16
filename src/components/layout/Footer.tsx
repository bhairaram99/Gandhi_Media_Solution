/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const FOOTER_SERVICES = [
  "Branding & Identity",
  "Web Design & Development",
  "Digital Marketing",
  "Mobile App Development",
  "SEO Optimization",
  "Creative Strategy",
];

const INSTAGRAM_IMAGES = [
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop", alt: "Fashion model" },
  { src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=300&h=300&fit=crop", alt: "Laptop code" },
  { src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop", alt: "Team meeting" },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop", alt: "Portrait man" },
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
  return (
    <footer className="gaaga-footer">
      {/* Instagram / Gallery grid - full width */}
      <div className="gaaga-footer-gallery">
        {INSTAGRAM_IMAGES.map((img, i) => (
          <div key={i} className="gaaga-footer-gallery-item">
            <img src={img.src} alt={img.alt} className="gaaga-footer-gallery-img" loading="lazy" />
            {i === 1 && (
              <div className="gaaga-footer-insta-overlay">
                <div className="gaaga-footer-insta-icon" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" width="40" height="40">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5"/>
                    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
                  </svg>
                </div>
                <p className="gaaga-footer-insta-text">Follow Us On Instagram</p>
                <p className="gaaga-footer-insta-handle">@Gaaga</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer columns */}
      <div className="gaaga-footer-columns">
        {/* Col 1: Logo + description */}
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

        {/* Col 2: Contact Us */}
        <div className="gaaga-footer-col">
          <h4 className="gaaga-footer-col-title">Contact Us</h4>
          <address className="gaaga-footer-contact">
            <p>No: 58 A, East Madison Street,<br />Baltimore, MD, USA 4508</p>
            <p>
              <a href="mailto:info@gaaga.com">info@gaaga.com</a>
            </p>
            <p>
              <a href="tel:+14108229999">+1 (410) 822 9999</a>
            </p>
          </address>
        </div>

        {/* Col 3: Services */}
        <div className="gaaga-footer-col">
          <h4 className="gaaga-footer-col-title">Services</h4>
          <ul className="gaaga-footer-links">
            {FOOTER_SERVICES.map((s) => (
              <li key={s}>
                <Link href="/services">{s}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="gaaga-footer-copyright">
        <p>© {new Date().getFullYear()} GaaGa. All rights reserved.</p>
      </div>
    </footer>
  );
}
