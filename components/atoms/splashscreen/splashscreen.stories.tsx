import type { Meta, StoryObj } from "@storybook/react";

import SplashScreen from ".";

const meta = {
  title: "Atoms/SplashScreen",
  component: SplashScreen,
  tags: ["autodocs"],
  parameters: {
    layout: "center",
  },
} satisfies Meta<typeof SplashScreen>;

type Story = StoryObj<typeof meta>;

export const DefaultSplashScreen: Story = {
  args: {},
};

export default meta;
