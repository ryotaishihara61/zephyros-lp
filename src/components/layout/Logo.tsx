import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  /** 画像に差し替える場合は src を指定（未指定時はテキストロゴ） */
  logoSrc?: string;
  logoAlt?: string;
  className?: string;
}

const LOGO_TEXT = "グローバルリーダーシップのゼフロス";

export function Logo({ logoSrc, logoAlt = "ZEPHYROS", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 font-semibold text-lg tracking-tight no-underline text-inherit hover:opacity-90 transition-opacity ${className}`}
    >
      {logoSrc ? (
        <>
          <Image
            src={logoSrc}
            alt=""
            width={140}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="whitespace-nowrap text-sm md:text-base">{LOGO_TEXT}</span>
        </>
      ) : (
        <span>zephyros.jp</span>
      )}
    </Link>
  );
}
