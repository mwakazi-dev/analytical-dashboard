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
    id: "sales",
    title: "Total Sales",
    value: 100,
    units: "$",
  },
};

export default meta;
