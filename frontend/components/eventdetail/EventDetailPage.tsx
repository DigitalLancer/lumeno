"use client";
import { MapPin, Calendar, Tag, Clock, ArrowLeft, Pencil, Paperclip } from 'lucide-react';
import Link from 'next/link';
import { useEventById } from '@/hooks/useEvents';
import { formatDate, formatTime } from '@/lib/date';
import { useModal } from '@/context/ModalContext';

export default function EventDetailPage({ id }: { id: string }) {
  const numberId = Number(id);
  const { data, isLoading, error } = useEventById(numberId);
  const { openModal } = useModal()

  if (isLoading) return <div>Yükleniyor...</div>
  if (error) return <div>Hata oluştu!</div>
  if (!data) return <div>Etkinlik bulunamadı.</div>


  return (
    <div className="min-h-screen bg-[#fdfbf7] p-6 font-serif relative">
      <Link
        href="/eventlist"
        className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-handwriting text-xl mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to archives</span>
      </Link>

      <div className="relative w-full max-w-4xl mx-auto bg-white border-2 border-slate-900/10 p-8 md:p-12 shadow-sm rounded-[5px_30px_10px_40px/40px_10px_30px_5px]">
        <header className="mb-12 relative inline-block">
          <h1 className="relative z-10 text-3xl md:text-4xl font-handwriting text-slate-800 leading-tight">
            <span className="absolute -top-2 -left-4 -right-4 h-14 bg-indigo-200/60 z-[-1] -rotate-1 rounded-sm skew-x-[-12deg]"></span>
            {data.title}
          </h1>
          <div className="flex items-center gap-4 mt-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">{data.status}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* Tarih & Saat */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50/50 border border-yellow-100 rotate-1">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <Calendar className="text-orange-500" size={24} />
            </div>
            <div>
              <p className="font-handwriting text-xl text-slate-700">When?</p>
              <p className="font-mono text-sm text-slate-500">{formatDate(new Date(data.startDate), "long")} @ {formatTime(data.startDate)}</p>
            </div>
          </div>

          {/* Lokasyon */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100 -rotate-1">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <MapPin className="text-blue-500" size={24} />
            </div>
            <div>
              <p className="font-handwriting text-xl text-slate-700">Where?</p>
              <p className="font-mono text-sm text-slate-500">{data.location}</p>
            </div>
          </div>

          {/* Kategori */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-rose-50/50 border border-rose-100 -rotate-1">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <Tag className="text-rose-500" size={24} />
            </div>
            <div>
              <p className="font-handwriting text-xl text-slate-700">Category</p>
              <p className="font-mono text-sm text-slate-500">
                {data.category
                  ? data.category.charAt(0).toUpperCase() + data.category.slice(1)
                  : ""}
              </p>
            </div>
          </div>
          <button onClick={() => openModal("updateEvent",data.id)} className="flex items-center justify-center gap-2 p-4 bg-slate-800 text-white rounded-lg hover:scale-105 transition-transform cursor-pointer rotate-1 font-handwriting text-xl shadow-lg">
            <Pencil size={20} />
            Modify Entry
          </button>
        </div>
        <section className="relative">
          <div className="flex items-center gap-2 mb-4">
            <Paperclip size={18} className="text-slate-400 rotate-45" />
            <h3 className="font-handwriting text-xl text-slate-600 underline decoration-dashed decoration-indigo-300 underline-offset-8">Details & Notes</h3>
          </div>

          <div className="font-handwriting text-slate-700 p-4">
            {data.description}
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-dashed border-slate-500 flex justify-between items-center opacity-40 italic font-mono text-[10px]">
          <span>Last modified: 23 March 2026</span>
          <span>End of record.</span>
        </footer>
      </div>
    </div>
  );
}