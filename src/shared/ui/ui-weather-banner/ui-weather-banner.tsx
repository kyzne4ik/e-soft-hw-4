import { UiBanner, type UiBannerProps } from "@/shared/ui/ui-banner";
import type { ReactNode } from "react";
import styles from "./ui-weather-banner.module.css";

export type UiWeatherBannerProps = Omit<UiBannerProps, "variant"> & {
  city?: string;
  country?: string;
  temp?: number;
  feels_like?: number;
  pressure?: number;
  humidity?: number;
  visibility?: number;
  wind_speed?: number;
  cloudDesc?: string;
  icon?: string;
  weatherError?: string | null;
  children: ReactNode;
};

export function UiWeatherBanner({
  children,
  city,
  country,
  temp,
  cloudDesc,
  icon,
  weatherError,
  ...props
}: UiWeatherBannerProps) {
  return (
    <UiBanner {...props} variant="weather">
      <div className={styles.content}>
        <div className={styles.main}>
          {city ? (
            <>
              <div className={styles.header}>
                <h2 className={styles.city}>
                  {city}, {country}
                </h2>
              </div>
              <div className={styles.body}>
                <div className={styles.tempWrapper}>
                  <img src={icon} alt={cloudDesc} className={styles.icon} />
                  <span className={styles.temp}>{Math.round(temp ?? 0)}°C</span>
                </div>
                <p className={styles.description}>{cloudDesc}</p>
              </div>
            </>
          ) : !weatherError ? (
            <h2 className={styles.city}>Enter city to see weather</h2>
          ) : null}
          {weatherError && (
            <div className={styles.errorWrapper}>
              <p className={styles.errorText}>{weatherError}</p>
            </div>
          )}
        </div>
      </div>
      <UiBanner.Footer className={styles.footer}>{children}</UiBanner.Footer>
    </UiBanner>
  );
}
