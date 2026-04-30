import { useEffect, useState } from "react";
import { UiButton } from "~shared/ui/ui-button";
import {
  CirclePause,
  CirclePlay,
  Clock,
  Close,
  Restart,
} from "~shared/ui/icons";
import styles from "./ui-register-banner.module.css";

type UiRegisterBannerProps = {
  initialSeconds?: number;
  onClose?: () => void;
};

export const UiRegisterBanner = ({
  initialSeconds = 3599, // 0:59:59
  onClose,
}: UiRegisterBannerProps) => {
  const [toggleTimer, setToggleTimer] = useState<boolean>(true);
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  const isTimerStop = seconds <= 0;

  useEffect(() => {
    if (!toggleTimer || isTimerStop) return;

    const interSec = setInterval(() => {
      setSeconds((prev) => prev - 1);
      console.log("time");
    }, 1000);

    return () => clearInterval(interSec);
  }, [seconds, toggleTimer, isTimerStop]);

  const restart = () => {
    setSeconds(initialSeconds);
    if (isTimerStop) {
      setToggleTimer(true);
    }
  };

  const toggle = () => {
    if (!isTimerStop) setToggleTimer((prev) => !prev);
  };

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = Math.floor(totalSeconds % 60);

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
        <Close width={20} height={20} color="var(--primary-text)" />
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
        <span className={styles.timer}>
          {!isTimerStop ? formatTime(seconds) : "таймер истёк"}
        </span>
      </div>

      <div className={styles.player}>
        <UiButton
          variant="transparent"
          className={styles.restartButton}
          onClick={restart}
          aria-label="Restart timer"
        >
          <Restart width={30} height={30} color="var(--primary-text)" />
        </UiButton>
        <UiButton
          variant="transparent"
          className={`
            ${styles.toggleButton}
            ${isTimerStop ? styles.isDisable : ""}
          `}
          style={{
            pointerEvents: isTimerStop ? "none" : "auto",
          }}
          onClick={toggle}
          aria-label="Toggle timer"
        >
          {toggleTimer ? (
            <CirclePause width={30} height={30} color="var(--primary-text)" />
          ) : (
            <CirclePlay width={30} height={30} color="var(--primary-text)" />
          )}
        </UiButton>
      </div>
    </div>
  );
};
