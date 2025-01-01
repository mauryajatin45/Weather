import { mapWeatherCodeToIcon, getIconUrl, formatTime, formatDate, getWeatherDescription } from "./utils/weather";

export default function HourlyWeather({ data }) {
  return (
    <div className="hourly-weather">
      <h2>Hourly Forecast</h2>
      {data.map((hour, index) => {
        const currentDate = formatDate(hour.startTime);
        const previousDate = index > 0 ? formatDate(data[index - 1].startTime) : null;
        const showDate = currentDate !== previousDate;
        const iconName = mapWeatherCodeToIcon(hour.values.weatherCode);

        return (
          <div key={index} className="hourly-forecast">
            {showDate && <h3 className="date">{currentDate}</h3>}
            <div className="hour">
              <p>{formatTime(hour.startTime)}</p>
              <p>{hour.values.temperature}°C</p>
              <img
                src={getIconUrl(iconName)}
                alt={getWeatherDescription(hour.values.weatherCode)}
                onError={(e) => {
                  e.target.src = "/images/default.png";
                }}
              />
              <p>{getWeatherDescription(hour.values.weatherCode)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
