import { useEffect, useState } from "react";
import { UiButton } from "~shared/ui/ui-button";
import { CirclePause, CirclePlay, Clock, Restart } from "~shared/ui/icons";
import css from "./ui-register-banner.module.css";
import { UiBanner, type UiBannerProps } from "../ui-banner";
import { Flex } from "@/shared/ui/stack";
import { classNames as clsx } from "@/shared/lib/classNames";

type UiRegisterBannerProps = UiBannerProps & {
  initialSeconds?: number;
};

export const UiRegisterBanner = ({
  initialSeconds = 3599, // 0:59:59
  ...props
}: UiRegisterBannerProps) => {
  const [toggleTimer, setToggleTimer] = useState<boolean>(true);
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  const isTimerStop = seconds <= 0;

  useEffect(() => {
    if (!toggleTimer || isTimerStop) return;

    const interSec = setInterval(() => {
      setSeconds((prev) => prev - 1);
      // console.log("tick");
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
    <UiBanner
      {...props}
      classNames={{
        banner: css.banner,
      }}
    >
      <UiBanner.Header>
        <Clock width={32} height={32} />
        <h2 className={css.title}>Special Deal!</h2>
      </UiBanner.Header>
      <UiBanner.Body>
        Register now to unlock exclusive offers and discounts
      </UiBanner.Body>
      <UiBanner.Footer>
        <Flex direction="column" align="start" gap="12">
          <span className={css.expiry__container}>
            <span className={css.expiryLabel}>Offer expires in:</span>
            <span className={css.timer}>
              {!isTimerStop ? formatTime(seconds) : "таймер истёк"}
            </span>
          </span>
          <div className={css.player}>
            <UiButton
              variant="transparent"
              className={clsx(css.restartButton, { [css.highlight]: isTimerStop })}
              onClick={restart}
              aria-label="Restart timer"
            >
              <Restart width={30} height={30} color="var(--primary-text)" />
            </UiButton>
            <UiButton
              variant="transparent"
              className={`
                ${css.toggleButton}
                ${isTimerStop ? css.isDisable : ""}
              `}
              disabled={isTimerStop}
              onClick={toggle}
              aria-label="Toggle timer"
            >
              {toggleTimer ? (
                <CirclePause
                  width={30}
                  height={30}
                  color="var(--primary-text)"
                />
              ) : (
                <CirclePlay
                  width={30}
                  height={30}
                  color="var(--primary-text)"
                />
              )}
            </UiButton>
          </div>
        </Flex>
      </UiBanner.Footer>
    </UiBanner>
  );
};
