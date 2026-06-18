const plans = [
  {
    name: "ベーシック",
    price: "¥9,800",
    originalPrice: null,
    period: "買い切り",
    description: "Claude Codeを基礎から学びたい方向け",
    features: [
      "全40+レッスン動画（永久アクセス）",
      "ソースコード・資料ダウンロード",
      "コミュニティフォーラムへのアクセス",
      "30日間返金保証",
    ],
    notIncluded: ["質問サポート", "添削・フィードバック", "ライブセッション参加"],
    cta: "ベーシックで始める",
    highlighted: false,
  },
  {
    name: "スタンダード",
    price: "¥19,800",
    originalPrice: "¥29,800",
    period: "買い切り",
    description: "しっかりサポートを受けながら学びたい方向け",
    features: [
      "全40+レッスン動画（永久アクセス）",
      "ソースコード・資料ダウンロード",
      "コミュニティフォーラムへのアクセス",
      "30日間返金保証",
      "質問サポート（無制限・48h以内回答）",
      "月1回のライブQ&Aセッション参加権",
    ],
    notIncluded: ["添削・フィードバック"],
    cta: "スタンダードで始める",
    highlighted: true,
    badge: "人気No.1",
  },
  {
    name: "プレミアム",
    price: "¥39,800",
    originalPrice: null,
    period: "買い切り",
    description: "最短・最速でスキルを習得したい方向け",
    features: [
      "全40+レッスン動画（永久アクセス）",
      "ソースコード・資料ダウンロード",
      "コミュニティフォーラムへのアクセス",
      "30日間返金保証",
      "質問サポート（無制限・24h以内回答）",
      "毎週のライブQ&Aセッション参加権",
      "課題コードの個別添削（月2回）",
      "修了証書の発行",
    ],
    notIncluded: [],
    cta: "プレミアムで始める",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            料金プラン
          </h2>
          <p className="text-lg text-slate-500">
            全プラン30日間返金保証つき。まずは気軽に試してみてください。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-indigo-600 border-indigo-500 shadow-xl shadow-indigo-600/20 relative"
                  : "bg-white border-slate-200"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-1 ${
                    plan.highlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-indigo-200" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                {plan.originalPrice && (
                  <div
                    className={`text-sm line-through mb-1 ${
                      plan.highlighted ? "text-indigo-300" : "text-slate-400"
                    }`}
                  >
                    {plan.originalPrice}
                  </div>
                )}
                <div
                  className={`text-4xl font-bold ${
                    plan.highlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.price}
                </div>
                <div
                  className={`text-sm mt-1 ${
                    plan.highlighted ? "text-indigo-200" : "text-slate-500"
                  }`}
                >
                  {plan.period}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-indigo-200" : "text-indigo-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={
                        plan.highlighted ? "text-indigo-100" : "text-slate-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.notIncluded.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm opacity-50"
                  >
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-indigo-300" : "text-slate-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span
                      className={
                        plan.highlighted ? "text-indigo-200" : "text-slate-500"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block w-full py-3 px-6 rounded-xl text-center font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-500"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          ※ 表示価格は税込みです。法人向け請求書払いも対応しています。お問い合わせください。
        </p>
      </div>
    </section>
  );
}
