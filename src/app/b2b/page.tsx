import Image from "next/image";
import { Settings, BarChart3, TrendingUp, MessageSquare, FileCheck, Target } from "lucide-react";
import { LpHero } from "@/components/lp/LpHero";
import { LpSection } from "@/components/lp/LpSection";
import { LpCta } from "@/components/lp/LpCta";
import { LpAnimateSection } from "@/components/lp/LpAnimateSection";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LpAboutUs } from "@/components/lp/LpAboutUs";

const MAIN_COPY =
  "個の成長を、組織の力に。ゼフィロスが提供する法人向け次世代研修プログラム。";
const SUB_COPY =
  "現場で即戦力となる実戦型カリキュラム。社員の市場価値を高め、企業の生産性を最大化します。";

const STRENGTH_ICONS = [Settings, BarChart3, TrendingUp] as const;

const STRENGTHS = [
  {
    title: "組織課題に合わせたカスタマイズ性",
    description:
      "貴社の組織課題や研修目的に合わせて、カリキュラムをカスタマイズいたします。業種・規模・対象者に応じたプログラム設計により、より効果的な研修をご提供します。",
    imageUrl:
      "https://placehold.jp/24/1e3a5f/ffffff/400x240.png?text=Customize",
    imageAlt: "組織課題に合わせたカスタマイズのイメージ（差し替え用）",
  },
  {
    title: "学習進捗の可視化とレポーティング",
    description:
      "学習進捗や受講状況をダッシュボードで可視化いたします。人事・経営層向けのレポートもご用意しており、研修効果の把握や経営報告にご活用いただけます。",
    imageUrl:
      "https://placehold.jp/24/1e3a5f/ffffff/400x240.png?text=Report",
    imageAlt: "学習進捗の可視化・レポーティングのイメージ（差し替え用）",
  },
  {
    title: "継続的なパフォーマンス向上支援",
    description:
      "研修実施後も、フォローアップや振り返りセッションを通じて継続的にサポートいたします。定着と行動変容を促し、組織全体のパフォーマンス向上に貢献します。",
    imageUrl:
      "https://placehold.jp/24/1e3a5f/ffffff/400x240.png?text=Support",
    imageAlt: "継続的なパフォーマンス向上支援のイメージ（差し替え用）",
  },
] as const;

const FLOW_STEPS = [
  { label: "お問い合わせ", icon: MessageSquare },
  { label: "ヒアリング", icon: MessageSquare },
  { label: "プラン提案", icon: FileCheck },
  { label: "研修実施", icon: Target },
  { label: "効果測定", icon: BarChart3 },
] as const;

const FAQ_ITEMS = [
  {
    question: "導入までの期間はどの程度かかりますか？",
    answer:
      "お問い合わせいただいてから、ヒアリング・プラン提案を経て、最短で約2〜3週間程度で研修実施が可能です。ご希望の日程や規模によって異なりますので、お気軽にご相談ください。",
  },
  {
    question: "オンライン・対面のどちらにも対応していますか？",
    answer:
      "はい。オンライン形式、対面形式、ハイブリッド形式のいずれにも対応しております。貴社のご要望や環境に合わせて、最適な形式をご提案いたします。",
  },
  {
    question: "受講人数に制限はありますか？",
    answer:
      "少人数から大人数まで対応可能です。対象人数に応じたプログラム設計とファシリテーション体制で、効果的な研修を実施いたします。詳細はお問い合わせ時にご相談ください。",
  },
  {
    question: "効果測定はどのように行いますか？",
    answer:
      "事前・事後アンケート、行動変容の観察、業績指標との紐づけなど、貴社の目的に合わせた測定方法をご提案いたします。レポート形式でご報告し、継続改善にもご活用いただけます。",
  },
] as const;

export const metadata = {
  title: "法人向け｜次世代研修プログラム",
  description:
    "個の成長を、組織の力に。現場で即戦力となる実戦型カリキュラムで、社員の市場価値を高め、企業の生産性を最大化。組織課題に合わせたカスタマイズ・進捗可視化・継続支援をご提供します。",
  openGraph: {
    title: "法人向け｜ZEPHYROS 次世代研修プログラム",
    description:
      "組織課題の解決・生産性向上。法人向けリーダーシップ研修。資料ダウンロード受付中。",
    url: "/b2b",
  },
};

