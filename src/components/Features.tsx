const features = [
  {
    icon: "⚡",
    title: "開発速度を10倍に",
    description:
      "Claude Codeを使いこなすことで、コーディング・デバッグ・ドキュメント作成を劇的に高速化。繰り返し作業から解放されます。",
  },
  {
    icon: "🤖",
    title: "AIとの対話設計",
    description:
      "効果的なプロンプトの書き方を体系的に学習。曖昧な指示でも意図を正確に伝える技術を習得します。",
  },
  {
    icon: "🔧",
    title: "実プロジェクトで応用",
    description:
      "React・Next.js・Python等の実際のコードベースを使って演習。学んだ内容がすぐに職場で活かせます。",
  },
  {
    icon: "🛡️",
    title: "品質・セキュリティ確保",
    description:
      "AIが生成したコードのレビュー方法・テスト自動化・セキュリティチェックまで、安心して使うための知識を網羅。",
  },
  {
    icon: "🔄",
    title: "CI/CD・自動化連携",
    description:
      "GitHub Actions等と組み合わせた自動化パイプラインの構築方法を学び、チーム全体の生産性を向上させます。",
  },
  {
    icon: "📈",
    title: "キャリアに直結",
    description:
      "AI時代のエンジニアに求められるスキルセットを先取り。転職・昇給・フリーランス案件獲得に役立てましょう。",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            この講座で得られること
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Claude Codeを活用することで、あなたのエンジニアリングが根本から変わります
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-hover p-6 rounded-2xl border border-slate-100 bg-slate-50"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
