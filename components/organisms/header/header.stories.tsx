import type { Meta, StoryObj } from "@storybook/react";

import Header from ".";

const meta = {
  title: "Organisms/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "center",
  },
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;

export const DefaultHeader: Story = {
  args: {
    title: "Overview",
  },
};

export default meta;
