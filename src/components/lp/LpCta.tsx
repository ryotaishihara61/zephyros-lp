import { Button } from "@/components/ui/button";

interface LpCtaProps {
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
}

export function LpCta({
  title,
  description,
  buttonLabel = "今すぐ申し込む",
  buttonHref = "#",
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
        <div className="pt-4">
          <Button
            asChild
            size="lg"
            className="min-h-[44px] bg-zephyros-orange hover:bg-zephyros-orange/90 text-white font-semibold px-8 py-6 text-base rounded-md transition-transform duration-200 hover:scale-105"
          >
            <a href={buttonHref}>{buttonLabel}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
