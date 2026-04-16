import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Container from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/helpers";

export const metadata: Metadata = createPageMetadata("Contact", "Contact the team and start your project consultation.", "/contact");

export default function ContactPage() {
  return (
    <>
      <section className="gms-page-hero">
        <Container>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="gms-page-title">Contact Us</h1>
          <p className="gms-page-copy">Tell us about your project goals and timeline. We’ll get back with a focused plan.</p>
        </Container>
      </section>

      <section className="gms-section bg-[#0b1022]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="mb-4 text-4xl font-semibold text-white">Let’s start your project</h2>
              <p className="text-[#b9bdcc]">Use this form to send your requirements. This UI is ready for API integration in the next step.</p>
            </div>

            <form className="gms-card space-y-4">
              <div className="gms-grid-2">
                <label>
                  <span className="mb-1 block text-sm text-[#9ca2ba]">Name</span>
                  <input type="text" name="name" placeholder="Your name" required />
                </label>

                <label>
                  <span className="mb-1 block text-sm text-[#9ca2ba]">Email</span>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </label>
              </div>

              <label>
                <span className="mb-1 block text-sm text-[#9ca2ba]">Subject</span>
                <input type="text" name="subject" placeholder="Project subject" required />
              </label>

              <label>
                <span className="mb-1 block text-sm text-[#9ca2ba]">Message</span>
                <textarea name="message" rows={6} placeholder="Tell us what you want to build..." required />
              </label>

              <button type="submit" className="gms-btn gms-btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
