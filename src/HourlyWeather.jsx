import { mapWeatherCodeToIcon, getIconUrl, formatTime, formatDate, getWeatherDescription } from "./utils/weather";

export default function HourlyWeather({ data }) {
  // Get the current date
  const currentDate = formatDate(new Date());

  // Filter the data to only show the current day's hourly forecast
  const filteredData = data.filter(hour => formatDate(hour.startTime) === currentDate);

  return (
    <div className="hourly-weather">
      <div>
      <h2>Hourly Forecast</h2>
      </div>
      <div className="hourly-collection">

      
      {filteredData.map((hour, index) => {
        const currentTime = formatTime(hour.startTime);
        const iconName = mapWeatherCodeToIcon(hour.values.weatherCode);

        return (
          <div key={index} className="hourly-forecast">
            <div className="hour">
              <p>{currentTime}</p>
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
    </div>
  );
}
