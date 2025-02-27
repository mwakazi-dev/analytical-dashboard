import type { Meta, StoryObj } from "@storybook/react";

import LineChart from ".";

const meta = {
  title: "Organisms/LineChart",
  component: LineChart,
  tags: ["autodocs"],
  parameters: {
    layout: "center",
  },
} satisfies Meta<typeof LineChart>;

type Story = StoryObj<typeof meta>;

export const DefaultBarChart: Story = {
  args: {
    data: [
      {
        date: "2023-01-01",
        sales: 100,
        orders: 50,
        transactions: 10,
      },
      {
        date: "2023-01-02",
        sales: 120,
        orders: 60,
        transactions: 30,
      },
    ],
    loading: false,
    fetchFilteredData: () => {},
    title: "Sales and Transactions",
  },
};

export default meta;
