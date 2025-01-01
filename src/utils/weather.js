const weatherCodeDescriptions = {
  1000: "Clear",
  1001: "Cloudy",
  1100: "Mostly Clear",
  1101: "Partly Cloudy",
  1102: "Mostly Cloudy",
  2000: "Fog",
  2100: "Light Fog",
  4000: "Drizzle",
  4001: "Rain",
  4200: "Light Rain",
  4201: "Heavy Rain",
  5000: "Snow",
  5001: "Flurries",
  5100: "Light Snow",
  5101: "Heavy Snow",
  6000: "Freezing Drizzle",
  6001: "Freezing Rain",
  6200: "Light Freezing Rain",
  6201: "Heavy Freezing Rain",
  7000: "Ice Pellets",
  7101: "Heavy Ice Pellets",
  7102: "Light Ice Pellets",
  8000: "Thunderstorm",
};

/**
 * Retrieves a human-readable description for a given weather code.
 * @param {number|string} code - The weather code from the API.
 * @returns {string} - The corresponding weather description or "Unknown" if not found.
 */
export function getWeatherDescription(code) {
  return weatherCodeDescriptions[code] || "Unknown";
}

/**
 * Formats an ISO date string into a readable time (e.g., "10:30 AM").
 * @param {string} isoString - The ISO date string.
 * @returns {string} - The formatted time.
 */
export function formatTime(isoString) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Enables AM/PM format
  }).format(new Date(isoString));
}

/**
 * Formats an ISO date string into a readable date (e.g., "Monday, Jan 1").
 * @param {string} isoString - The ISO date string.
 * @returns {string} - The formatted date.
 */
export function formatDate(isoString) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    month: "short",
    day: "2-digit",
  }).format(new Date(isoString));
}

/**
 * Maps weather codes to their corresponding icon names.
 * @param {number|string} weatherCode - The weather code from the API.
 * @returns {string} - The corresponding icon file name or "default" if not found.
 */
export function mapWeatherCodeToIcon(weatherCode) {
  const iconMap = {
    1000: "clear_day",
    1001: "cloudy",
    1100: "mostly_clear_day",
    1101: "partly_cloudy_day",
    1102: "mostly_cloudy",
    2000: "fog",
    2100: "fog_light",
    4000: "drizzle",
    4001: "rain",
    4200: "rain_light",
    4201: "rain_heavy",
    5000: "snow",
    5001: "flurries",
    5100: "snow_light",
    5101: "snow_heavy",
    6000: "freezing_drizzle",
    6001: "freezing_rain",
    6200: "freezing_rain_light",
    6201: "freezing_rain_heavy",
    7000: "ice_pellets",
    7101: "ice_pellets_heavy",
    7102: "ice_pellets_light",
    8000: "tstorm",
  };
  return iconMap[weatherCode] || "default"; // Return "default" if no match is found
}

/**
 * Generates the URL for the weather icon based on the given icon name.
 * @param {string} icon - The icon name (e.g., "clear_day").
 * @param {string} version - The version of the icon set to use (default: "v1").
 * @returns {string} - The URL to the weather icon.
 */
export function getIconUrl(icon, version = "v1") {
  const basePath = `/images/${version}_icons/color/`; // Use the "color" folder inside V1_icons
  return `${basePath}${icon}.svg`;
}
