"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const sidebarLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/projects", label: "Projects", icon: "rocket_launch" },
  { href: "/about", label: "About", icon: "person" },
  { href: "/#contact", label: "Contact", icon: "mail" },
];

const socialLinks = [
  {
    href: "https://github.com/abhaygarodi",
    label: "GitHub",
    icon: "code",
  },
  {
    href: "https://linkedin.com/in/abhaygarodi",
    label: "LinkedIn",
    icon: "group",
  },
  {
    href: "https://leetcode.com/u/abhaygarodi18/",
    label: "LeetCode",
    icon: "emoji_events",
  },
  {
    href: "https://www.hackerrank.com/profile/abhayhgarodi365",
    label: "HackerRank",
    icon: "terminal",
  },
];

export default function SideNavBar() {
  const pathname = usePathname();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav
      className="hidden lg:flex fixed left-0 top-0 h-full w-64 flex-col border-r border-outline-variant dark:border-[#2a2d2e] bg-surface-container-low/95 dark:bg-[#0d0f10]/95 backdrop-blur-[16px] py-8 gap-6 z-40"
      aria-label="Main navigation"
    >
      {/* Profile */}
      <div className="px-6 flex flex-col gap-3">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 dark:from-secondary/30 dark:to-secondary/10 border border-outline-variant dark:border-[#2a2d2e] flex items-center justify-center">
          <span className="font-display-lg-mobile text-[24px] font-bold text-primary dark:text-primary-fixed">
            AG
          </span>
        </div>
        <div>
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">
            Abhay Garodi
          </h2>
          <p className="font-body-md text-[14px] text-on-surface-variant dark:text-[#9a9d9e] mt-0.5">
            Software Developer @ Ravulapati TecHub
          </p>
          <p className="font-code-sm text-[11px] text-secondary/70 dark:text-secondary-fixed-dim/70 mt-0.5">
            Building ImpactSuite.AI
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow"></span>
          <span className="font-label-caps text-[10px] tracking-widest text-secondary dark:text-secondary-fixed-dim">
            AVAILABLE FOR WORK
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider mx-6"></div>

      {/* Navigation Links */}
      <div className="flex-grow flex flex-col gap-1 px-3">
        {sidebarLinks.map((link) => {
          const isActive = link.href.includes("#")
            ? false
            : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 py-2.5 px-4 rounded-lg transition-all duration-300 ease-out cursor-pointer group ${
                isActive
                  ? "bg-primary/5 dark:bg-primary-fixed/10 text-primary dark:text-primary-fixed font-semibold"
                  : "text-on-surface-variant dark:text-[#9a9d9e] hover:bg-surface-container dark:hover:bg-[#1a1d1e] hover:text-primary dark:hover:text-primary-fixed"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:scale-110 ${
                  isActive ? "icon-fill" : ""
                }`}
              >
                {link.icon}
              </span>
              <span className="text-[15px]">{link.label}</span>
              {isActive && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-secondary"></span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="px-6 mt-auto flex flex-col gap-4">
        {/* Divider */}
        <div className="section-divider"></div>

        {/* Social + Theme Toggle */}
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant dark:text-[#7a7d7e] hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container dark:hover:bg-[#1a1d1e] transition-all duration-200"
                title={link.label}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {link.icon}
                </span>
              </a>
            ))}
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant dark:text-[#7a7d7e] hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container dark:hover:bg-[#1a1d1e] transition-all duration-200"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-[18px]">
                {resolvedTheme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
          )}
        </div>

        {/* Hire CTA */}
        <a
          href="mailto:abhayhgarodi365@gmail.com"
          className="btn-primary w-full text-center flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">mail</span>
          Get In Touch
        </a>
      </div>
    </nav>
  );
}