import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiButton } from "./ui-button";

const meta: Meta<typeof UiButton> = {
  title: "shared/UiButton",
  component: UiButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "transparent", "danger"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Черная кнопка",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Белая кнопка",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    children: "🔍",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Удалить",
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Неактивна",
    disabled: true,
  },
};
