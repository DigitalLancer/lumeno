export type ForecastDay = {
  date: string;
  day: {
    avgtemp_c:number;
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};

export type ForecastResponse = {
  forecast: {
    forecastday: ForecastDay[];
  };
};