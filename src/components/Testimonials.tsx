const testimonials = [
  {
    name: "佐藤 健一",
    role: "フロントエンドエンジニア / 受講3ヶ月後",
    avatar: "🧑‍💻",
    stars: 5,
    text: "受講前は「AIに仕事を奪われる」と怖かったのですが、今では「AIがいなかった時代に戻りたくない」と思えるほど。コードレビューの時間が半分になり、新機能開発に集中できるようになりました。",
  },
  {
    name: "山田 美咲",
    role: "バックエンドエンジニア / 受講2ヶ月後",
    avatar: "👩‍💻",
    stars: 5,
    text: "プロンプトの書き方が体系的に学べたのが良かった。今まで「うまく動かない」と諦めていたケースも、的確な指示の出し方を知ることで解決できるようになりました。",
  },
  {
    name: "鈴木 大輔",
    role: "CTO（スタートアップ） / 受講1ヶ月後",
    avatar: "👨‍💼",
    stars: 5,
    text: "チーム全員に受けてもらいました。CLAUDE.mdの活用法やCI/CD連携など、チーム開発での実践的な内容が豊富で、導入してすぐに効果を実感できました。",
  },
  {
    name: "伊藤 裕子",
    role: "フリーランスエンジニア / 受講2ヶ月後",
    avatar: "👩‍🎨",
    stars: 5,
    text: "フリーランスとして案件数を増やすために受講しました。Claude Codeを使いこなせるようになってから、同じ品質のものを2〜3倍のスピードで納品できるようになり、収入が1.5倍になりました。",
  },
  {
    name: "中村 翔太",
    role: "プログラミング学習者（副業志望）",
    avatar: "🧑‍🎓",
    stars: 5,
    text: "プログラミング初心者に毛が生えたレベルでしたが、Claude Codeで学習スピードが格段にアップ。エラーの原因を自分で調べる力もついてきた気がします。",
  },
  {
    name: "加藤 由美",
    role: "エンジニアチームリーダー",
    avatar: "👩‍🏫",
    stars: 5,
    text: "セキュリティとコスト管理の章が特に参考になりました。チームへの導入を責任を持って進められるよう、リスク面もカバーした内容が安心感を与えてくれます。",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            受講生の声
          </h2>
          <p className="text-lg text-slate-500">
            1,200名以上の方が受講・高評価をいただいています
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50 card-hover flex flex-col"
            >
              <div className="flex mb-3">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
