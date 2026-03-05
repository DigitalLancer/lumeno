import DashboardEventList from '@/components/dashboard/DashboardEventList'
import DashboardHero from '../components/dashboard/DahsboardHero'
import DashboardWeatherForecast from '@/components/dashboard/DashboardWeatherForecast'
import DashboardCalendar from '@/components/dashboard/DashboardCalendar'
import DashboardWeeklyOverview from '@/components/dashboard/DashboardWeeklyOverview'


 export default function Dashboard() {
  return (
    <div className="h-dvh grid grid-rows-[200px_minmax(0,1fr)] gap-5 text-slate-900 min-h-0">
      <DashboardHero />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-h-0 h-full">
        <div className="bg-white rounded-2xl min-h-0 p-4 shadow overflow-auto ring-1 ring-slate-200">
          <h2 className="text-lg mb-5 font-semibold">Upcoming Events</h2>
          <DashboardEventList />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-1 md:grid-rows-[3fr_2fr] gap-5 h-full min-h-0 min-w-65">
          <div className="grid grid-cols-2 gap-5 min-h-0">
            <div className="bg-white shadow rounded-2xl min-w-30 ring-1 ring-slate-200 min-h-0" />

            <div className="bg-white shadow rounded-2xl min-w-30 p-4 ring-1 ring-slate-200 min-h-0">
              <div className="w-full h-full flex justify-center items-center min-h-0">
                <DashboardCalendar />
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-2xl p-5 ring-1 ring-slate-200 min-h-0 flex flex-col">
            <h2 className="text-lg mb-3 font-semibold shrink-0">Weekly Overview</h2>
            <div className="flex-1 min-h-0 overflow-hidden">
              <DashboardWeeklyOverview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
