"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/projects", label: "Projects", icon: "rocket_launch" },
  { href: "/about", label: "About", icon: "person" },
  { href: "/#contact", label: "Contact", icon: "mail" },
];

export default function TopNavBar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full lg:w-[calc(100%-16rem)] z-50 nav-glass flex justify-between items-center h-16 px-5 md:px-8 transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        {/* Logo / Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary dark:bg-primary-fixed flex items-center justify-center lg:hidden">
            <span className="text-on-primary dark:text-primary-container font-bold text-[14px]">
              AG
            </span>
          </div>
          <span className="font-label-caps text-label-caps tracking-widest text-primary dark:text-primary-fixed hidden sm:inline">
            ABHAY_GARODI
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1">
          {navLinks.map((link) => {
            const isActive = link.href.includes("#")
              ? false
              : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                  isActive
                    ? "text-primary dark:text-primary-fixed bg-primary/5 dark:bg-primary-fixed/10"
                    : "text-on-surface-variant dark:text-[#9a9d9e] hover:text-primary dark:hover:text-primary-fixed hover:bg-surface-container-low dark:hover:bg-[#1a1d1e]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resume.pdf"
            download="Abhay Garodi - Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 text-[14px] font-medium text-primary dark:text-primary-fixed border border-outline-variant dark:border-[#3a3d3e] px-4 py-1.5 rounded-lg hover:bg-surface-container-low dark:hover:bg-[#1a1d1e] transition-all duration-200"
          >
            <span className="material-symbols-outlined text-[16px]">
              download
            </span>
            Resume
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-surface-container-low dark:hover:bg-[#1a1d1e] transition-colors"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-16 right-0 w-72 h-[calc(100vh-4rem)] bg-surface dark:bg-[#111314] border-l border-outline-variant dark:border-[#2a2d2e] z-40 md:hidden transform transition-transform duration-300 ease-out flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-4 gap-1 flex-1">
          {navLinks.map((link) => {
            const isActive = link.href.includes("#")
              ? false
              : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-primary/5 dark:bg-primary-fixed/10 text-primary dark:text-primary-fixed font-semibold"
                    : "text-on-surface-variant dark:text-[#9a9d9e] hover:bg-surface-container dark:hover:bg-[#1a1d1e]"
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${isActive ? "icon-fill" : ""}`}>
                  {link.icon}
                </span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-outline-variant dark:border-[#2a2d2e] space-y-3">
          <a
            href="/resume.pdf"
            className="flex items-center justify-center gap-2 btn-secondary w-full"
          >
            <span className="material-symbols-outlined text-[18px]">
              download
            </span>
            Download Resume
          </a>
          <a
            href="mailto:abhaygarodi@gmail.com"
            className="flex items-center justify-center gap-2 btn-primary w-full"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
}