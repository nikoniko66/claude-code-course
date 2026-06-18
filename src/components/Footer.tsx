export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white font-semibold">Claude Code 講座</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              AIコーディングツール「Claude Code」を基礎から実践まで徹底解説。
              現場で使えるスキルをゼロから身につけましょう。
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">コンテンツ</h4>
            <ul className="space-y-2">
              {["特徴", "カリキュラム", "講師紹介", "受講生の声", "料金プラン", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">サポート</h4>
            <ul className="space-y-2">
              {[
                "お問い合わせ",
                "返金ポリシー",
                "利用規約",
                "プライバシーポリシー",
                "特定商取引法",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © 2025 Claude Code 完全マスター講座. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            ※ このサービスはAnthropicとは無関係の独立した講座です
          </p>
        </div>
      </div>
    </footer>
  );
}
