import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import Container from "@/Components/Ui/Container";
import FadeIn from "@/Components/Ui/FadeIn";
import ContactForm from "./ContactForm";
import contactData from "@/data/contact.json";

const infoItems = [
  {
    icon: <Mail className="w-5 h-5 text-primary" />,
    label: "EMAIL",
    value: contactData.email,
    href: `mailto:${contactData.email}`,
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    label: "LOCATION",
    value: contactData.location,
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    label: "GITHUB",
    value: contactData.github,
    href: contactData.githubUrl,
  },
  {
    icon: (
      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LINKEDIN",
    value: contactData.linkedin,
    href: contactData.linkedinUrl,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container className="flex flex-col gap-12">

        <FadeIn>
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-accent text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
              <span className="w-6 h-px bg-accent" />
              Get In Touch
              <span className="w-6 h-px bg-accent" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let&apos;s work together
            </h2>
            <p className="text-para max-w-md">
              I&apos;m open to junior and fresher full stack roles. Send me a message and I&apos;ll get back to you soon.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl border border-white/10 overflow-hidden">

            {/* Left — info */}
            <div className="flex flex-col justify-between gap-8 p-8 bg-white/5">
              <ul className="flex flex-col gap-6">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">{item.icon}</div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-para text-xs font-semibold tracking-widest">{item.label}</span>
                      {item.href ? (
                        <Link
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-white text-sm hover:text-primary transition-colors"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <span className="text-white text-sm">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-para text-sm">Available for work</span>
              </div>
            </div>

            {/* Right — form */}
            <div className="p-8 bg-white/[0.02]">
              <ContactForm />
            </div>

          </div>
        </FadeIn>

      </Container>
    </section>
  );
}
