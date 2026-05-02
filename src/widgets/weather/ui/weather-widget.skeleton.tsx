import { UiBanner } from "@/shared/ui/ui-banner";
import { UiSkeleton } from "@/shared/ui/ui-skeleton";
import bannerStyles from "@/shared/ui/ui-weather-banner/ui-weather-banner.module.css";
import widgetStyles from "./weather-widget.module.css";

export function WeatherWidgetSkeleton({ onClose }: { onClose?: () => void }) {
  return (
    <UiBanner variant="weather" onClose={onClose}>
      <div className={bannerStyles.content}>
        <div className={bannerStyles.main}>
          <div className={bannerStyles.header}>
            <UiSkeleton width={150} height={28} border="4px" />
          </div>
          <div className={bannerStyles.body}>
            <div className={bannerStyles.tempWrapper}>
              <UiSkeleton width={80} height={80} border="50%" />
              <UiSkeleton width={120} height={64} border="8px" />
            </div>
            <UiSkeleton width={140} height={20} border="4px" />
          </div>
        </div>
      </div>
      <UiBanner.Footer className={bannerStyles.footer}>
        <div className={widgetStyles.formContent}>
          <div style={{ flex: 1 }}>
            <UiSkeleton height={42} border="8px" />
          </div>
          <div style={{ flex: 1 }}>
            <UiSkeleton height={42} border="8px" />
          </div>
        </div>
      </UiBanner.Footer>
    </UiBanner>
  );
}
