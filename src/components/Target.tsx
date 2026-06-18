const targets = [
  {
    emoji: "💼",
    title: "現役エンジニア",
    description:
      "日々の業務効率を大幅に向上させたい方。コーディング・デバッグ・ドキュメント作成の時間を半分以下にしたい方。",
  },
  {
    emoji: "🎓",
    title: "プログラミング学習者",
    description:
      "AIをうまく活用して学習を加速させたい方。スタックしがちな問題をAIで解決する方法を学びたい方。",
  },
  {
    emoji: "🚀",
    title: "スタートアップ・個人開発者",
    description:
      "小規模チームで最大限のアウトプットを出したい方。AIを活用してリソース不足を補いたい起業家・フリーランサー。",
  },
  {
    emoji: "🏢",
    title: "チームリーダー・マネージャー",
    description:
      "開発チームにAIを導入したいリーダー。ガイドラインの策定や生産性向上のための仕組みを整えたい方。",
  },
];

export default function Target() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            こんな方におすすめ
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Claude Codeは幅広いエンジニアリングの場面で活躍します
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {targets.map((target) => (
            <div
              key={target.title}
              className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-slate-50 card-hover"
            >
              <div className="text-4xl shrink-0">{target.emoji}</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">
                  {target.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {target.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-amber-50 border border-amber-200">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h4 className="font-semibold text-amber-800 mb-1">
                この講座が向かない方
              </h4>
              <p className="text-amber-700 text-sm">
                プログラミングの基礎をまったく学んだことがない方には、先にHTML/CSS/JavaScriptの基礎講座を受けることをおすすめします。Claude
                Codeを最大限に活用するには、最低限のコードが読める力が必要です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
