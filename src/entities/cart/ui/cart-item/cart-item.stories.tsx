import type { Meta, StoryObj } from "@storybook/react-vite";
import { CartItem } from "./cart-item";

const meta: Meta<typeof CartItem> = {
  title: "Entities/Cart/CartItem",
  component: CartItem,
  tags: ["autodocs"],
  argTypes: {
    onIncrease: { action: "increased" },
    onDecrease: { action: "decreased" },
    onRemove: { action: "removed" },
  },
};

export default meta;
type Story = StoryObj<typeof CartItem>;

export const Default: Story = {
  args: {
    brand: "Vizio",
    model: 'M-Series 4K 65"',
    price: 599,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop",
  },
};

export const MultipleItems: Story = {
  args: {
    ...Default.args,
    quantity: 3,
  },
};
