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

const PROJECTS_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Project Type", href: "/projects" },
  { label: "Project Details", href: "/projects" },
];

const SERVICES_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Service Type", href: "/services" },
  { label: "Service Details", href: "/services" },
];

const BLOG_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "Blog Type", href: "/blog" },
  { label: "Blog Details", href: "/blog" },
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

/* ── Mega Dropdown (4-column PAGES menu) ── */
function MegaDropdown() {
  return (
    <div className="gaaga-nav-mega">
      {PAGES_COLUMNS.map((col) => (
        <div key={col.heading} className="gaaga-nav-mega-col">
          <h5 className="gaaga-nav-mega-heading">
            {col.heading}
            <span className="gaaga-nav-mega-line" aria-hidden />
          </h5>
          <ul>
            {col.links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="gaaga-nav-mega-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ── Desktop Nav Item ── */
function NavItem({
  label,
  href,
  hasCaret,
  mega,
  dropdown,
  active,
}: {
  label: string;
  href: string;
  hasCaret?: boolean;
  mega?: boolean;
  dropdown?: { label: string; href: string }[];
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
        {hasCaret && <span className="gaaga-nav-caret" aria-hidden />}
      </Link>

      {open && mega && <MegaDropdown />}
      {open && dropdown && <SimpleDropdown links={dropdown} />}
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScroll(24);
  const pathname = usePathname();

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
              <NavItem label="HOME" href="/" active={pathname === "/"} />
              <NavItem label="PAGES" href="#" hasCaret mega />
              <NavItem label="PROJECTS" href="/projects" hasCaret dropdown={PROJECTS_LINKS} />
              <NavItem label="SERVICES" href="/services" hasCaret dropdown={SERVICES_LINKS} />
              <NavItem label="BLOG" href="/blog" hasCaret dropdown={BLOG_LINKS} />
              <li className="gaaga-nav-item">
                <Link href="/contact" className="gaaga-nav-link">CONTACT US</Link>
              </li>
            </ul>
          </nav>

          {/* Lets Start button */}
          <Link href="/contact" className="gaaga-header-cta">
            <span className="gaaga-header-cta-dot" aria-hidden>•</span> Lets start
          </Link>

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
    </>
  );
}
