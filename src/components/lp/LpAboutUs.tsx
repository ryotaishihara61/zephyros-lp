import Image from "next/image";
import { LpSection } from "@/components/lp/LpSection";
import { LpAnimateSection } from "@/components/lp/LpAnimateSection";
import { Button } from "@/components/ui/button";

export interface AboutUsTableRow {
  label: string;
  value: string;
}

interface LpAboutUsProps {
  messageHeading: string;
  messageBody: string;
  tableRows: AboutUsTableRow[];
  representativeName?: string;
}

const DEFAULT_TABLE_ROWS: AboutUsTableRow[] = [
  { label: "会社名", value: "株式会社ゼフィロス" },
  { label: "代表者", value: "代表取締役 Jun Page" },
  { label: "所在地", value: "香川県高松市" },
  { label: "事業内容", value: "リーダーシップ研修・人材育成" },
];

const ABOUT_PAGE_URL = "https://zephyros.jp/about-us/";

export function LpAboutUs({
  messageHeading,
  messageBody,
  tableRows = DEFAULT_TABLE_ROWS,
  representativeName = "Jun Page",
}: LpAboutUsProps) {
  return (
    <LpSection id="about" className="bg-slate-50 py-20 md:py-28">
      <LpAnimateSection>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10 md:mb-12">
          会社概要（About Us）
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start max-w-5xl mx-auto">
          {/* 左カラム: 代表プロフィール */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl shadow-xl overflow-hidden bg-slate-200">
              <Image
                src="/images/junpage.png"
                alt="株式会社ゼフィロス 代表取締役"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <p className="mt-4 text-slate-600 text-sm">株式会社ゼフィロス 代表取締役</p>
            <p className="mt-1 text-slate-900 font-semibold">{representativeName}</p>
          </div>

          {/* 右カラム: メッセージ・会社情報・リンク */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{messageHeading}</h3>
              <p className="text-slate-700 leading-relaxed">{messageBody}</p>
            </div>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm text-left">
                <tbody>
                  {tableRows.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-200 last:border-b-0 bg-white"
                    >
                      <th className="py-3 px-4 font-medium text-slate-600 bg-slate-50 w-32 shrink-0">
                        {row.label}
                      </th>
                      <td className="py-3 px-4 text-slate-900">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button
              asChild
              variant="outline"
              className="w-fit min-h-[44px] border-slate-300 text-slate-900 hover:bg-slate-50"
            >
              <a href={ABOUT_PAGE_URL} target="_blank" rel="noopener noreferrer">
                会社概要を見る（本体サイト）
              </a>
            </Button>
          </div>
        </div>
      </LpAnimateSection>
    </LpSection>
  );
}
