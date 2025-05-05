import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const navSections = [
    {
      title: "EXPLORE",
      links: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/stories", label: "Stories" },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        { href: "/self-help", label: "Self-Help" },
        { href: "/check-ups", label: "Mental Health Check-Ups" },
        { href: "/support", label: "Find Support" },
      ],
    },
    {
      title: "LEGAL",
      links: [
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
        { href: "#", label: "Cookie Policy" },
      ],
    },
  ];

  const socialLinks = [
    { href: "#", label: "Facebook", icon: Facebook },
    { href: "#", label: "Instagram", icon: Instagram },
    { href: "#", label: "Twitter", icon: Twitter },
    { href: "#", label: "LinkedIn", icon: Linkedin },
  ];

  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Intro */}
          <div>
            <h3 className="text-lg font-bold mb-4">LIFE UPSIDE VIEW</h3>
            <p className="text-muted-foreground">
              Sharing real stories, offering resources, and providing support to help you navigate life's challenges.
            </p>
          </div>

          {/* Navigation Links */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONNECT WITH US</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <p className="text-muted-foreground">
              Join our community. Subscribe for inspiring stories and mental health insights.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Life Upside View Mental Health Foundation. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Created to inspire, support, and uplift.
          </p>
        </div>
      </div>
    </footer>
  );
}
