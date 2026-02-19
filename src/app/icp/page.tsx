import Image from "next/image";
import { Quote, ChevronRight, Star } from "lucide-react";
import { LpHero } from "@/components/lp/LpHero";
import { LpSection } from "@/components/lp/LpSection";

import { LpAnimateSection } from "@/components/lp/LpAnimateSection";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HERO_COPY = (
  <>
    投資家は
    <br />
    英語力ではなく
    <br />
    あなたを見ている。
  </>
);
const HERO_SUB =
  "世界を相手に戦う経営者に必要なのは、流暢な発音ではなく「この人ならやり遂げる」という非言語の確信。米国VCのインサイドを知り、エグゼクティブの対話術を極めた稀有な専門家が、あなたのプレゼンスをグローバル基準へ引き上げる。";
const CTA_LABEL = "無料診断に申し込む";
const CTA_BADGE = "限定10社";
const CTA_MICRO = "※代表の稼働状況により、早期に締め切る場合がございます";

const CONTEXT_INSIGHT =
  "投資家は、あなたが答えに窮した時の「視線」や、一瞬の「沈黙」を見ている。そこにあるのはロジックではなく、経営者の覚悟だ。";

const ICP_FEATURES = [
  {
    title: "Investor Insight Audit",
    description:
      "ビジネスモデルではなく、あなたの「経営者としての見られ方」を、米国VCの評価軸で徹底的に監査。",
  },
  {
    title: "Beyond the Language",
    description:
      "英語力の限界を超え、非言語（プレゼンス・声のトーン・間合い）で相手を心服させるエグゼクティブのデリバリー。",
  },
  {
    title: "High-Stakes Dialogue",
    description:
      "予想外の鋭い問いに対し、英語の巧拙ではなく「ロジックと気迫」で答え、心理的優位を保つ実戦シミュレーション。",
  },
] as const;

const SPRINT_STEPS = [
  {
    step: "01",
    title: "Equity Story Audit",
    sub: "日本語 / 代表担当",
    description: "投資ロジックの脆弱性を特定。",
  },
  {
    step: "02",
    title: "Narrative Structuring",
    sub: "英語 / 講師担当",
    description: "外国人投資家に刺さる構造へ変換。",
  },
  {
    step: "03",
    title: "Delivery Coaching",
    sub: "英語 / 講師担当",
    description: "信頼を勝ち取るプレゼンスと発音。",
  },
  {
    step: "04",
    title: "Simulation",
    sub: "英語 / 総仕上げ",
    description: "代表と講師によるQ&A千本ノック。",
  },
] as const;

const CONTACT_URL = "https://zephyros.jp/contact-us/";
const AIONA_URL = "https://zephyros.jp/2026/02/16/aiona/";

/** ICP用画像（public/images/icp/ に配置） */
const ICP_IMAGES = {
  hero: "/images/icp/hero_representative_discussion.jpg",
  heroAlt: "/images/icp/hero_coaching_scene.jpg",
  representative: "/images/icp/representative_portrait.jpg",
  caseStudy: "/images/icp/case_study_aiona_training.jpg",
} as const;

const CARD_HOVER =
  "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-zephyros-navy/30";

export const metadata = {
  title: "Investor Communication Program (ICP)｜投資家は「あなた」を見ている",
  description:
    "投資家は英語力ではなくあなたを見ている。米国VCのインサイドを知り、エグゼクティブの対話術を極めた専門家が、あなたのプレゼンスをグローバル基準へ引き上げる。",
  openGraph: {
    title: "Investor Communication Program (ICP)｜ZEPHYROS",
    description:
      "投資家は「英語力」ではなく「あなた」を見ている。10社限定・外国人投資家コミュニケーション力診断。",
    url: "/icp",
  },
};

