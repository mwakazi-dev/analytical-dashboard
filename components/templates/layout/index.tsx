"use client";

import { FC, useEffect, useState } from "react";
import { Layout } from "antd";
import { MenuItemType } from "antd/es/menu/interface";
import {
  AppstoreOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

import { Titles } from "@/constants/titles";
import Header from "@/components/organisms/header";
import Sider from "@/components/organisms/sider";
import { StyledContent } from "@/styles/layout";
import SplashScreen from "@/components/atoms/splashscreen";

interface Props {
  children: React.ReactNode;
}

const MapRoutes: Record<string, string> = {
  1: "/",
  2: "/reports",
  3: "/settings",
};

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
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const menuClickHandler = (e: MenuItemType) => {
    setPageTitle(Titles[e?.key as string]);
    router.push(MapRoutes[e?.key as string]);
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

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return <SplashScreen />;
  }
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
