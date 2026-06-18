export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-900/50 border border-indigo-700/50 text-indigo-300 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
              2025年最新版・完全対応
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <span className="gradient-text">Claude Code</span>
              <br />
              完全マスター講座
            </h1>

            <p className="text-lg text-slate-300 mb-4 leading-relaxed">
              AnthropicのAIコーディングツール「Claude Code」を
              <br className="hidden sm:block" />
              基礎から実践まで徹底習得。
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              プロンプト設計・自動化・チーム開発まで、
              <br className="hidden sm:block" />
              現場で即使えるスキルをゼロから身につけましょう。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#pricing"
                className="px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40"
              >
                今すぐ無料で始める →
              </a>
              <a
                href="#curriculum"
                className="px-8 py-4 text-base font-semibold text-slate-300 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:text-white transition-all"
              >
                カリキュラムを見る
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                返金保証30日間
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                永久アクセス
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                日本語サポート
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md animate-float">
              <div className="absolute inset-0 bg-indigo-600/20 rounded-2xl blur-3xl"></div>
              <div className="relative bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-slate-400 text-xs font-mono">claude-code</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-indigo-400 shrink-0">$</span>
                    <span className="text-slate-300">claude "このReactコンポーネントをリファクタリングして"</span>
                  </div>
                  <div className="text-slate-500 text-xs mb-4">⠿ 分析中...</div>
                  <div className="space-y-1 text-xs">
                    <div className="text-green-400">✓ コードを解析しました</div>
                    <div className="text-green-400">✓ 改善点を特定しました</div>
                    <div className="text-slate-400">  → カスタムフックに抽出</div>
                    <div className="text-slate-400">  → TypeScript型安全性向上</div>
                    <div className="text-slate-400">  → パフォーマンス最適化</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <div className="text-slate-500 text-xs">3ファイルを更新しました</div>
                    <div className="flex gap-2 mt-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-green-900/50 text-green-400 border border-green-800">+42行</span>
                      <span className="px-2 py-0.5 rounded text-xs bg-red-900/50 text-red-400 border border-red-800">-28行</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
