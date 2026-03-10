export default function StatCard(props: { title: string; value: number; accent: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold text-slate-700">{props.title}</div>
          <div className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{props.value}</div>
        </div>
      </div>
    </div>
  );
}