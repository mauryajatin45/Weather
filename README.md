# Weather App

A simple **React**-based weather application that allows users to search for a location and view the current, hourly, and weekly weather information. The app uses the **Tomorrow.io** API for weather data and the **Open Meteo API** for geocoding locations.

## Features

- **Search for a Location**: Search for a city or location to get weather details.
- **Current Weather**: Displays the current temperature, weather condition, and an icon representing the weather.
- **Hourly Forecast**: Shows the hourly forecast for the current day.
- **Responsive Footer**: Contains links to the project's GitHub and LinkedIn profiles.

## Technologies Used

- **React**: The frontend framework for building the user interface.
- **Tomorrow.io API**: Provides current weather, hourly, and daily forecasts.
- **Open Meteo API**: Used for geocoding locations (converting city names to geographical coordinates).
- **CSS**: Custom styling for the app.
- **React Icons**: For the GitHub and LinkedIn icons in the footer.

## Installation

Follow these steps to set up and run the app locally:

### Prerequisites

- **Node.js** and **npm** installed. If you don’t have them installed, you can download and install them from the [official Node.js website](https://nodejs.org/).

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mauryajatin45/Weather.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Weather
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open the app** in your browser:
   Visit `http://localhost:5173/` to view the app running locally.

## Usage

1. **Search for a location**: Enter a city or place name in the input field.
2. **Click "Go"**: After clicking the button, the app will display the current weather, hourly forecast, and other relevant data.
3. **View hourly and current weather**: The app shows temperature, weather conditions, and corresponding icons for each time period.

## Key Components

### `Weather`
This is the main component that holds the state for the location input, weather data, and error messages. It also manages the logic for fetching weather data by calling the `fetchWeatherData` function.

### `CurrentWeather`
Displays the current temperature and weather condition, using an icon that corresponds to the weather code.

### `HourlyWeather`
Shows the hourly forecast for the current day. It filters the hourly data to only show the forecast for the current day and displays temperature and weather conditions for each hour.

### `Footer`
Displays a footer with links to the developer's [GitHub](https://github.com/mauryajatin45/Weather) and [LinkedIn](https://linkedin.com/in/mauryajatin) profiles.

## API Integration

### Tomorrow.io API

The app uses **Tomorrow.io's API** to fetch weather data. The API requires an API key, which is hardcoded in the app for development purposes. For production, it is recommended to store your API key securely using environment variables.

**Example Weather Data Request**:
```bash
https://api.tomorrow.io/v4/timelines?location={latitude},{longitude}&fields=temperature,temperatureMax,temperatureMin,weatherCode&timesteps=1h,1d&units=metric&apikey={apiKey}
```

### Open Meteo API

The app uses the **Open Meteo API** to get the latitude and longitude of a given location.

**Example Geocoding Request**:
```bash
https://geocoding-api.open-meteo.com/v1/search?name={location}
```

## Error Handling

- **Location Not Found**: If the entered location doesn't exist, the app displays an error message.
- **API Error**: If there's an issue with the weather data fetch request (e.g., invalid API key or server error), an error message will be shown.

## Contributing

Feel free to contribute by forking the repository and submitting pull requests. Here’s how to get started:

1. **Fork the repository** by clicking the "Fork" button on GitHub.
2. **Clone your forked repository**:
   ```bash
   git clone https://github.com/your-username/Weather.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
4. **Make your changes** and **commit** them:
   ```bash
   git commit -m "Description of your changes"
   ```
5. **Push to your branch**:
   ```bash
   git push origin feature-branch
   ```
6. **Create a pull request** from your branch to the `main` branch of the repository.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Tomorrow.io** for providing weather data.
- **Open Meteo** for the geocoding API.
- **React Icons** for the icons used in the footer.

## Developer Links

- **[GitHub Repository](https://github.com/mauryajatin45/Weather)**
- **[LinkedIn Profile](https://linkedin.com/in/mauryajatin)**