import type { Meta, StoryObj } from "@storybook/react-vite";
import * as Icons from "./index";

const meta: Meta = {
  title: "shared/IconGallery",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Gallery: StoryObj = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: "20px",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      {Object.entries(Icons).map(([name, Icon]) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            padding: "16px",
            border: "1px solid #eee",
            borderRadius: "8px",
          }}
        >
          <Icon style={{ width: "24px", height: "24px" }} />
          <span
            style={{ fontSize: "12px", textAlign: "center", color: "#666" }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};
