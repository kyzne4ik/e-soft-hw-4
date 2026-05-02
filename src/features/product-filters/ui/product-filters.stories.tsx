import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductFilters } from "./product-filters";

const meta: Meta<typeof ProductFilters> = {
  title: "features/ProductFilters",
  component: ProductFilters,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brands: ["Samsung", "Apple", "Sony", "LG"],
  },
};
