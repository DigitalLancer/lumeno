import { ForecastDay } from '@/types/weather'
import Image from 'next/image'
import React from 'react'

function getTurkishDayName(dateStr: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    weekday: "short",
  }).format(new Date(dateStr));
}

function WeatherGroup(props: ForecastDay) {
    return (
        <div className='flex flex-col items-center'>
            <div>
                {getTurkishDayName(props.date)}
            </div>
            <div>
                <Image
                    src={`https:${props.day.condition.icon}`}
                    alt={props.day.condition.text}
                    width={48}
                    height={48}
                />
            </div>
            <div>
                {props.day.avgtemp_c}°C
            </div>
        </div>
    )
}

export default WeatherGroup