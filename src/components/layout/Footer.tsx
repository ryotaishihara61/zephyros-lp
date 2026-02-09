import Link from "next/link";
import { Logo } from "./Logo";

const FOOTER_LINKS = [
  { label: "会社概要", href: "https://zephyros.jp/about-us/", external: true },
  { label: "プライバシーポリシー", href: "/privacy", external: false },
  { label: "利用規約", href: "/terms", external: false },
] as const;

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Logo logoSrc="/logo.png" logoAlt="ZEPHYROS" className="text-white text-xl" />

          <nav className="flex flex-wrap gap-6 md:gap-8" aria-label="フッター">
            {FOOTER_LINKS.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <p className="mt-8 pt-8 border-t border-slate-700 text-sm text-slate-400">
          © 2026 Zephyros Inc.
        </p>
      </div>
    </footer>
  );
}
