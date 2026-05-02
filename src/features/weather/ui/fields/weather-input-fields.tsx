import {
  UiInputWithError,
  type UiInputWithErrorProps,
} from "@/shared/ui/ui-input/ui-input";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useWeatherContext } from "../../model/weather-context";

export function WeatherInputField({
  onChange,
  isLoading,
  ...props
}: UiInputWithErrorProps & {
  isLoading: boolean;
}) {
  const { data, geocodingError, clearGeocodingError } = useWeatherContext();
  const [city, setCity] = useState<string>("");

  const [prevDataCity, setPrevDataCity] = useState(data?.city);
  const [prevGeocodingError, setPrevGeocodingError] = useState(geocodingError);

  if (data?.city !== prevDataCity) {
    setPrevDataCity(data?.city);
    if (data?.city) {
      setCity(data.city);
    }
  }

  if (geocodingError !== prevGeocodingError) {
    setPrevGeocodingError(geocodingError);
    if (geocodingError) {
      setCity("");
    }
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const val = event.target.value;
    setCity(val);
    if (geocodingError) {
      clearGeocodingError();
    }
    onChange?.(event);
  };

  return (
    <UiInputWithError
      variant="secondary"
      type="text"
      name="city"
      value={city}
      onChange={handleChange}
      disabled={isLoading}
      placeholder="Введите город"
      error={geocodingError ?? undefined}
      {...props}
    />
  );
}
