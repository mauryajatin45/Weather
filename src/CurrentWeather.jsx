import { mapWeatherCodeToIcon, getIconUrl, getWeatherDescription } from "./utils/weather";

export default function CurrentWeather({ data }) {
  const iconName = mapWeatherCodeToIcon(data.weatherCode);

  return (
    <div className="current-weather">
      <h2>Current Weather</h2>
      <p>Temperature: {data.temperature}°C</p>
      <p>Condition: {getWeatherDescription(data.weatherCode)}</p>
      <img
        src={getIconUrl(iconName)}
        alt={getWeatherDescription(data.weatherCode)}
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite fallback loop
          e.target.src = "/images/default.png"; // Fallback image
        }}
      />
    </div>
  );
}
