import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import WeeklyWeather from "./WeeklyWeather";
import Footer from "./Footer";

export default function Weather() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    const apiKey = "AlhflQbjd5mlQA7eCgFriQ7rgh238IqN";

    try {
      // Geocode the location to get latitude and longitude
      const geocodeResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          location
        )}`
      );
      const geocodeData = await geocodeResponse.json();

      if (!geocodeData?.results?.length) {
        throw new Error("Location not found.");
      }

      const { latitude, longitude } = geocodeData.results[0];

      // Fetch weather data from Tomorrow.io
      const weatherResponse = await fetch(
        `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=temperature,temperatureMax,temperatureMin,weatherCode&timesteps=1h,1d&units=metric&apikey=${apiKey}`
      );

      const weatherData = await weatherResponse.json();
      console.log("Weather API Response:", weatherData);

      // Validate timelines structure
      if (!weatherData?.data?.timelines) {
        throw new Error("Timelines data not found in API response.");
      }

      // Extract timelines data
      const hourlyTimeline = weatherData.data.timelines.find(
        (timeline) => timeline.timestep === "1h"
      );
      const dailyTimeline = weatherData.data.timelines.find(
        (timeline) => timeline.timestep === "1d"
      );

      if (!hourlyTimeline?.intervals || !dailyTimeline?.intervals) {
        throw new Error(
          "Intervals data missing for hourly or daily timelines."
        );
      }

      // Extract weather data
      const currentWeather = hourlyTimeline.intervals[0]?.values;
      const hourlyWeather = hourlyTimeline.intervals;
      const dailyWeather = dailyTimeline.intervals;

      setWeatherData({
        current: {
          temperature: currentWeather.temperature,
          weatherCode: currentWeather.weatherCode,
        },
        hourly: hourlyWeather,
        daily: dailyWeather,
      });
      setError(null);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError(err.message);
      setWeatherData(null);
    }
  };

  const handleSearch = () => {
    if (location.trim() !== "") {
      fetchWeatherData();
    }
  };

  return (
    <div className="weather-container">
      <div className="searchDiv">
        <div className="searchText">Weather App</div>
        <div className="search">
          <input
            placeholder="Search for a location..."
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={handleSearch}>Go</button>
        </div>
        <div className="searchDesc">build with React</div>
      </div>

      {error && <div className="error">{error}</div>}

      {weatherData && (
        <>
          <CurrentWeather data={weatherData.current} />
          <HourlyWeather data={weatherData.hourly} />
          {/* <WeeklyWeather data={weatherData.daily} /> */}
          <Footer/>
        </>
      )}
    </div>
  );
}
