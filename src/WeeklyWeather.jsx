
import { formatDate } from "./utils/weather";
import { getIconUrl } from './utils/weather';


export default function WeeklyWeather({ data }) {
  return (
    <div className="weekly-weather">
      <h2>Weekly Forecast</h2>
      <div className="weekly-forecast">
        {data.map((day, index) => (
          <div key={index} className="day">
            <p>{formatDate(day.startTime)}</p>
            <p>High: {day.values.temperatureMax}°C</p>
            <p>Low: {day.values.temperatureMin}°C</p>
            <img
              src={getIconUrl(day.values.icon)}
              alt={getWeatherDescription(day.values.weatherCode)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
