import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiInputWithError } from "./ui-input";

const meta: Meta<typeof UiInputWithError> = {
  title: "shared/inputs/UiInputWithError",
  component: UiInputWithError,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    placeholder: "Черный input",
    error: "какая-то-ошибка",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    placeholder: "Бeлый input",
    error: "какая-то-ошибка",
  },
};
