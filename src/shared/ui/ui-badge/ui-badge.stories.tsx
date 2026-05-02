import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiBadge } from "./ui-badge";

const meta: Meta<typeof UiBadge> = {
  title: "shared/UiBadge",
  component: UiBadge,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["red", "white"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Red: Story = {
  args: {
    variant: "red",
    children: "-20%",
  },
};

export const White: Story = {
  args: {
    variant: "white",
    children: "New",
  },
};
