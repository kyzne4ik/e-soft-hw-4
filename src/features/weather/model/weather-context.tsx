import { createContext, useContext } from "react";
import type { WeatherPartialResponse } from "./use-weather";

export type WeatherContextType = {
  data: WeatherPartialResponse | null;
  isLoading: boolean;
  geocodingError: string | null;
  weatherError: string | null;
  clearGeocodingError: () => void;
};

export const WeatherContext = createContext<WeatherContextType | null>(null);

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within a WeatherProvider");
  }
  return context;
}
