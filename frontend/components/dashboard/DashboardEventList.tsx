import type { EventItem } from '@/types/event'
import DashboardEventListItem from './DashboardEventListItem'


export default async function DashboardEventList() {
    const data = await fetch('http://localhost:5278/api/Event')
    
    const events = await data.json() as EventItem[]

    return (
        <div className='mt-3 flex flex-col gap-5 relative pl-4'>
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-red-200 opacity-50" />
            {events.map((event, index) => (
                <DashboardEventListItem data={event} key={event.id} index={index} />
            ))}
        </div>
    )
}

