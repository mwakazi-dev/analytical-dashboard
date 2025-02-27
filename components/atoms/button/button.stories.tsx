import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "center",
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    label: "Default",
  },
};

export const LoadingButton: Story = {
  args: {
    label: "Loading",
    loading: true,
  },
};

export const DisabledButton: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

export const PrimaryButton: Story = {
  args: {
    label: "Primary",
    type: "primary",
  },
};

export default meta;
