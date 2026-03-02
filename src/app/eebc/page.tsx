import Image from "next/image";
import { Quote, Star, MapPin, X, Check } from "lucide-react";
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
    海外投資家は、
    <br />
    あなたの「英語力」を見ていない。
    <br />
    あなたの「存在感」を見ている。
  </>
);
const HERO_SUB =
  "経営者の『振る舞い・話し方・見られ方（How）』を、グローバル投資家基準へ引き上げる。それが「Equity English Bootcamp」の唯一のミッションです。";
const CTA_LABEL = "無料診断に申し込む";
const CTA_BADGE = "限定10社";
const CTA_MICRO = "※代表の稼働状況により、早期に締め切る場合がございます";

const CONTEXT_INSIGHT =
  "投資家は、あなたが答えに窮した時の「視線」や、一瞬の「沈黙」を見ている。そこにあるのはロジックではなく、経営者の覚悟だ。";

const ICP_FEATURES = [
  {
    title: "Presence Audit",
    description:
      "ビジネスモデルではなく、あなたの「経営者としての見られ方」を、米国VCの評価軸で徹底的に監査。",
  },
  {
    title: "Non-verbal Mastery",
    description:
      "英語力の限界を超え、非言語（プレゼンス・声のトーン・間合い）で相手を心服させるエグゼクティブのデリバリー。",
  },
  {
    title: "High-Stakes Dialogue",
    description:
      "予想外の鋭い問いに対し、英語の巧拙ではなく「ロジックと気迫」で答え、心理的優位を保つ実戦シミュレーション。",
  },
] as const;

const TRAINING_DAYS = [
  {
    step: 2,
    title: "Non-verbal Mastery",
    description:
      "視線・姿勢・声のトーン。言葉より先に伝わる非言語シグナルを投資家基準に再設計する。",
  },
  {
    step: 3,
    title: "Dialogue Agility",
    description:
      "想定外の問いへの対話力。「ロジックと気迫」で心理的優位を保つ実戦トレーニング。",
  },
  {
    step: 4,
    title: "Presence Integration",
    description:
      "習得スキルを統合。実戦ロールプレイで瞬発力と一貫性を磨き上げる。",
  },
] as const;

const CONTACT_URL = "https://zephyros.jp/contact-us/";
const AIONA_URL = "https://zephyros.jp/2026/02/16/aiona/";

/** ICP用画像（public/images/icp/ に配置） */
const ICP_IMAGES = {
  hero: "/images/icp/hero_representative_discussion.jpg",
  representative: "/images/icp/representative_portrait.jpg",
  caseStudy: "/images/icp/case_study_aiona_training.jpg",
} as const;

const CARD_HOVER =
  "transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-zephyros-navy/30";

