import type { Meta, StoryObj } from "@storybook/react";

import Logo from ".";

const meta = {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: {
    layout: "center",
  },
} satisfies Meta<typeof Logo>;

type Story = StoryObj<typeof meta>;

export const BasicLogo: Story = {
  args: {},
};

export default meta;
