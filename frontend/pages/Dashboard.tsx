import DashboardEventList from '@/components/dashboard/DashboardEventList'
import DashboardHero from '../components/dashboard/DahsboardHero'
import DashboardWeatherForecast from '@/components/dashboard/DashboardWeatherForecast'
import DashboardCalendar from '@/components/dashboard/DashboardCalendar'
import DashboardWeeklyOverview from '@/components/dashboard/DashboardWeeklyOverview'


export default function Dashboard() {
  return (
    <div className="h-full flex flex-col gap-5 text-slate-900 min-h-0">
      <div className="h-[200px] shrink-0">
        <DashboardHero />
      </div>

      <div className="min-h-0 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-4 shadow ring-1 ring-slate-200 min-w-0 min-h-0 overflow-auto">
          <h2 className="text-lg mb-5 font-semibold">Upcoming Events</h2>
          <DashboardEventList />
        </div>

        <div className="grid grid-cols-1 gap-5 min-w-0 min-h-0 lg:grid-rows-[auto_minmax(0,1fr)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-h-0">
            <div className="bg-white shadow rounded-2xl min-w-0 ring-1 ring-slate-200 min-h-[180px]" />

            <div className="bg-white shadow rounded-2xl p-4 ring-1 ring-slate-200 min-h-0 min-w-0">
              <div className="w-full md:aspect-square overflow-hidden">
                <DashboardCalendar />
              </div>
            </div>
          </div>

          <div className="bg-white shadow rounded-2xl p-5 ring-1 ring-slate-200 min-w-0">
            <h2 className="text-lg mb-3 font-semibold">Weekly Overview</h2>
            <div className="h-48 sm:h-56 lg:h-64">
              <DashboardWeeklyOverview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
