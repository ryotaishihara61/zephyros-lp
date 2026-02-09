import Image from "next/image";
import { Button } from "@/components/ui/button";

interface LpHeroProps {
  catchCopy: string;
  subCopy?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** 指定時は画像を表示。未指定時はポリゴン／メッシュグラデーションで奥行き表現 */
  backgroundImage?: string;
  className?: string;
}

/** ヒーロー用メッシュグラデーション（奥行き・高級感） */
function HeroGradientBg() {
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
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-zephyros-navy/80" />
        </div>
      ) : (
        <HeroGradientBg />
      )}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {catchCopy}
        </h1>
        {subCopy && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
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
    </section>
  );
}
