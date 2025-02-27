import type { Meta, StoryObj } from "@storybook/react";

import Statistics from ".";

const meta = {
  title: "Molecules/Statistics",
  component: Statistics,
  tags: ["autodocs"],
  parameters: {
    layout: "center",
  },
} satisfies Meta<typeof Statistics>;

type Story = StoryObj<typeof meta>;

export const DefaultStatistics: Story = {
  args: {
    title: "Total Sales",
    value: 100,
    units: "$",
    precision: 2,
    growth: "stable",
    percentage: 30,
    loading: false,
    fetchFilteredData: () => {},
  },
};

export const IncreasedStatistics: Story = {
  args: {
    title: "Total Sales",
    value: 120,
    units: "$",
    precision: 2,
    growth: "increase",
    percentage: 20,
    loading: false,
    fetchFilteredData: () => {},
  },
};

export const DecreasedStatistics: Story = {
  args: {
    title: "Total Sales",
    value: 80,
    units: "$",
    precision: 2,
    growth: "decrease",
    percentage: 40,
    loading: false,
    fetchFilteredData: () => {},
  },
};
export default meta;
