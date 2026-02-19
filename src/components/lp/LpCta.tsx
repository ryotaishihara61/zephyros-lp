import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LpCtaProps {
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  /** ボタン直下のマイクロコピー（例: 締切注意） */
  buttonMicroCopy?: string;
  /** ボタン上に表示するバッジテキスト（例: "限定10社"） */
  buttonBadge?: string;
  className?: string;
}

export function LpCta({
  title,
  description,
  buttonLabel = "今すぐ申し込む",
  buttonHref = "#",
  buttonMicroCopy,
  buttonBadge,
  className = "",
}: LpCtaProps) {
  return (
    <section
      id="cta"
      className={`py-16 md:py-20 px-6 bg-zephyros-navy text-white ${className}`}
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {description && (
          <p className="text-white/90 text-lg">{description}</p>
        )}
        <div className="pt-4 space-y-3">
          {buttonBadge && (
            <div>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-1.5 rounded-md bg-zephyros-navy/80 text-amber-400 border-2 border-amber-400/70 tracking-widest shadow-lg shadow-amber-500/20 backdrop-blur-sm">
                <Star className="size-3.5 fill-amber-400 flex-shrink-0" aria-hidden />
                {buttonBadge}
              </span>
            </div>
          )}
          <div>
            <Button
              asChild
              size="lg"
              className="min-h-[44px] bg-zephyros-orange hover:bg-zephyros-orange/90 text-white font-semibold px-8 py-6 text-base rounded-md transition-transform duration-200 hover:scale-105"
            >
              <a href={buttonHref}>{buttonLabel}</a>
            </Button>
          </div>
          {buttonMicroCopy && (
            <p className="text-white/70 text-sm">{buttonMicroCopy}</p>
          )}
        </div>
      </div>
    </section>
  );
}
