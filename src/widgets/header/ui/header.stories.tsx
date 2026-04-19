import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "widgets/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cartItemsCount: 2,
  },
};

export const EmptyCart: Story = {
  args: {
    cartItemsCount: 0,
  },
};
