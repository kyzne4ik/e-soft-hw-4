import { useState } from "react";
import { UiRegisterBanner } from "~shared/ui/ui-register-banner";

export const RegistrationBannerWidget = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <UiRegisterBanner
      initialSeconds={3599}
      onClose={() => setIsVisible(false)}
    />
  );
};
