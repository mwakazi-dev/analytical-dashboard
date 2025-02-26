"use client";

import { FC, useState } from "react";
import { Layout } from "antd";
import { MenuItemType } from "antd/es/menu/interface";
import {
  AppstoreOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Titles } from "@/constants/titles";
import Header from "@/components/organisms/header";
import Sider from "@/components/organisms/sider";
import { StyledContent } from "@/styles/layout";

interface Props {
  children: React.ReactNode;
}

/**
 * MainLayout is a functional component that provides the main structure of the application layout.
 * It includes a sidebar (Sider) with navigational menus and a header displaying the current page title.
 * The layout content is wrapped in StyledContent, rendering the children passed to it.
 *
 * Props:
 * - children: React.ReactNode - The main content to be displayed within the layout.
 *
 * The component maintains a state for the page title, which updates based on the selected menu item.
 * It uses Ant Design's Layout, Sider, and Content components for layout structure.
 */

const MainLayout: FC<Props> = ({ children }) => {
  const [pageTitle, setPageTitle] = useState(Titles[1]);
  const menuClickHandler = (e: MenuItemType) => {
    setPageTitle(Titles[e?.key as string]);
  };

  const menus = [
    {
      key: "1",
      label: "Overview",
      onClick: menuClickHandler,
      icon: <AppstoreOutlined />,
    },
    {
      key: "2",
      label: "Reports",
      onClick: menuClickHandler,
      icon: <BarChartOutlined />,
    },
    {
      key: "3",
      label: "Settings",
      onClick: menuClickHandler,
      icon: <SettingOutlined />,
    },
  ];
  return (
    <Layout>
      <Sider menus={menus} />
      <Layout>
        <Header title={pageTitle} />
        <StyledContent>{children}</StyledContent>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
