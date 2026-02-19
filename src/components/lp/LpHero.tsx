import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface LpHeroProps {
  catchCopy: React.ReactNode;
  subCopy?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** 指定時は画像を表示。未指定時はポリゴン／メッシュグラデーションで奥行き表現 */
  backgroundImage?: string;
  /** default: 標準グラデーション / icp: 深み・金融系のグラデーション */
  heroVariant?: "default" | "icp";
  /** メインコピー（h1）に渡す追加クラス（例: font-extrabold） */
  catchCopyClassName?: string;
  /** コンテンツラッパーの幅（指定時は max-w-4xl の代わりに使用。例: max-w-5xl lg:max-w-6xl） */
  contentMaxWidth?: string;
  /** PC表示時に左右2カラムレイアウトにする（左: キャッチコピー, 右: サブコピー + CVボタン） */
  twoColumnLayout?: boolean;
  /** CTAボタン上に表示するバッジテキスト（例: "PMF限定10社"） */
  ctaBadge?: string;
  /** 背景画像の className（object-cover, object-position など）。未指定時は object-cover opacity-40 object-center md:object-top */
  backgroundImageClassName?: string;
  /** 背景画像上のオーバーレイの className。未指定時は 濃いネイビー bg-zephyros-navy/90 */
  backgroundOverlayClassName?: string;
  className?: string;
}

/** ヒーロー用メッシュグラデーション（奥行き・高級感） */
function HeroGradientBg({ variant = "default" }: { variant?: "default" | "icp" }) {
  if (variant === "icp") {
    return (
      <div
        className="absolute inset-0 z-0"
        aria-hidden
        style={{
          background: `
            linear-gradient(165deg, oklch(0.18 0.04 260) 0%, oklch(0.22 0.05 255) 40%, oklch(0.26 0.04 250) 100%),
            radial-gradient(ellipse 90% 50% at 50% -5%, oklch(0.35 0.06 260 / 0.4) 0%, transparent 55%),
            radial-gradient(ellipse 60% 35% at 85% 70%, oklch(0.28 0.04 240 / 0.35) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 15% 85%, oklch(0.25 0.03 260 / 0.3) 0%, transparent 45%)
          `,
        }}
      />
    );
  }
  return (
    <div
      className="absolute inset-0 z-0"
      aria-hidden
      style={{
        background: `
          radial-gradient(ellipse 85% 55% at 50% -10%, oklch(0.65 0.2 45 / 0.22) 0%, transparent 50%),
          radial-gradient(ellipse 70% 45% at 95% 60%, oklch(0.28 0.06 260 / 0.35) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 10% 90%, oklch(0.22 0.04 260 / 0.4) 0%, transparent 45%),
          radial-gradient(ellipse 50% 30% at 80% 20%, oklch(0.75 0.15 55 / 0.12) 0%, transparent 40%)
        `,
      }}
    />
  );
}

export function LpHero({
  catchCopy,
  subCopy,
  ctaLabel = "お問い合わせ",
  ctaHref = "#cta",
  backgroundImage,
  heroVariant = "default",
  catchCopyClassName = "",
  contentMaxWidth,
  backgroundImageClassName = "object-cover opacity-50 object-center md:object-top",
  backgroundOverlayClassName = "bg-zephyros-navy/90",
  twoColumnLayout = false,
  ctaBadge,
  className = "",
}: LpHeroProps) {
  return (
    <section
      className={`relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-zephyros-navy text-white px-6 py-20 ${className}`}
    >
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className={backgroundImageClassName}
            priority
            sizes="100vw"
          />
          <div className={`absolute inset-0 ${backgroundOverlayClassName}`} />
        </div>
      ) : (
        <HeroGradientBg variant={heroVariant} />
      )}
      <div className={`relative z-10 mx-auto w-full ${contentMaxWidth ?? "max-w-4xl"}`}>
        {twoColumnLayout ? (
          /* PC: 2カラム（左: キャッチコピー, 右: サブコピー + CVボタン） */
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 items-start md:items-center">
            {/* 左カラム：キャッチコピー */}
            <div className="text-left">
              <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight drop-shadow-lg ${catchCopyClassName}`.trim()}>
                {catchCopy}
              </h1>
            </div>

            {/* 右カラム：サブコピー + CVボタン */}
            <div className="text-left space-y-6 mt-8 md:mt-0 w-full">
              {subCopy && (
                <p className="text-base md:text-xl text-white/95 drop-shadow-md break-words">
                  {subCopy}
                </p>
              )}
              <div className="space-y-3">
                {ctaBadge && (
                  <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full bg-zephyros-orange text-white tracking-wide">
                    {ctaBadge}
                  </span>
                )}
                <div>
                  <Button
                    asChild
                    size="lg"
                    className="min-h-[44px] bg-zephyros-orange hover:bg-zephyros-orange/90 text-white font-semibold px-8 py-6 text-base rounded-md transition-transform duration-200 hover:scale-105"
                  >
                    <a href={ctaHref}>{ctaLabel}</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* デフォルト: センター1カラム */
          <div className="text-center space-y-6">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight drop-shadow-lg ${catchCopyClassName}`.trim()}>
              {catchCopy}
            </h1>
            {subCopy && (
              <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
                {subCopy}
              </p>
            )}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="min-h-[44px] bg-zephyros-orange hover:bg-zephyros-orange/90 text-white font-semibold px-8 py-6 text-base rounded-md transition-transform duration-200 hover:scale-105"
              >
                <a href={ctaHref}>{ctaLabel}</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
