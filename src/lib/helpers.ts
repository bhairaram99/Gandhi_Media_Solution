import type { Metadata } from "next";
import { DEFAULT_META_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function createPageMetadata(
  title: string,
  description: string = DEFAULT_META_DESCRIPTION,
  pathname = "/",
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${pathname}`,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
  };
}
