const stats = [
  { value: "1,200+", label: "受講生数", icon: "👨‍💻" },
  { value: "40+", label: "レッスン動画", icon: "🎬" },
  { value: "4.9", label: "平均評価", icon: "⭐" },
  { value: "92%", label: "業務効率化達成率", icon: "🚀" },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl mb-1">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
