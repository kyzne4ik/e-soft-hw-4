import type { Meta, StoryObj } from "@storybook/react";
import { ProductListHeader } from "./product-list-header";

const meta: Meta<typeof ProductListHeader> = {
  title: "features/ProductListHeader",
  component: ProductListHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productsCount: 20,
    sortValue: "featured",
  },
};
