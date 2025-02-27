import type { Meta, StoryObj } from "@storybook/react";

import BarChart from ".";

const meta = {
  title: "Organisms/BarChart",
  component: BarChart,
  tags: ["autodocs"],
  parameters: {
    layout: "center",
  },
} satisfies Meta<typeof BarChart>;

type Story = StoryObj<typeof meta>;

export const DefaultBarChart: Story = {
  args: {
    data: {
      Electronics: 1200,
      Clothing: 800,
      "Home & Kitchen": 1500,
      Books: 400,
      Sports: 700,
    },
    loading: false,
    fetchFilteredData: () => {},
    title: "Sales by Category",
  },
};

export default meta;
