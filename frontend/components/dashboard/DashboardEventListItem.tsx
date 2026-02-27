import { EventItem } from '@/types/event'
import React from 'react'

type EventCardProps = {
    data: EventItem
}
const colors = ['#FFB057', "#3DA7B1", "#FF6D6D"];
const graidents = ["from-red-400 to-rose-500", "from-yellow-400 to-amber-500", "from-emerald-400 to-emerald-500"]

function DashboardEventListItem({ data }: EventCardProps) {
    const bgColor = graidents[data.id % colors.length]
    return (
        <div className={`relative overflow-hidden w-full px-5 py-3 rounded text-white bg-linear-to-r ${bgColor}`}>
            {/* diagonal overlay */}
            <div className="
                pointer-events-none
                absolute inset-0
                bg-white/20
                opacity-40
                [clip-path:polygon(40%_0,100%_0,100%_100%,65%_100%)]
            " />
            {data.title} - {data.startDate}
        </div>
    )
}

export default DashboardEventListItem