export default function B2bPage() {
  return (
    <main className="overflow-x-hidden">
      <LpHero
        catchCopy={MAIN_COPY}
        subCopy={SUB_COPY}
        ctaLabel="法人向け資料をダウンロード"
        ctaHref="#cta"
      />

      <LpSection variant="white" id="strengths" className="py-20 md:py-28">
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-zephyros-navy text-center mb-6 md:mb-8">
            法人向け、3つの強み
          </h2>
          <p className="text-foreground/80 text-center max-w-2xl mx-auto mb-12 md:mb-16 text-base md:text-lg">
            人事担当者・経営者・部署リーダーの皆様にご検討いただきやすいよう、組織課題に寄り添ったプログラムをご提供いたします。
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 list-none p-0 m-0">
            {STRENGTHS.map((item, index) => {
              const Icon = STRENGTH_ICONS[index];
              return (
                <li key={index}>
                  <Card className="h-full border-zephyros-navy-light/20 overflow-hidden">
                    <div className="relative w-full aspect-[400/240] bg-muted">
                      <Image
                        src={item.imageUrl}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="mb-3">
                        <Icon className="size-8 text-zephyros-orange" aria-hidden />
                      </div>
                      <CardTitle className="text-zephyros-navy text-lg md:text-xl">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 text-muted-foreground text-sm md:text-base leading-relaxed">
                      {item.description}
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </LpAnimateSection>
      </LpSection>

      <LpSection variant="light" id="flow" className="py-20 md:py-28 bg-zephyros-navy-light/5">
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-zephyros-navy text-center mb-6 md:mb-8">
            導入フロー
          </h2>
          <p className="text-foreground/80 text-center max-w-2xl mx-auto mb-12 md:mb-16 text-base md:text-lg">
            お問い合わせから効果測定まで、一貫したサポートで貴社の研修導入をサポートいたします。
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-6 sm:gap-2 max-w-4xl mx-auto">
            {FLOW_STEPS.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:flex-col sm:flex-1 sm:min-w-0"
                >
                  <div className="flex flex-col items-center gap-2 sm:gap-3 flex-1 sm:flex-initial">
                    <div className="size-12 rounded-full flex items-center justify-center bg-zephyros-orange/10 text-zephyros-orange border border-zephyros-orange/20">
                      <StepIcon className="size-6" aria-hidden />
                    </div>
                    <span className="text-sm font-medium text-zephyros-navy text-center">
                      {step.label}
                    </span>
                  </div>
                  {index < FLOW_STEPS.length - 1 && (
                    <span
                      className="hidden sm:inline text-zephyros-orange/60 text-lg shrink-0"
                      aria-hidden
                    >
                      →
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </LpAnimateSection>
      </LpSection>

      <LpSection variant="light" id="faq" className="bg-slate-50 py-20 md:py-28">
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-zephyros-navy text-center mb-6 md:mb-8">
            よくある質問
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-zephyros-navy font-medium hover:no-underline hover:text-zephyros-orange">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </LpAnimateSection>
      </LpSection>

      <LpAboutUs
        messageHeading="組織課題の解決と生産性向上に、私たちは寄り添います"
        messageBody="ゼフィロスは、企業の人事・経営層の皆様とともに、組織課題の解決と生産性向上に取り組んでおります。カスタマイズ可能な研修プログラム、進捗の可視化、継続的な支援を通じて、貴社の成長をサポートいたします。企業概要をご確認のうえ、お気軽にご相談ください。"
        tableRows={[
          { label: "会社名", value: "株式会社ゼフィロス" },
          { label: "代表者", value: "代表取締役 Jun Page" },
          { label: "所在地", value: "香川県高松市" },
          { label: "事業内容", value: "リーダーシップ研修・人材育成" },
        ]}
        representativeName="Jun Page"
      />

      <LpCta
        title="法人向けの詳細資料をご用意しております"
        description="研修プログラムの概要・導入事例・料金の目安をまとめた資料をダウンロードいただけます。お気軽にお申し込みください。"
        buttonLabel="法人向け資料をダウンロード"
        buttonHref="https://zephyros.jp/contact-us/"
      />
    </main>
  );
}
