"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/helpers";
import type { NavItem } from "@/types";

interface NavbarProps {
  items: NavItem[];
  className?: string;
}

function getMobileLikeChildren(item: NavItem) {
  if (item.children?.length) {
    return item.children;
  }

  if (item.megaMenu?.length) {
    return item.megaMenu.flatMap((column) => column.links);
  }

  return [];
}

function itemIsActive(item: NavItem, pathname: string): boolean {
  const localMatch =
    item.href.startsWith("/") &&
    (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)));

  if (localMatch) {
    return true;
  }

  return getMobileLikeChildren(item).some((child) => itemIsActive(child, pathname));
}

function hasSubmenu(item: NavItem) {
  return Boolean(item.children?.length || item.megaMenu?.length);
}

function DropdownBranch({ item, pathname }: { item: NavItem; pathname: string }) {
  const children = getMobileLikeChildren(item);
  const active = itemIsActive(item, pathname);

  return (
    <li className={cn("gms-nav-dropdown-item", children.length > 0 && "gms-nav-dropdown-item--has-children")}>
      <Link href={item.href} className={cn("gms-nav-dropdown-link", active && "is-active")}>
        <span>{item.label}</span>
        {children.length > 0 ? <span className="gms-nav-sub-arrow" aria-hidden="true" /> : null}
      </Link>

      {children.length > 0 ? (
        <ul className="gms-nav-dropdown gms-nav-dropdown--nested">
          {children.map((child) => (
            <DropdownBranch key={`${item.label}-${child.label}-${child.href}`} item={child} pathname={pathname} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function Navbar({ items, className }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("hidden xl:block", className)} aria-label="Main Navigation">
      <ul className="gms-nav-list">
        {items.map((item) => (
          <li
            key={item.label}
            className={cn(
              "gms-nav-item",
              hasSubmenu(item) && "gms-nav-item--has-children",
              Boolean(item.megaMenu?.length) && "gms-nav-item--mega",
            )}
          >
            <Link
              href={item.href}
              className={cn(
                "gms-nav-link",
                itemIsActive(item, pathname) && "is-active",
              )}
            >
              <span>{item.label}</span>
              {hasSubmenu(item) ? <span className="gms-nav-caret" aria-hidden="true" /> : null}
            </Link>

            {item.megaMenu?.length ? (
              <div className="gms-nav-mega-panel">
                <div className="gms-nav-mega-grid">
                  {item.megaMenu.map((column) => (
                    <div className="gms-nav-mega-column" key={`${item.label}-${column.heading}`}>
                      <h4>{column.heading}</h4>
                      <ul>
                        {column.links.map((link) => (
                          <li key={`${column.heading}-${link.label}`}>
                            <Link
                              href={link.href}
                              className={cn(
                                "gms-nav-dropdown-link",
                                itemIsActive(link, pathname) && "is-active",
                              )}
                            >
                              <span>{link.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {item.children?.length ? (
              <ul className="gms-nav-dropdown">
                {item.children.map((child) => (
                  <DropdownBranch
                    key={`${item.label}-${child.label}-${child.href}`}
                    item={child}
                    pathname={pathname}
                  />
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
