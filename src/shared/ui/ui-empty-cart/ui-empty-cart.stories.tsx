import type { Meta, StoryObj } from "@storybook/react-vite";
import { UiEmptyCart } from "./ui-empty-cart";

const meta: Meta<typeof UiEmptyCart> = {
  title: "Shared/UiEmptyCart",
  component: UiEmptyCart,
  tags: ["autodocs"],
  argTypes: {
    onContinueShopping: { action: "clicked continue shopping" },
  },
};

export default meta;
type Story = StoryObj<typeof UiEmptyCart>;

export const Default: Story = {
  args: {},
};