export default function IcpPage() {
  return (
    <main className="overflow-x-hidden bg-slate-50/50">
      <LpHero
        catchCopy={HERO_COPY}
        subCopy={HERO_SUB}
        ctaLabel={CTA_LABEL}
        ctaHref="#cta"
        heroVariant="icp"
        catchCopyClassName="font-extrabold tracking-tight"
        contentMaxWidth="max-w-4xl md:max-w-5xl lg:max-w-6xl"
        backgroundImage={ICP_IMAGES.hero}
        backgroundImageClassName="object-cover opacity-70 object-center md:object-[center_30%]"
        backgroundOverlayClassName="bg-gradient-to-b from-zephyros-navy/75 via-zephyros-navy/65 to-zephyros-navy/55"
        twoColumnLayout
        ctaBadge={CTA_BADGE}
      />

      {/* Context: なぜ今、このプログラムか */}
      <LpSection
        variant="white"
        id="context"
        className="py-24 md:py-32 border-b border-slate-200/80"
      >
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-zephyros-navy text-center mb-6 md:mb-8 tracking-tight">
            なぜ今、このプログラムか
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10 text-base md:text-lg">
            国内VCの冷え込みが続く一方で、世界は日本の技術と経営者に注目している。そのなかで、なぜ英語がうまくても投資が決まらないのか？
          </p>
          <div className="max-w-2xl mx-auto">
            <blockquote className="border-l-4 border-zephyros-navy pl-6 py-4 bg-slate-50 rounded-r-lg">
              <p className="text-zephyros-navy font-semibold text-lg md:text-xl leading-relaxed tracking-tight">
                {CONTEXT_INSIGHT}
              </p>
            </blockquote>
          </div>
        </LpAnimateSection>
      </LpSection>

      {/* Service Overview: ICP */}
      <LpSection
        variant="navy"
        id="program"
        className="py-24 md:py-32 bg-zephyros-navy"
      >
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-10 tracking-tight">
            Investor Communication Program (ICP)
          </h2>
          <p className="text-white/85 text-center max-w-2xl mx-auto mb-14 md:mb-20 text-base md:text-lg">
            外国人投資家のインサイドを知る専門家が、CXOの存在感と人間力を投資家に伝わる対話へと叩き込む。
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 list-none p-0 m-0">
            {ICP_FEATURES.map((item, index) => (
              <li key={index}>
                <Card className="h-full border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10">
                  <CardHeader className="pb-2">
                    <span className="text-xs font-semibold text-white/60 tracking-widest mb-2 block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <CardTitle className="text-white text-lg md:text-xl font-semibold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 text-white/80 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </LpAnimateSection>
      </LpSection>

      {/* 4-Day Sprint */}
      <LpSection
        variant="dark"
        id="sprint"
        className="py-24 md:py-32"
      >
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 md:mb-8 tracking-tight">
            経営者の変革プロセス — 4-Day Sprint
          </h2>
          <p className="text-white/75 text-center max-w-2xl mx-auto mb-14 md:mb-20 text-base md:text-lg leading-relaxed">
            単なる手順ではなく、経営者としての「見られ方」とプレゼンスが変わる四日間。代表と講師が役割を分担し、日本語での戦略設計から英語での総仕上げまで一気通貫でサポートします。
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 list-none p-0 m-0 max-w-5xl mx-auto">
            {SPRINT_STEPS.map((item, index) => (
              <li key={index} className="relative">
                <Card className="h-full bg-white border border-orange-500/30 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(0,0,0,0.4)]">
                  <CardHeader className="pb-2">
                    <span className="text-3xl font-extrabold text-orange-500 tracking-tight mb-1 block">
                      Day {item.step}
                    </span>
                    <CardTitle className="text-slate-900 text-lg font-semibold">
                      {item.title}
                    </CardTitle>
                    <p className="text-sm text-slate-500 mt-1">{item.sub}</p>
                  </CardHeader>
                  <CardContent className="pt-0 text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </CardContent>
                </Card>
                {index < SPRINT_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-orange-500/50 pointer-events-none" aria-hidden>
                    <ChevronRight className="size-6" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </LpAnimateSection>
      </LpSection>

      {/* Case Study: AIONA */}
      <LpSection
        variant="white"
        id="case-study"
        className="py-24 md:py-32 bg-slate-50"
      >
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-zephyros-navy text-center mb-8 md:mb-10">
            Case Study: AIONA株式会社様
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 md:mb-14 text-base md:text-lg leading-relaxed">
            製造業DX×AIのDeep Techスタートアップにおいて、CTO向けに実施。投資家が起業家に求める「覚悟」を、コミュニケーションを通じてどう表現すべきかに気づき、エグゼクティブとしての発信力が劇的に向上した事例です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-12 items-start">
            <figure className="order-1">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src={ICP_IMAGES.caseStudy}
                  alt="AIONA様CTOとの戦略セッション風景"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="mt-3 text-slate-500 text-sm text-center md:text-left">
                AIONA様CTOとの戦略セッション風景（2026年2月）
              </figcaption>
            </figure>
            <div className="grid grid-cols-1 gap-6 md:gap-8 order-2">
              <Card className={`border-slate-200 bg-white border-l-4 border-l-amber-500/60 ${CARD_HOVER}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-zephyros-navy text-base font-semibold">
                    課題（Before）
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-slate-600 text-sm leading-relaxed">
                  技術力はあるが、海外VCへの訴求軸が不明確。ピッチの構造と投資家が求めるロジックのギャップを埋められていなかった。
                </CardContent>
              </Card>
              <Card className={`border-slate-200 bg-white border-l-4 border-l-emerald-500/60 ${CARD_HOVER}`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-zephyros-navy text-base font-semibold">
                    解決（After）
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-slate-600 text-sm leading-relaxed">
                  CTOの専門性を保ちつつ、投資家が好むGrowth Storyへ再編。デリバリーとプレゼンスを強化し、国際舞台で伝わる発信力に転換。
                </CardContent>
              </Card>
            </div>
          </div>
          <blockquote className="max-w-2xl mx-auto text-center">
            <Quote className="mx-auto size-10 text-zephyros-navy/30 mb-4" aria-hidden />
            <p className="text-zephyros-navy font-medium text-lg md:text-xl italic leading-relaxed">
              「投資家が見ているのはロジックだけではない。覚悟が伝わるコミュニケーションとは何か、その感覚が変わった」
            </p>
          </blockquote>
          <p className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-slate-300 text-zephyros-navy hover:bg-slate-100"
            >
              <a href={AIONA_URL} target="_blank" rel="noopener noreferrer">
                AIONA様の事例を詳しく見る
              </a>
            </Button>
          </p>
        </LpAnimateSection>
      </LpSection>

      {/* Instructor: Jun Page */}
      <LpSection
        variant="white"
        id="instructor"
        className="py-20 md:py-24 border-t border-slate-200/80"
      >
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-zephyros-navy text-center mb-6 md:mb-8">
            あなたのプレゼンスを、グローバル基準へ引き上げる専門家
          </h2>
          <div className="max-w-5xl mx-auto">
            <Card className={`border-slate-200 bg-white ${CARD_HOVER}`}>
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-start">
                  {/* Jun Page Profile */}
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden bg-slate-100 mb-4">
                      <Image
                        src={ICP_IMAGES.representative}
                        alt="Jun Page — 株式会社ゼフィロス 代表取締役"
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <p className="text-zephyros-navy font-bold text-lg mb-1">Jun Page</p>
                    <p className="text-slate-600 text-sm mb-4">代表取締役<br/>元KPMG NYシニアマネージャー</p>
                    <div className="text-left w-full space-y-3 text-sm">
                      <p className="text-slate-600 leading-snug">
                        <strong className="text-zephyros-navy block mb-1">専門性</strong>
                        「グローバル・エグゼクティブ・コミュニケーション」のスペシャリスト。
                      </p>
                      <p className="text-slate-600 leading-snug">
                        <strong className="text-zephyros-navy block mb-1">希少性</strong>
                        米国トップキャピタリストと日常的に議論を交わす稀有な存在。
                      </p>
                      <p className="text-slate-600 leading-snug">
                        <strong className="text-zephyros-navy block mb-1">武器</strong>
                        投資家が起業家をどうジャッジするかというインサイダー・インサイト。
                      </p>
                    </div>
                  </div>
                  {/* ZEPHYROS講師陣 */}
                  <div className="border-l-0 lg:border-l lg:border-slate-200 lg:pl-8">
                    <h3 className="text-zephyros-navy text-xl font-bold mb-4">ZEPHYROS講師陣</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      <strong className="font-semibold text-zephyros-navy">50年の歴史に裏打ちされた「教える技術」</strong>を持つ、エグゼクティブ対応専門のネイティブ講師。金融・語学の両面から、国際舞台で通用する発信力を鍛えます。
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-zephyros-navy font-semibold mb-2">金融バックグラウンド</p>
                        <p className="text-slate-600 leading-snug">投資家の視点を熟知した実践的指導</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-zephyros-navy font-semibold mb-2">エグゼクティブ専門</p>
                        <p className="text-slate-600 leading-snug">CXOレベルのプレゼンス構築</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </LpAnimateSection>
      </LpSection>

      {/* 10社限定オファー & CTA */}
      <LpSection
        variant="navy"
        id="cta"
        className="py-24 md:py-32"
      >
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-10">
            10社限定<br />「外国人投資家コミュニケーション力診断」
          </h2>
          <p className="text-white/90 text-center max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10">
            代表のJun Pageが、外国人投資家対応をされる経営者との1時間の診断セッションを無料で実施いたします。外国人投資家からどう見えるか、最短距離でコミュニケーション力を上げる方向性などをお伝えさせていただきます。
          </p>
          <div className="flex flex-col items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-1.5 rounded-md bg-zephyros-navy/80 text-amber-400 border-2 border-amber-400/70 tracking-widest shadow-lg shadow-amber-500/20 backdrop-blur-sm">
              <Star className="size-3.5 fill-amber-400 flex-shrink-0" aria-hidden />
              {CTA_BADGE}
            </span>
            <Button
              asChild
              size="lg"
              className="min-h-[44px] bg-zephyros-orange hover:bg-zephyros-orange/90 text-white font-semibold px-8 py-6 text-base rounded-md transition-transform duration-200 hover:scale-105"
            >
              <a href={CONTACT_URL}>{CTA_LABEL}</a>
            </Button>
            <p className="text-white/70 text-sm">{CTA_MICRO}</p>
          </div>
        </LpAnimateSection>
      </LpSection>
    </main>
  );
}
