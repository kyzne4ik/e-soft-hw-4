import type { WeatherResponse } from "@/shared/api/contracts/openweather.contract";
import { openWeatherService } from "@/shared/api/modules/openweather.service";
import { useState, useCallback, useRef, useEffect } from "react";

type UseWeatherProps<T> = {
  onSettled?: () => void;
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
};

export type WeatherPartialResponse = {
  city: string;
  country: string;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  visibility: number;
  wind_speed: number;
  cloudDesc: string;
  icon: string;
};

export function useWeather<T extends WeatherPartialResponse>({
  onSuccess,
  onError,
  onSettled,
}: UseWeatherProps<T> = {}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [geocodingError, setGeocodingError] = useState<string | null>(null);
  const [weatherError, setWeatherError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);
  const failedCities = useRef<Set<string>>(new Set());

  const abortControllerRef = useRef<AbortController | null>(null);

  const clearGeocodingError = useCallback(() => {
    setGeocodingError(null);
  }, []);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  const fetchData = useCallback(
    async (city: string) => {
      if (failedCities.current.has(city.toLowerCase())) {
        setGeocodingError(`Не удалось получить данные для города ${city} (повторно)`);
        return;
      }

      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      const signal = abortControllerRef.current.signal;

      setIsLoading(true);
      setGeocodingError(null);
      setWeatherError(null);

      try {
        const coordsRes = await openWeatherService.getCoords(city, 1, signal);
        const coord = coordsRes[0];

        if (!coord) {
          setGeocodingError(`Не удалось получить данные для города ${city}`);
          failedCities.current.add(city.toLowerCase());
          return;
        }

        try {
          const weatherRes = await openWeatherService.getWeather(
            coord.lat,
            coord.lon,
            signal,
          );
          const res = mapWeatherResponse(weatherRes);
          setData(res as T);
          onSuccess?.(res as T);
        } catch (err) {
          if (err instanceof Error && err.name === "AbortError") return;
          setData(null); 
          setWeatherError("Не удалось получить данные");
          onError?.("Failed to fetch weather");
        }
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setGeocodingError(`Не удалось получить данные для города ${city}`);
        onError?.("Failed to fetch coordinates");
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
          onSettled?.();
        }
      }
    },
    [onSuccess, onError, onSettled],
  );

  const fetchByCoords = useCallback(
    async (lat: number, lon: number) => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      const signal = abortControllerRef.current.signal;

      setIsLoading(true);
      setGeocodingError(null);
      setWeatherError(null);

      try {
        const weatherRes = await openWeatherService.getWeather(
          lat,
          lon,
          signal,
        );
        const res = mapWeatherResponse(weatherRes);
        setData(res as T);
        onSuccess?.(res as T);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setData(null); 
        setWeatherError("Не удалось получить данные");
        onError?.("Failed to fetch weather");
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
          onSettled?.();
        }
      }
    },
    [onSuccess, onError, onSettled],
  );

  return {
    data,
    fetchData,
    fetchByCoords,
    clearGeocodingError,
    isLoading,
    geocodingError,
    weatherError,
  };
}

const mapWeatherResponse = (weatherRes: WeatherResponse): WeatherPartialResponse => {
  const weatherCondition = weatherRes.weather?.[0];
  const ICON_ID = weatherCondition?.icon || "01d";
  const icon = `https://openweathermap.org/img/wn/${ICON_ID}@2x.png`;

  return {
    city: weatherRes.name,
    country: weatherRes.sys.country,
    temp: weatherRes.main.temp,
    feels_like: weatherRes.main.feels_like,
    pressure: weatherRes.main.pressure,
    humidity: weatherRes.main.humidity,
    visibility: weatherRes.visibility,
    wind_speed: weatherRes.wind.speed,
    cloudDesc: weatherCondition?.description || "No data",
    icon,
  };
};
