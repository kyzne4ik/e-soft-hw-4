import type { ReactNode } from "react";
import { WeatherInputField } from "./fields";
import { UiButton } from "@/shared/ui/ui-button";
import type { WeatherFormData } from "../model/types";
import { useFormStateContext } from "@/shared/lib/context/form-state";
import { useWeatherContext } from "../model/weather-context";

export function WeatherForm({ children }: { children: ReactNode }) {
  const { onSubmit, form } = useFormStateContext<WeatherFormData>();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} style={{ width: "100%" }}>
      {children}
    </form>
  );
}

WeatherForm.Fields = function WeatherFormFields() {
  const { isLoading } = useWeatherContext();

  return (
    <>
      <WeatherInputField isLoading={isLoading} />
    </>
  );
};

WeatherForm.SubmitButton = function WeatherFormSubmitButton() {
  const { isLoading } = useWeatherContext();

  return (
    <UiButton
      variant="secondary"
      type="submit"
      isLoading={isLoading}
      disabled={isLoading}
    >
      Find weather
    </UiButton>
  );
};
