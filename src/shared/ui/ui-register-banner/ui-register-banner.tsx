import { useEffect, useState } from "react";
import { UiButton } from "~shared/ui/ui-button";
import { Clock, Close } from "~shared/ui/icons";
import styles from "./ui-register-banner.module.css";

interface UiRegisterBannerProps {
  initialSeconds?: number;
  onClose?: () => void;
}

export const UiRegisterBanner = ({
  initialSeconds = 3230, // 0:53:50
  onClose,
}: UiRegisterBannerProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${hrs}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className={styles.banner}>
      <UiButton
        variant="transparent"
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close banner"
      >
        <Close width={20} height={20} />
      </UiButton>

      <div className={styles.header}>
        <Clock width={32} height={32} />
        <h2 className={styles.title}>Special Deal!</h2>
      </div>

      <p className={styles.description}>
        Register now to unlock exclusive offers and discounts
      </p>

      <div className={styles.footer}>
        <span className={styles.expiryLabel}>Offer expires in:</span>
        <span className={styles.timer}>{formatTime(seconds)}</span>
      </div>
    </div>
  );
};
