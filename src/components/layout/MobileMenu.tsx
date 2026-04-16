"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  open: boolean;
  items: NavItem[];
  onClose: () => void;
}

function getChildren(item: NavItem): NavItem[] {
  if (item.children?.length) {
    return item.children;
  }

  if (item.megaMenu?.length) {
    return item.megaMenu.map((column) => ({
      label: column.heading,
      href: "#",
      children: column.links,
    }));
  }

  return [];
}

export default function MobileMenu({ open, items, onClose }: MobileMenuProps) {
  const [trail, setTrail] = useState<number[]>([]);
  const closeMenu = () => {
    setTrail([]);
    onClose();
  };

  const { currentItems, currentParent } = useMemo(() => {
    let nextItems = items;
    let parent: NavItem | null = null;

    for (const idx of trail) {
      parent = nextItems[idx] ?? null;
      nextItems = parent ? getChildren(parent) : [];
    }

    return {
      currentItems: nextItems,
      currentParent: parent,
    };
  }, [items, trail]);

  return (
    <div className={`gms-mobile-nav xl:hidden ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <button
        className="gms-mobile-nav-overlay"
        onClick={closeMenu}
        aria-label="Close mobile menu"
      />

      <aside className="gms-mobile-nav-panel">
        <div className="gms-mobile-nav-header">
          {trail.length > 0 ? (
            <button
              type="button"
              className="gms-mobile-nav-back"
              onClick={() => setTrail((prev) => prev.slice(0, -1))}
            >
              Back
            </button>
          ) : (
            <span className="gms-mobile-nav-back">Menu</span>
          )}

          <button
            type="button"
            className="gms-mobile-nav-close"
            onClick={closeMenu}
            aria-label="Close menu"
          />
        </div>

        <p className="gms-mobile-nav-title">{currentParent?.label ?? "Navigation"}</p>

        <ul className="gms-mobile-nav-list">
          {currentParent && currentParent.href !== "#" ? (
            <li className="gms-mobile-nav-see-all">
              <Link href={currentParent.href} onClick={closeMenu} className="gms-mobile-nav-link">
                See all {currentParent.label}
              </Link>
            </li>
          ) : null}

          {currentItems.map((item, index) => {
            const childItems = getChildren(item);
            const hasChildren = childItems.length > 0;

            return (
              <li key={`${item.label}-${item.href}`}>
                {hasChildren ? (
                  <button
                    type="button"
                    className="gms-mobile-nav-item"
                    onClick={() => setTrail((prev) => [...prev, index])}
                  >
                    <span>{item.label}</span>
                    <span className="gms-mobile-nav-arrow" aria-hidden="true" />
                  </button>
                ) : (
                  <Link href={item.href} onClick={closeMenu} className="gms-mobile-nav-link">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}