export const metadata = {
  title: "Equity English Bootcamp｜あなたの「存在感」を変える5日間",
  description:
    "経営者の振る舞い・話し方・見られ方をグローバル投資家基準へ引き上げる5日間集中ブートキャンプ。米国VCのインサイドを知る Jun Page が、あなたのプレゼンスを変える。",
  openGraph: {
    title: "Equity English Bootcamp｜ZEPHYROS",
    description:
      "あなたの事業を変えるのではない。あなたの「存在感」を変えるのだ。10社限定・5日間集中ブートキャンプ。",
    url: "/eebc",
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
        catchCopyClassName="font-extrabold tracking-tight !text-[1.375rem] sm:!text-[1.1875rem] md:!text-[1.375rem] lg:!text-[1.6875rem] xl:!text-[2.0625rem]"
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

      {/* Our Scope: We Don't / We Do */}
      <LpSection
        variant="white"
        id="scope"
        className="py-24 md:py-32 bg-slate-50 border-b border-slate-200/80"
      >
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-zephyros-navy text-center mb-3 tracking-tight">
            Our Scope
          </h2>
          <p className="text-slate-500 text-center mb-12 md:mb-16 text-sm tracking-widest font-medium uppercase">
            私たちが扱うもの、扱わないもの
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* We Don't */}
            <Card className="border-red-100 bg-white">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="size-4 text-red-500" />
                  </div>
                  <CardTitle className="text-red-600 text-xl font-bold">We Don&apos;t</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-800 text-base font-semibold mb-3 leading-snug">
                  事業内容・数値計画への口出し
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  ビジネスモデルの善し悪し、財務計画の精度——それらは私たちの専門外です。あなたの事業（What）には一切口を出しません。専門領域への不可侵が、私たちの誠実さです。
                </p>
              </CardContent>
            </Card>

            {/* We Do */}
            <Card className="border-emerald-100 bg-white">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="size-4 text-emerald-600" />
                  </div>
                  <CardTitle className="text-emerald-700 text-xl font-bold">We Do</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-800 text-base font-semibold mb-3 leading-snug">
                  コミュニケーションの極限チューニング
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  海外投資家との心理的距離を詰め、信頼を勝ち取るための「非言語・言語コミュニケーション（How）」を、グローバル投資家基準まで引き上げることが私たちの全てです。
                </p>
              </CardContent>
            </Card>
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
            Equity English Bootcamp
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

      {/* 5日間集中ブートキャンプ: 1-3-1 Structure */}
      <LpSection
        variant="dark"
        id="sprint"
        className="py-24 md:py-32"
      >
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 md:mb-6 tracking-tight">
            5日間集中ブートキャンプ
            <span className="ml-3 text-orange-400 font-extrabold">1-3-1</span>
          </h2>
          <p className="text-white/75 text-center max-w-2xl mx-auto mb-5 text-base md:text-lg leading-relaxed">
            1日5時間×5日間。単なる研修ではなく、経営者としての「見られ方」とプレゼンスが根本から変わる集中プログラム。
          </p>
          <div className="flex items-center justify-center gap-2 mb-14 md:mb-20 text-white/55 text-sm">
            <MapPin className="size-4 text-orange-400 flex-shrink-0" aria-hidden />
            <span>高松本社ビル開催 — プログラム時間外はオフィス設備でリモートワーク可能</span>
          </div>

          {/* 1-3-1 Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)] gap-6 lg:gap-5">

            {/* Phase 1: Day 1 — Jun Page */}
            <div className="flex flex-col">
              <div className="text-center mb-3">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-orange-400 bg-orange-400/10 border border-orange-400/30 rounded-md px-3 py-1">
                  Phase 1 — Audit
                </span>
              </div>
              <Card className="flex-1 bg-white border border-orange-400/50 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(0,0,0,0.4)]">
                <CardHeader className="pb-2">
                  <span className="text-3xl font-extrabold text-orange-500 tracking-tight mb-1 block">
                    Day 1
                  </span>
                  <CardTitle className="text-slate-900 text-base md:text-lg font-semibold leading-snug">
                    Persona & Presence Audit
                  </CardTitle>
                  <p className="text-sm text-orange-600 font-semibold mt-1">Jun Page / 代表直轄</p>
                </CardHeader>
                <CardContent className="pt-0 text-slate-600 text-sm leading-relaxed">
                  現状の振る舞いが投資家にどう映っているかを徹底解析。非言語シグナルから言葉の選択まで全てを投資家の眼で評価し、変革のベースラインを確定する。
                </CardContent>
              </Card>
            </div>

            {/* Phase 2: Day 2-4 — Native Instructors */}
            <div className="flex flex-col">
              <div className="text-center mb-3">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/60 bg-white/5 border border-white/20 rounded-md px-3 py-1">
                  Phase 2 — Performance Training
                </span>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {TRAINING_DAYS.map((day) => (
                  <Card
                    key={day.step}
                    className="bg-white border border-slate-200 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(0,0,0,0.3)]"
                  >
                    <CardHeader className="pb-2">
                      <span className="text-3xl font-extrabold text-slate-400 tracking-tight mb-1 block">
                        Day {day.step}
                      </span>
                      <CardTitle className="text-slate-900 text-sm md:text-base font-semibold leading-snug">
                        {day.title}
                      </CardTitle>
                      <p className="text-xs text-slate-500 mt-1">精鋭ネイティブ講師</p>
                    </CardHeader>
                    <CardContent className="pt-0 text-slate-600 text-xs md:text-sm leading-relaxed">
                      {day.description}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Phase 3: Day 5 — Jun Page */}
            <div className="flex flex-col">
              <div className="text-center mb-3">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-orange-400 bg-orange-400/10 border border-orange-400/30 rounded-md px-3 py-1">
                  Phase 3 — Final
                </span>
              </div>
              <Card className="flex-1 bg-white border border-orange-400/50 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(0,0,0,0.4)]">
                <CardHeader className="pb-2">
                  <span className="text-3xl font-extrabold text-orange-500 tracking-tight mb-1 block">
                    Day 5
                  </span>
                  <CardTitle className="text-slate-900 text-base md:text-lg font-semibold leading-snug">
                    Final Pitch Simulation
                  </CardTitle>
                  <p className="text-sm text-orange-600 font-semibold mt-1">Jun Page / 代表直轄</p>
                </CardHeader>
                <CardContent className="pt-0 text-slate-600 text-sm leading-relaxed">
                  投資家を心服させるプレゼンスが完成しているか、代表がジャッジ。本物の投資家基準で最終評価を行い、次のピッチへの確信を手渡す。
                </CardContent>
              </Card>
            </div>

          </div>
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

      {/* Instructor & Social Proof */}
      <LpSection
        variant="white"
        id="instructor"
        className="py-20 md:py-28 border-t border-slate-200/80"
      >
        <LpAnimateSection>

          {/* Part 1: なぜZEPHYROSなのか */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-zephyros-navy mb-3 tracking-tight">
              なぜ、ZEPHYROSなのか
            </h2>
            <p className="text-slate-400 text-xs tracking-widest font-semibold uppercase mb-10">
              50年の信頼が、あなたのプレゼンスを変える
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto mb-10">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-zephyros-navy tracking-tight">
                  50<span className="text-xl md:text-2xl font-bold">年</span>
                </p>
                <p className="text-slate-500 text-xs mt-1.5 leading-snug">グローバル人材育成の歴史</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-zephyros-navy tracking-tight">
                  40<span className="text-xl md:text-2xl font-bold">万</span><span className="text-lg font-bold">人</span>
                </p>
                <p className="text-slate-500 text-xs mt-1.5 leading-snug">のグローバル挑戦を支援</p>
              </div>
            </div>

            <p className="text-slate-600 text-base max-w-2xl mx-auto mb-12 leading-relaxed">
              日本の大手企業の海外進出を、黒子として支え続けてきた専門機関。その知見が今、経営者個人の「存在感」を変えるプログラムに凝縮されている。
            </p>

            {/* Philosophy quote */}
            <div className="max-w-2xl mx-auto mb-12 text-left">
              <blockquote className="border-l-4 border-orange-400 pl-6 py-4 bg-orange-50/40 rounded-r-lg">
                <p className="text-zephyros-navy font-bold text-lg md:text-xl leading-relaxed tracking-tight">
                  「流暢な英語は、世界で活躍するためのパスポートではない」
                </p>
                <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed">
                  日本での生活・就労経験を持つ講師陣だからこそ可能な、文化的背景と実体験を交えたグローバル視点の指導——それが私たちの圧倒的な強みです。
                </p>
              </blockquote>
            </div>

            {/* Client list */}
            <div>
              <p className="text-slate-400 text-xs tracking-widest uppercase font-semibold mb-5">
                主要クライアント実績（一部）
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["トヨタ自動車", "今治造船", "大塚製薬"].map((name) => (
                  <span
                    key={name}
                    className="text-sm font-semibold text-zephyros-navy bg-white border border-slate-200 rounded-lg px-5 py-2.5 shadow-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200/80 mb-16" />

          {/* Part 2: 講師陣 */}
          <h2 className="text-2xl md:text-3xl font-bold text-zephyros-navy text-center mb-4 tracking-tight">
            あなたのプレゼンスを変える、2つの力
          </h2>
          <p className="text-slate-500 text-center max-w-xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
            戦略家と鍛え屋。Jun Page の「投資家の眼」と、精鋭講師陣の「徹底指導」が、経営者を別次元へと押し上げる。
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 md:gap-8 items-start">

            {/* Jun Page */}
            <Card className="border-orange-200/70 bg-white shadow-lg">
              <div className="p-6 md:p-8 flex flex-col items-center text-center">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-slate-100 mb-4 flex-shrink-0">
                  <Image
                    src={ICP_IMAGES.representative}
                    alt="Jun Page — 株式会社ゼフィロス 代表取締役"
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-orange-500 bg-orange-50 border border-orange-200 rounded-md px-3 py-1 mb-3">
                  Strategy &amp; Judge
                </span>
                <p className="text-zephyros-navy font-bold text-xl mb-1">Jun Page</p>
                <p className="text-slate-500 text-xs mb-5">代表取締役 / ペンシルベニア大学卒 / 元KPMG NYシニアマネージャー</p>
                <div className="text-left w-full space-y-3 text-sm">
                  <p className="text-slate-600 leading-snug">
                    <strong className="text-zephyros-navy block mb-1">投資家の眼力</strong>
                    米国トップキャピタリストのインサイドを知る稀有な存在。投資家が起業家をどうジャッジするかというインサイダー・インサイトが最大の武器。
                  </p>
                  <p className="text-slate-600 leading-snug">
                    <strong className="text-zephyros-navy block mb-1">VCネットワーク</strong>
                    ペンシルベニア大学時代からの旧友に米国VCのパートナーが多数在籍。「投資家の眼」はテキストブックではなく、学生時代から続く実際の人間関係から培われたものだ。
                  </p>
                  <p className="text-slate-600 leading-snug">
                    <strong className="text-zephyros-navy block mb-1">専門性</strong>
                    グローバル・エグゼクティブ・コミュニケーションのプロフェッショナル。インストラクターとして15年のキャリアを持ち、経営者の「伝わり方」を変えることに特化し続けてきた。
                  </p>
                  <p className="text-slate-600 leading-snug">
                    <strong className="text-zephyros-navy block mb-1">担当フェーズ</strong>
                    Day 1（Audit）と Day 5（Final Simulation）を担当。経営者の変革を最初と最後で見届ける。
                  </p>
                </div>
              </div>
            </Card>

            {/* Native Instructors */}
            <Card className="border-slate-200 bg-white shadow-lg">
              <div className="p-6 md:p-8">
                <div className="mb-6">
                  <span className="inline-block text-xs font-bold tracking-widest uppercase text-zephyros-navy/60 bg-slate-100 border border-slate-200 rounded-md px-3 py-1 mb-3">
                    Performance Training / Day 2–4
                  </span>
                  <h4 className="text-zephyros-navy text-xl font-bold mb-2">精鋭ネイティブ講師陣</h4>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                    全員が日本での就業経験を持ち、日本人の誠実さ・緻密さ・思慮深さを心から敬意を持って理解している。だからこそ、日本人経営者が「何を持っているか」ではなく、「何が足りないか」が鮮明に見える。
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                    英会話スクールの講師ではない。グローバルの舞台で日本人が壁にぶつかる瞬間——間の取り方、アイコンタクト、反論への対処——その一点に特化した、コミュニケーション変革のプロフェッショナルだ。
                  </p>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    彼らの指導は「正しい英語」を教えることではなく、「投資家が思わず前のめりになるプレゼンス」をあなたの体に染み込ませることにある。
                  </p>
                </div>
                {/* 講師3名の写真プレースホルダー */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
                  {([1, 2, 3] as const).map((n) => (
                    <div key={n} className="flex flex-col items-center text-center bg-slate-50 rounded-xl p-5 border border-slate-100">
                      <div className="w-20 h-20 rounded-xl bg-slate-200 border-2 border-dashed border-slate-300 flex items-center justify-center mb-3">
                        <span className="text-slate-400 text-[10px] font-semibold tracking-wide">PHOTO</span>
                      </div>
                      <p className="text-zephyros-navy font-semibold text-sm">ネイティブ講師 {n}</p>
                      <p className="text-slate-500 text-xs mt-0.5">Day 2–4 担当</p>
                    </div>
                  ))}
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
