"use client";

import { useState } from "react";

const modules = [
  {
    number: "01",
    title: "Claude Codeとは何か",
    duration: "約2時間",
    lessons: [
      "Claude Codeの概要とAIコーディングの現在地",
      "インストールとセットアップ（Mac/Windows/Linux）",
      "CLIの基本操作とショートカット",
      "Anthropic APIキーの取得と設定",
    ],
  },
  {
    number: "02",
    title: "効果的なプロンプト設計",
    duration: "約3時間",
    lessons: [
      "プロンプトエンジニアリングの基礎",
      "コンテキストを正確に伝える技術",
      "段階的な指示でコードを生成する",
      "エラーメッセージを活用したデバッグ",
    ],
  },
  {
    number: "03",
    title: "実践的なコーディング",
    duration: "約4時間",
    lessons: [
      "既存コードのリファクタリング",
      "テストコードの自動生成",
      "ドキュメント・コメントの自動生成",
      "型定義・インターフェースの設計",
    ],
  },
  {
    number: "04",
    title: "フレームワーク別活用法",
    duration: "約4時間",
    lessons: [
      "Next.js App Routerとの連携",
      "Python・FastAPIでのバックエンド開発",
      "React コンポーネント設計の効率化",
      "データベーススキーマ設計とCRUD生成",
    ],
  },
  {
    number: "05",
    title: "自動化とCI/CD連携",
    duration: "約3時間",
    lessons: [
      "GitHub ActionsでClaude Codeを活用",
      "コードレビュー自動化の仕組み",
      "テスト自動化パイプラインの構築",
      "デプロイ前チェックの自動化",
    ],
  },
  {
    number: "06",
    title: "チーム開発での活用",
    duration: "約3時間",
    lessons: [
      "CLAUDE.mdによるプロジェクトルール設定",
      "チームへの導入・ガイドライン策定",
      "セキュリティリスクの管理",
      "コスト最適化とAPI利用計画",
    ],
  },
];

export default function Curriculum() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <section id="curriculum" className="bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            カリキュラム
          </h2>
          <p className="text-lg text-slate-500">
            6モジュール・40+レッスン・合計約19時間のコンテンツ
          </p>
        </div>

        <div className="space-y-3">
          {modules.map((module, index) => (
            <div
              key={module.number}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                onClick={() =>
                  setOpenModule(openModule === index ? null : index)
                }
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    {module.number}
                  </span>
                  <span className="font-semibold text-slate-900">
                    {module.title}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span className="text-sm text-slate-400 hidden sm:block">
                    {module.duration}
                  </span>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openModule === index ? "rotate-180" : ""
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
                </div>
              </button>

              {openModule === index && (
                <div className="px-6 pb-5 border-t border-slate-100">
                  <ul className="mt-4 space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li
                        key={lessonIndex}
                        className="flex items-center gap-3 text-sm text-slate-600"
                      >
                        <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 text-xs font-medium">
                          {lessonIndex + 1}
                        </div>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
