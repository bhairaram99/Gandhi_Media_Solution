"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import useScroll from "@/hooks/useScroll";

/* ── Logo ── */
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

/* ── PAGES mega menu (4-column grid as seen on real site) ── */
const PAGES_COLUMNS = [
  {
    heading: "Dark Version",
    links: [
      { label: "Digital Agency", href: "/" },
      { label: "Business Consulting", href: "/" },
      { label: "Creative Portfolio", href: "/" },
      { label: "Service Tab", href: "/" },
      { label: "Minimal Blogs", href: "/" },
      { label: "Portfolio Grid", href: "/" },
      { label: "Service Slider", href: "/" },
    ],
  },
  {
    heading: "RTL Dark Version",
    links: [
      { label: "Digital Agency", href: "/" },
      { label: "Business Consulting", href: "/" },
      { label: "Creative Portfolio", href: "/" },
    ],
  },
  {
    heading: "Light Version",
    links: [
      { label: "Digital Agency", href: "/" },
      { label: "Business Consulting", href: "/" },
      { label: "Creative Portfolio", href: "/" },
      { label: "Service Tab", href: "/" },
      { label: "Minimal Blogs", href: "/" },
      { label: "Portfolio Grid", href: "/" },
      { label: "Service Slider", href: "/" },
    ],
  },
  {
    heading: "RTL Light Version",
    links: [
      { label: "Digital Agency", href: "/" },
      { label: "Business Consulting", href: "/" },
      { label: "Creative Portfolio", href: "/" },
      { label: "Service Tab", href: "/" },
      { label: "Minimal Blogs", href: "/" },
      { label: "Portfolio Grid", href: "/" },
      { label: "Service Slider", href: "/" },
    ],
  },
];

const PAGES_LINKS = [
  { label: "PROCESS", href: "/process" },
  { label: "FAQ", href: "/faq" },
  { label: "PRICING PLAN", href: "/pricing-plan" },
  { label: "OUR TEAM", href: "/our-team" },
  { label: "CAREER", href: "/career" },
  { label: "404 PAGE", href: "/404-page" },
];

const PROJECTS_LINKS = [
  { label: "PROJECTS LISTING", href: "/projects" },
  { label: "PROJECTS DETAIL", href: "/projects" },
];

const SERVICES_LINKS = [
  { label: "SERVICES LISTING", href: "/services" },
  { label: "SERVICE DETAIL", href: "/services" },
];

const BLOG_LINKS = [
  { label: "BLOG LISTING", href: "/blog" },
  { label: "BLOG DETAIL", href: "/blog" },
];

/* ── Dropdown (simple list) ── */
function SimpleDropdown({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="gaaga-nav-dropdown">
      {links.map((l) => (
        <li key={l.label}>
          <Link href={l.href} className="gaaga-nav-dropdown-link">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ── Desktop Mega Dropdown (under main nav) ── */
function MegaDropdown({ columns }: { columns: typeof PAGES_COLUMNS }) {
  return (
    <div className="gaaga-nav-mega">
      <div className="gaaga-nav-mega-grid">
        {columns.map((col) => (
          <div key={col.heading} className="gaaga-nav-mega-column">
            <h5 className="gaaga-nav-mega-heading">
              {col.heading}
              <span className="gaaga-nav-mega-heading-dot" aria-hidden>●</span>
              <span className="gaaga-nav-mega-heading-line" aria-hidden />
            </h5>

            <ul>
              {col.links.map((l) => (
                <li key={`${col.heading}-${l.label}`}>
                  <Link href={l.href} className="gaaga-nav-mega-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Fullscreen right trigger panel (4-column menu) ── */
function SideOverlayMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="gaaga-side-menu-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Site menu overlay">
      <div className="gaaga-side-menu-panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="gaaga-side-menu-close" onClick={onClose} aria-label="Close menu">
          ✕
        </button>

        <div className="gaaga-side-menu-grid">
          {PAGES_COLUMNS.map((col) => (
            <div key={col.heading} className="gaaga-side-menu-column">
              <h5 className="gaaga-side-menu-heading">
                {col.heading}
                <span className="gaaga-side-menu-heading-dot" aria-hidden>●</span>
                <span className="gaaga-side-menu-heading-line" aria-hidden />
              </h5>

              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="gaaga-side-menu-link" onClick={onClose}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Desktop Nav Item ── */
function NavItem({
  label,
  href,
  dropdown,
  megaColumns,
  active,
}: {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
  megaColumns?: typeof PAGES_COLUMNS;
  active?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <li
      ref={ref}
      className={`gaaga-nav-item${open ? " gaaga-nav-item--open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={href} className={`gaaga-nav-link${active ? " is-active" : ""}`}>
        {label}
      </Link>

      {open && megaColumns && <MegaDropdown columns={megaColumns} />}
      {open && dropdown && !megaColumns && <SimpleDropdown links={dropdown} />}
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const scrolled = useScroll(24);
  const pathname = usePathname();

  useEffect(() => {
    if (!sideMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSideMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onEscape);
    };
  }, [sideMenuOpen]);

  return (
    <>
      <header className={`gaaga-header${scrolled ? " gaaga-header--scrolled" : ""}`}>
        <div className="gaaga-header-inner">
          {/* Logo */}
          <Link href="/" aria-label="GaaGa home">
            <GaaGaLogo />
          </Link>

          {/* Desktop Nav */}
          <nav className="gaaga-nav" aria-label="Main navigation">
            <ul className="gaaga-nav-list">
              <NavItem label="HOME" href="/" megaColumns={PAGES_COLUMNS} active={pathname === "/"} />
              <NavItem label="PAGES" href="#" dropdown={PAGES_LINKS} />
              <NavItem label="PROJECTS" href="/projects" dropdown={PROJECTS_LINKS} active={pathname.startsWith("/projects")} />
              <NavItem label="SERVICES" href="/services" dropdown={SERVICES_LINKS} active={pathname.startsWith("/services")} />
              <NavItem label="BLOG" href="/blog" dropdown={BLOG_LINKS} active={pathname.startsWith("/blog")} />
              <li className="gaaga-nav-item">
                <Link href="/contact" className={`gaaga-nav-link${pathname.startsWith("/contact") ? " is-active" : ""}`}>
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>

          {/* Lets Start button */}
          <Link href="/contact" className="gaaga-header-cta">
            <span className="gaaga-header-cta-dot" aria-hidden>•</span> Lets start
          </Link>

          {/* Desktop diagonal trigger */}
          <button
            type="button"
            className="gaaga-side-menu-trigger"
            onClick={() => setSideMenuOpen(true)}
            aria-label="Open full menu"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Mobile trigger */}
          <button
            className="gaaga-mobile-trigger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="gaaga-mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div className="gaaga-mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <button className="gaaga-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>
            <ul className="gaaga-mobile-nav">
              {[
                { label: "Home", href: "/" },
                { label: "Pages", href: "#" },
                { label: "Projects", href: "/projects" },
                { label: "Services", href: "/services" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="gaaga-mobile-link" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {sideMenuOpen && <SideOverlayMenu onClose={() => setSideMenuOpen(false)} />}
    </>
  );
}
