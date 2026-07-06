"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-outline-variant dark:border-[#3a3d3e]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-9 h-9 rounded-lg flex items-center justify-center border border-outline-variant dark:border-[#3a3d3e] hover:bg-surface-container-low dark:hover:bg-[#1a1d1e] transition-all duration-200 text-primary dark:text-primary-fixed group"
      aria-label="Toggle Theme"
      id="theme-toggle"
    >
      <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:rotate-45">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}