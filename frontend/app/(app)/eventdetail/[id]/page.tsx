import EventDetailPage from '@/pages/EventDetailPage'

async function page({params}:{params:{id:string}}) {
  const {id}=await params;
  return (
    <div className="w-full h-dvh">
      <EventDetailPage id={id}/>
    </div>
  )
}

export default page