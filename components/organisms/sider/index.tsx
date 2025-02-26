"use client";

import { FC } from "react";
import { ItemType } from "antd/es/menu/interface";

import { StyledMenu, StyledSider } from "@/styles/sider";

interface Props {
  menus: ItemType[];
  collapsed?: boolean;
}
/**
 * A sidebar component that displays a menu.
 *
 * @param {ItemType[]} menus - An array of menu items.
 * @param {boolean} [collapsed] - Whether the sidebar is collapsed.
 *
 * @returns {JSX.Element} A JSX element representing a sidebar.
 */
const Sider: FC<Props> = ({ menus, collapsed }) => {
  return (
    <StyledSider
      trigger={null}
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
    >
      <StyledMenu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={menus}
      />
    </StyledSider>
  );
};

export default Sider;
