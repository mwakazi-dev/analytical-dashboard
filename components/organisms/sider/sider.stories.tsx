import type { Meta, StoryObj } from "@storybook/react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import Sider from ".";

const meta = {
  title: "Organisms/Sider",
  component: Sider,
  tags: ["autodocs"],
  parameters: {
    layout: "center",
  },
} satisfies Meta<typeof Sider>;

type Story = StoryObj<typeof meta>;

export const DefaultSider: Story = {
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
