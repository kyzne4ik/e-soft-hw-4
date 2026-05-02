import type { Meta, StoryObj } from "@storybook/react-vite";
import { OrderSummary } from "./order-summary";

const meta: Meta<typeof OrderSummary> = {
  title: "Features/Cart/OrderSummary",
  component: OrderSummary,
  tags: ["autodocs"],
  argTypes: {
    onCheckout: { action: "checkout started" },
    onContinueShopping: { action: "continue shopping" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OrderSummary>;

export const Default: Story = {
  args: {
    subtotal: 1398.0,
    tax: 111.84,
    total: 1509.84,
  },
};

export const SmallOrder: Story = {
  args: {
    subtotal: 99.0,
    tax: 7.92,
    total: 106.92,
  },
};
