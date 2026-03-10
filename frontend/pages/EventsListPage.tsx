import eventsJson from "@/public/mock/event.json"
import type { EventItem } from '@/types/event'
import EventsTable from "@/components/eventslist/EventsTable";
import StatCard from "@/components/eventslist/StatCard";

export default async function EventsListPage() {
  const events = eventsJson as EventItem[]
  const upcoming = events.filter((x) => x.status === "upcoming").length;
  const completed = events.filter((x) => x.status === "completed").length;
  const cancelled = events.filter((x) => x.status === "cancelled").length;

  return (
    <div className="min-h-[calc(100vh-24px)] p-2">
      {/* Page header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Events List</h1>
          <p className="mt-1 text-sm text-slate-600">
            Etkinlikleri ara, filtrele, düzenle — dashboard tasarımına uyumlu modern tablo.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm
                       hover:bg-indigo-700 active:translate-y-[1px]"
          >
            + Add Event
          </button>
          <button
            className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200
                       hover:bg-slate-50 active:translate-y-[1px]"
          >
            Export
          </button>
        </div>
      </div>

      {/* Quick stats (dashboard'daki kart hissi) */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        <StatCard title="Total" value={events.length} accent="from-indigo-500 to-fuchsia-500" />
        <StatCard title="Today" value={upcoming} accent="from-emerald-500 to-teal-400" />
        <StatCard title="This Week" value={completed} accent="from-slate-500 to-slate-400" />
        <StatCard title="This Month" value={cancelled} accent="from-rose-500 to-red-400" />
      </div>
      <EventsTable data={events} />
    </div>
  )
}


