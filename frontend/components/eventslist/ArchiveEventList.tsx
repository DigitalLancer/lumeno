import { formatDate, formatTime } from "@/lib/date";
import type { Event, Status } from '@/types/event'

function statusMeta(status: Status) {
    switch (status) {
        case "upcoming":
            return {
                label: "Upcoming",
                badge: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
                dot: "bg-emerald-500",
            };
        case "completed":
            return {
                label: "Completed",
                badge: "bg-slate-50 text-slate-700 ring-1 ring-slate-200",
                dot: "bg-slate-500",
            };
        case "cancelled":
            return {
                label: "Cancelled",
                badge: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
                dot: "bg-rose-500",
            };

        default:
            return {
                label: status || "Unknown",
                badge: "bg-gray-50 text-gray-700 ring-1 ring-gray-200",
                dot: "bg-gray-500",
            };
    }
}

function ArchiveEventList({ data }: { data: Event[] }) {
    return (
        <div className="mt-4 overflow-hidden rounded-2xl bg-white/50 shadow-sm ring-1 ring-slate-200 grayscale-[0.5] hover:grayscale-0">
            <div className="overflow-x-auto">
                <table className="min-w-230 w-full">
                    {/* Header: Yazı rengini daha açık bir gri yaptık */}
                    <thead className="bg-slate-50/50 text-left text-xs font-medium uppercase tracking-wide text-slate-400">
                        <tr>
                            <th className="px-5 py-3">Event</th>
                            <th className="px-5 py-3">Date</th>
                            <th className="px-5 py-3">Time</th>
                            <th className="px-5 py-3">Location</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                        {data.map((e) => {
                            return (
                                <tr key={e.id} className="bg-transparent hover:bg-slate-50/50 transition-colors">
                                    {/* Başlık: Bold yerine medium ve daha açık renk */}
                                    <td className="px-5 py-4">
                                        <div className="truncate font-medium text-slate-500">
                                            {e.title}
                                        </div>
                                    </td>

                                    {/* Tarih ve Saat: text-slate-400 ile silikleştirdik */}
                                    <td className="px-5 py-4 whitespace-nowrap text-sm text-slate-400">
                                        {formatDate(new Date(e.startDate), "short")}
                                    </td>

                                    <td className="px-5 py-4 text-sm text-slate-400">
                                        <span className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-1 ring-1 ring-slate-100">
                                            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                                            {formatTime(e.startDate)}
                                        </span>
                                    </td>

                                    <td className="px-5 py-4 text-sm text-slate-400/80">
                                        {e.location ?? "—"}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ArchiveEventList