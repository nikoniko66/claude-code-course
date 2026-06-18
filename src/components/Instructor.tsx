export default function Instructor() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            講師紹介
          </h2>
        </div>

        <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-64 shrink-0 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center py-12 md:py-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-5xl">
                👨‍🏫
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-white">田中 拓海</h3>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-900/50 text-indigo-300 border border-indigo-700/50">
                  認定インストラクター
                </span>
              </div>
              <p className="text-indigo-400 text-sm mb-4">
                シニアソフトウェアエンジニア / AIツール活用エキスパート
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                SIer・スタートアップ・外資系IT企業にて10年以上のエンジニア経験を持つ。
                Claude Codeのβ版から使い続け、業務効率化・チーム導入の実績多数。
                現在は企業向けAI活用研修の講師としても活動し、累計500名以上のエンジニアを指導。
                「AIで人間の創造性を最大化する」をテーマに、実践的な活用法を発信している。
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-slate-700 rounded-xl">
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-slate-400 text-xs mt-1">年の経験</div>
                </div>
                <div className="text-center p-3 bg-slate-700 rounded-xl">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-slate-400 text-xs mt-1">指導実績</div>
                </div>
                <div className="text-center p-3 bg-slate-700 rounded-xl">
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="text-slate-400 text-xs mt-1">平均評価</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
