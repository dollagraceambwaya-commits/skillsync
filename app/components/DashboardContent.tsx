type StatCard = {
  title: string;
  value: number;
};

const stats: StatCard[] = [
  { title: "Total Members", value: 1250 },
  { title: "Active Projects", value: 42 },
  { title: "Opportunities Posted", value: 18 },
  { title: "Skills Shared", value: 95 },
];

export default function DashboardContent() {
  return (
    <section className="p-8">
      <h2 className="text-white text-2xl font-bold mb-6">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl"
          >
            <h3 className="text-lg font-semibold text-gray-400">
              {stat.value}
            </h3>
            <p className="text-3xl font-bold text-white mt-2 text-sm">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
