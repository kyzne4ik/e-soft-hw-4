import type {
  WeatherResponse,
  GeoCodingResponse,
} from "../contracts/openweather.contract";

const BASE_URL = "https://api.openweathermap.org";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const openWeatherService = {
  async getCoords(
    city: string,
    limit: number = 5,
    signal?: AbortSignal,
  ): Promise<GeoCodingResponse> {
    const params = new URLSearchParams({
      q: city,
      limit: limit.toString(),
      appid: API_KEY,
    });

    const response = await fetch(`${BASE_URL}/geo/1.0/direct?${params}`, {
      signal,
    });

    if (!response.ok) throw new Error("Failed to fetch coordinates");

    return response.json();
  },

  async getWeather(
    lat: number,
    lon: number,
    signal?: AbortSignal,
  ): Promise<WeatherResponse> {
    const params = new URLSearchParams({
      lat: lat.toString(),
      lon: lon.toString(),
      appid: API_KEY,
      units: "metric",
    });

    const response = await fetch(`${BASE_URL}/data/2.5/weather?${params}`, {
      signal,
    });

    if (!response.ok) throw new Error("Failed to fetch weather data");

    return response.json();
  },
};
