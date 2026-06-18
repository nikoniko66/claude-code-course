"use client";

import { useState } from "react";

const faqs = [
  {
    question: "プログラミング初心者でも受講できますか？",
    answer:
      "基礎的なコードが読める方（HTML/CSS/JavaScriptやPythonのどれか1つ程度）を対象にしています。完全な初心者の方は、まず基礎プログラミング講座を終えてから受講されることをおすすめします。",
  },
  {
    question: "Anthropic APIの利用料は別途かかりますか？",
    answer:
      "はい、Claude Codeを実際に使うにはAnthropicのAPIキーが必要で、使用量に応じた利用料が別途発生します。ただし、講座中は最小限の使用でも学習できるよう設計しており、受講期間中（1〜2ヶ月）の目安は1,000〜3,000円程度です。",
  },
  {
    question: "動画の視聴期限はありますか？",
    answer:
      "一度購入いただいた動画は永久にアクセスできます。Claude Codeのアップデートに合わせてコンテンツが更新された場合も、追加費用なしでご覧いただけます。",
  },
  {
    question: "返金はどのように申請しますか？",
    answer:
      "購入日から30日以内であれば、理由を問わず全額返金対応しています。サポートメール（support@example.com）にご連絡いただければ、3営業日以内に処理いたします。",
  },
  {
    question: "法人での一括購入・請求書払いは可能ですか？",
    answer:
      "はい、5名以上のチーム向けに法人割引（最大30%オフ）と請求書払いを提供しています。お問い合わせフォームよりご連絡ください。",
  },
  {
    question: "Mac・Windowsどちらでも受講できますか？",
    answer:
      "はい、Claude Codeは主要OSに対応しており、Mac・Windows・Linuxいずれでも受講可能です。セットアップ手順はそれぞれのOSに合わせて解説しています。",
  },
  {
    question: "修了証明書は発行されますか？",
    answer:
      "プレミアムプランのみ、全カリキュラム完了後に修了証明書を発行しています。PDF形式でダウンロード可能で、LinkedInへのシェアにも対応しています。",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            よくある質問
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-start justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium text-slate-900 pr-4 text-sm sm:text-base">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform mt-0.5 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-5 border-t border-slate-100">
                  <p className="text-slate-500 text-sm leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            他にご質問がある場合は{" "}
            <a
              href="mailto:support@example.com"
              className="text-indigo-600 hover:text-indigo-500 underline"
            >
              support@example.com
            </a>{" "}
            までお気軽にどうぞ
          </p>
        </div>
      </div>
    </section>
  );
}
