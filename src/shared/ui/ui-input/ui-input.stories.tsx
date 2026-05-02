import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiInput } from "./ui-input";

const meta: Meta<typeof UiInput> = {
  title: "shared/inputs/UiInput",
  component: UiInput,
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
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    placeholder: "Бeлый input",
  },
};
