import { WeatherForm } from "@/features/weather";
import { WeatherProvider } from "@/features/weather/ui/weather-provider";
import { useWeatherContext } from "@/features/weather/model/weather-context";
import { UiWeatherBanner } from "@/shared/ui/ui-weather-banner";
import styles from "./weather-widget.module.css";
import { useState } from "react";

import { WeatherWidgetSkeleton } from "./weather-widget.skeleton";

export function WeatherWidget() {
  return (
    <WeatherProvider>
      <BaseWeatherWidget />
    </WeatherProvider>
  );
}

function BaseWeatherWidget() {
  const [isVisible, setIsVisible] = useState(true);
  const { data, isLoading, weatherError } = useWeatherContext();

  if (!isVisible) return null;

  if (isLoading) return <WeatherWidgetSkeleton onClose={() => setIsVisible(false)} />;
  
  return (
    <UiWeatherBanner {...(data || {})} weatherError={weatherError} onClose={() => setIsVisible(false)}>
      <WeatherForm>
        <div className={styles.formContent}>
          <WeatherForm.Fields />
          <WeatherForm.SubmitButton />
        </div>
      </WeatherForm>
    </UiWeatherBanner>
  );
}
