"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const DEFAULT_NAV_ITEMS = [
  { label: "特徴", href: "#strengths", external: false },
  { label: "お客様の声", href: "#voices", external: false },
  { label: "FAQ", href: "#faq", external: false },
  { label: "会社概要", href: "https://zephyros.jp/about-us/", external: true },
] as const;

const ICP_NAV_ITEMS = [
  { label: "会社概要", href: "https://zephyros.jp/about-us/", external: true },
] as const;

const SCROLL_THRESHOLD = 24;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // ICPページかどうかで表示するナビゲーションを切り替え
  const navItems = pathname === "/icp" ? ICP_NAV_ITEMS : DEFAULT_NAV_ITEMS;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll(); // 初期状態
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerBg = scrolled
    ? "bg-white text-zephyros-navy shadow-sm"
    : "bg-zephyros-navy/90 text-white backdrop-blur-sm";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex h-14 md:h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Logo
          logoSrc="/logo.png"
          logoAlt="ZEPHYROS"
          className={scrolled ? "text-zephyros-navy" : "text-white"}
        />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium opacity-90 hover:opacity-100 transition-opacity"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium opacity-90 hover:opacity-100 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <Button
            asChild
            size="sm"
            className="min-h-[44px] bg-zephyros-orange hover:bg-zephyros-orange/90 text-white font-semibold rounded-md ml-2"
          >
            <a href="#cta">お問合せ</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={mobileOpen}
          className="md:hidden p-2 -mr-2 rounded-md hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-zephyros-orange"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="size-6" aria-hidden />
          ) : (
            <Menu className="size-6" aria-hidden />
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-14 md:hidden bg-black/20 backdrop-blur-sm"
          aria-hidden
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile nav panel */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        } ${scrolled ? "bg-white shadow-lg" : "bg-zephyros-navy/95 backdrop-blur"}`}
      >
        <nav className="flex flex-col py-4 px-4">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 text-sm font-medium rounded-md hover:bg-black/5 text-inherit"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="py-3 px-4 text-sm font-medium rounded-md hover:bg-black/5 text-inherit"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-2 px-4">
            <Button
              asChild
              className="w-full min-h-[44px] bg-zephyros-orange hover:bg-zephyros-orange/90 text-white font-semibold rounded-md"
            >
              <a href="#cta" onClick={() => setMobileOpen(false)}>
                お問合せ
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
