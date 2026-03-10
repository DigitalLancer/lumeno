"use client"

import {
    AxisModel, MarkerSettingsModel, Category, ChartComponent, DataLabel, Inject,
    Legend, LegendSeriesModel, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, TooltipSettingsModel, BarSeries, ColumnSeries, DateTime, StripLine
} from '@syncfusion/ej2-react-charts';
import { getCurrentWeekDays } from "@/lib/date"
import { formatDate } from "@/lib/date"
import { useState, useEffect } from 'react';
import type { EventItem } from '@/types/event'

type ChartPoint = { x: string; y: number; isToday: boolean }
function getWeeklyChartData(events: EventItem[]): ChartPoint[] {
    const weekDays = getCurrentWeekDays()
    const todayKey = formatDate(new Date(),"short")

    const map: Record<string, number> = {}
    for (const d of weekDays) map[formatDate(d,"short")] = 0

    for (const e of events) {
        const key = formatDate(new Date(e.startDate),"short")
        if (key in map) map[key] += 1
    }

    return weekDays.map(d => {
        const key = formatDate(d,"short")
        return { x: key, y: map[key], isToday: key === todayKey }
    })
}

function DashboardWeeklyOverview() {
    const [events, setEvents] = useState<EventItem[]>([])
    useEffect(() => {
        fetch('/mock/event.json')
            .then((r) => r.json())
            .then(setEvents)
    }, [])

    const dataSet = getWeeklyChartData(events);
    
    const weekDays = getCurrentWeekDays();

    const primaryXAxis: AxisModel = {
        valueType: "Category",
        interval: 1,
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: {
            fontFamily: "Arial",
            fontWeight: "500",
            color: "#0f172b"
        }

    }
    const primaryYAxis: AxisModel = {
        title: "Event Count",
        interval: 1,
        titleStyle: {
            fontFamily: "Arial",
            size: "14px",
            fontWeight: "500",
            color: "#0f172b"
        }
    }
    const marker: MarkerSettingsModel = { dataLabel: { visible: true } };

    const todayIndex = dataSet.findIndex(p => p.isToday)
    const colWidth = 100 / dataSet.length
    const pointRender = (args: any) => {
        if (args.point.index === todayIndex) {
            args.fill = "#cd40e3"   // today column
        } else {
            args.fill = "#3483eb"   // diğer kolonlar
        }
    }
    return (
        <div className="w-full h-full min-w-0 overflow-hidden">
            <ChartComponent id="charts" primaryXAxis={primaryXAxis}
                primaryYAxis={primaryYAxis}
                width="100%" height="120px" pointRender={pointRender}>
                <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category, DateTime, StripLine]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={dataSet} xName='x' yName='y' type='Column' columnWidth={0.4} fill='blue' />
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default DashboardWeeklyOverview