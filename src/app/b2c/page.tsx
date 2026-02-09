import Image from "next/image";
import { UserCheck, PenTool, Users } from "lucide-react";
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
  "今のスキルに、確信を。ゼフィロスが提案する『一生モノ』の学び。";
const SUB_COPY =
  "仕事の合間に、最短ルートで。プロの視点が詰まったカリキュラムで、あなたの市場価値を引き上げます。";

const STRENGTH_ICONS = [UserCheck, PenTool, Users] as const;

const STRENGTHS = [
  {
    title: "現役プロによる直接監修",
    description:
      "現場で活躍するプロフェッショナルがカリキュラムを監修。実務に即した内容で、即戦力としてのスキルが身につきます。",
    imageUrl:
      "https://placehold.jp/24/1e3a5f/ffffff/400x240.png?text=Pro%E7%9B%A3%E4%BF%AE",
    imageAlt: "現役プロによる直接監修のイメージ（差し替え用）",
  },
  {
    title: "実践アウトプット中心の構成",
    description:
      "インプットだけで終わらせない。課題提出やプロジェクト形式で、学んだことをすぐにアウトプットする構成です。",
    imageUrl:
      "https://placehold.jp/24/1e3a5f/ffffff/400x240.png?text=Output",
    imageAlt: "実践アウトプット中心のカリキュラムイメージ（差し替え用）",
  },
  {
    title: "卒業後も続くコミュニティ",
    description:
      "修了後も学び合えるコミュニティに参加可能。同じ志を持つ仲間とつながり、キャリアのヒントを得られます。",
    imageUrl:
      "https://placehold.jp/24/1e3a5f/ffffff/400x240.png?text=Community",
    imageAlt: "卒業後も続くコミュニティのイメージ（差し替え用）",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "仕事をしながらでも受講できますか？",
    answer:
      "はい。オンライン中心の構成で、仕事の合間や通勤時間を活用して学習できます。動画視聴と課題提出の期限には余裕を持たせているため、無理のないペースで進められます。",
  },
  {
    question: "未経験からでも大丈夫ですか？",
    answer:
      "はい。基礎から段階的に学べるカリキュラムです。現役プロによる解説と実践課題で、未経験の方でも「一生モノ」のスキルを身につけられるよう設計しています。",
  },
  {
    question: "サポート体制はありますか？",
    answer:
      " Slackや質問チャネルで、講師・メンターにいつでも質問できます。また、卒業後もコミュニティを通じて学びを継続できる環境を用意しています。",
  },
  {
    question: "修了後のキャリア支援はありますか？",
    answer:
      "修了証の発行に加え、コミュニティ内での情報共有や、キャリア相談の機会を設けています。転職や副業のヒントも得やすい環境です。",
  },
] as const;

export const metadata = {
  title: "個人向け｜一生モノの学び",
  description:
    "今のスキルに、確信を。仕事の合間に最短ルートで学べる、ゼフィロス提案の教育プログラム。現役プロ監修・実践アウトプット・卒業後コミュニティで、あなたの市場価値を高めます。",
  openGraph: {
    title: "個人向け｜ZEPHYROS 一生モノの学び",
    description:
      "今のスキルに、確信を。ゼフィロスが提案する個人向け教育プログラム。無料資料請求受付中。",
    url: "/b2c",
  },
};

export default function B2cPage() {
  return (
    <main className="overflow-x-hidden">
      <LpHero
        catchCopy={MAIN_COPY}
        subCopy={SUB_COPY}
        ctaLabel="無料で資料を受け取る"
        ctaHref="#cta"
      />

      <LpSection variant="white" id="strengths">
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-zephyros-navy text-center mb-4 md:mb-6">
            ゼフィロスで叶う、3つの強み
          </h2>
          <p className="text-foreground/80 text-center max-w-2xl mx-auto mb-10 md:mb-12">
            「一生モノ」の学びを、最短ルートで。信頼のカリキュラムと環境で、あなたの市場価値を高めます。
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 list-none p-0 m-0">
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
                    <CardHeader>
                      <div className="mb-2">
                        <Icon className="size-8 text-zephyros-orange" aria-hidden />
                      </div>
                      <CardTitle className="text-zephyros-navy text-lg md:text-xl">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 text-muted-foreground text-sm md:text-base">
                      {item.description}
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </LpAnimateSection>
      </LpSection>

      <LpSection variant="light" id="faq" className="bg-slate-50">
        <LpAnimateSection>
          <h2 className="text-2xl md:text-3xl font-bold text-zephyros-navy text-center mb-4 md:mb-6">
            よくある質問
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-zephyros-navy font-medium hover:no-underline hover:text-zephyros-orange">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </LpAnimateSection>
      </LpSection>

      <LpAboutUs
        messageHeading="個人の成長と挑戦を、私たちはサポートします"
        messageBody="ゼフィロスは、一人ひとりの「一生モノの学び」を大切にしています。現役プロによる監修、実践的なカリキュラム、修了後も続くコミュニティを通じて、受講者の成長と挑戦を伴走します。運営会社として、責任を持ってプログラムを提供してまいります。"
        tableRows={[
          { label: "会社名", value: "株式会社ゼフィロス" },
          { label: "代表者", value: "代表取締役 Jun Page" },
          { label: "所在地", value: "香川県高松市" },
          { label: "事業内容", value: "リーダーシップ研修・人材育成" },
        ]}
        representativeName="Jun Page"
      />

      <LpCta
        title="今のスキルに、確信を。まずは資料で内容を確認"
        description="カリキュラムの詳細・受講の流れ・料金をまとめた資料を無料でお届けします。"
        buttonLabel="無料で資料を受け取る"
        buttonHref="https://zephyros.jp/contact-us/"
      />
    </main>
  );
}
