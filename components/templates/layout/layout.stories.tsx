import type { Meta, StoryObj } from "@storybook/react";

import Layout from ".";

const meta = {
  title: "Templates/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

type Story = StoryObj<typeof meta>;

export const DefaultLayout: Story = {
  args: {
    children: (
      <div>
        <p>Content</p>
      </div>
    ),
  },
};

export default meta;
