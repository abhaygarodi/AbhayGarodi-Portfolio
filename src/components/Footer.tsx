import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/abhaygarodi", icon: "code" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abhaygarodi", icon: "group" },
  { label: "LeetCode", href: "https://leetcode.com/u/abhaygarodi18/", icon: "emoji_events" },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/abhayhgarodi365", icon: "terminal" },
  { label: "Email", href: "mailto:abhayhgarodi365@gmail.com", icon: "mail" },
];

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-outline-variant dark:border-[#2a2d2e]">
      <div className="max-w-container-max mx-auto px-5 md:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary dark:bg-primary-fixed flex items-center justify-center">
                <span className="text-on-primary dark:text-primary-container font-bold text-[14px]">
                  AG
                </span>
              </div>
              <div>
                <h3 className="font-headline-sm text-[18px] font-bold text-primary dark:text-primary-fixed">
                  Abhay Garodi
                </h3>
              </div>
            </div>
            <p className="font-body-md text-[14px] text-on-surface-variant dark:text-[#7a7d7e] max-w-xs">
              Software Developer at Ravulapati TecHub, building ImpactSuite.AI.
              Engineering scalable systems with precision and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-label-caps text-label-caps text-primary dark:text-primary-fixed tracking-widest mb-4">
              NAVIGATION
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-on-surface-variant dark:text-[#7a7d7e] hover:text-primary dark:hover:text-primary-fixed transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-label-caps text-label-caps text-primary dark:text-primary-fixed tracking-widest mb-4">
              CONNECT
            </h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-[14px] text-on-surface-variant dark:text-[#7a7d7e] hover:text-primary dark:hover:text-primary-fixed transition-colors w-fit"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {link.icon}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="section-divider mb-6"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="font-code-sm text-[12px] text-on-surface-variant dark:text-[#5a5d5e]">
            © {new Date().getFullYear()} Abhay Garodi. Crafted with precision.
          </div>
          <div className="flex items-center gap-2 font-code-sm text-[12px] text-on-surface-variant dark:text-[#5a5d5e]">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}