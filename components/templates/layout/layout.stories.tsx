import type { Meta, StoryObj } from "@storybook/react";

import Layout from ".";
import {
  AppstoreOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

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
    menus: [
      {
        key: "1",
        label: "Overview",
        onClick: () => {
          console.log("Home");
        },
        icon: <AppstoreOutlined />,
      },
      {
        key: "2",
        label: "Reports",
        onClick: () => {},
        icon: <BarChartOutlined />,
      },
      {
        key: "3",
        label: "Settings",
        onClick: () => {},
        icon: <SettingOutlined />,
      },
    ],
  },
};

export default meta;
