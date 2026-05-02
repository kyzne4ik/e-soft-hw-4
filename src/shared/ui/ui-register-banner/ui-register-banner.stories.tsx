import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiRegisterBanner } from "./ui-register-banner";

const meta: Meta<typeof UiRegisterBanner> = {
  title: "shared/UiRegisterBanner",
  component: UiRegisterBanner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialSeconds: 3230,
  },
};
