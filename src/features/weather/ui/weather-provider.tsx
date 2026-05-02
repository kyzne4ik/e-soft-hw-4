import { FormStateProvider } from "@/shared/lib/context/form-state";
import { useWeather } from "../model/use-weather";
import { type ReactNode, useEffect } from "react";
import type { WeatherFormData } from "../model/types";
import { type SubmitHandler, useForm } from "@/shared/lib/hooks/use-form";
import { WeatherContext } from "../model/weather-context";

const DEFAULT_CITY = "Тюмень";

export function WeatherProvider({ children }: { children: ReactNode }) {
  const form = useForm<WeatherFormData>();

  const {
    isLoading,
    fetchData,
    fetchByCoords,
    clearGeocodingError,
    data,
    geocodingError,
    weatherError,
  } = useWeather({
    onSuccess(res) {
      console.log("response: ", res);
    },
    onError(res) {
      console.log("error: ", res);
    },
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchByCoords(position.coords.latitude, position.coords.longitude);
        },
        () => {
          fetchData(DEFAULT_CITY);
        },
      );
    } else {
      fetchData(DEFAULT_CITY);
    }
  }, [fetchData, fetchByCoords]);

  const onSubmit: SubmitHandler<WeatherFormData> = (data) => {
    if (data.city) {
      fetchData(data.city);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        data,
        isLoading,
        geocodingError,
        weatherError,
        clearGeocodingError,
      }}
    >
      <FormStateProvider value={{ isLoading, onSubmit, form }}>
        {children}
      </FormStateProvider>
    </WeatherContext.Provider>
  );
}
