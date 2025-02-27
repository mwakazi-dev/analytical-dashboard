import type { Meta, StoryObj } from "@storybook/react";

import FilterInput from ".";

const meta = {
  title: "Molecules/FilterInput",
  component: FilterInput,
  tags: ["autodocs"],
  parameters: {
    layout: "center",
  },
} satisfies Meta<typeof FilterInput>;

type Story = StoryObj<typeof meta>;

export const DefaultFilterInput: Story = {
  args: {
    fetchFilteredData: () => {},
    loading: false,
    initialValues: { dataset: "sales" },
    options: [
      { label: "Sales", value: "sales" },
      { label: "Orders", value: "orders" },
      { label: "Transactions", value: "transactions" },
    ],
  },
};

export default meta;
