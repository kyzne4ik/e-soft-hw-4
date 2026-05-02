import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProductCard } from "./product-card";

const meta: Meta<typeof ProductCard> = {
  title: "entities/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockProduct = {
  id: 1,
  category: "laptop" as const,
  make: "Apple",
  model: 'MacBook Pro 14" M3 Max',
  price: 3499,
  images: [
    "https://images.unsplash.com/photo-1625296277602-a9f0b67b3a99?w=400&q=80",
    "https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80",
    "https://images.unsplash.com/photo-1625296277602-a9f0b67b3a99?w=400&q=80",
    "https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80",
    "https://images.unsplash.com/photo-1625296277602-a9f0b67b3a99?w=400&q=80",
  ],
  brand: "Apple",
  isSpecialOffer: false,
};

export const Default: Story = {
  args: {
    product: mockProduct,
    count: 0,
  },
};

export const InCart: Story = {
  args: {
    product: mockProduct,
    count: 2,
  },
};

export const SingleImage: Story = {
  args: {
    product: {
      ...mockProduct,
      images: [mockProduct.images[0]],
    },
  },
};

export const NoImage: Story = {
  args: {
    product: {
      ...mockProduct,
      images: [],
    },
  },
};

export const LongName: Story = {
  args: {
    product: {
      ...mockProduct,
      model: `Samsung 65" OLED 4K Smart TV with Quantum HDR and Ultra Wide Viewing Angle
        Samsung 65" OLED 4K Smart TV with Quantum HDR and Ultra Wide Viewing Angle Samsung 65"
        OLED 4K Smart TV with Quantum HDR and Ultra Wide Viewing Angle`,
      make: "Samsung",
      category: "tv",
    },
  },
};

export const Favorite: Story = {
  args: {
    product: mockProduct,
    isFavorite: true,
  },
};
