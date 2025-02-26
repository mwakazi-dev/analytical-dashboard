import React from "react";
import { render, waitFor } from "@testing-library/react";
import { ItemType } from "antd/es/menu/interface";

import Sider from "./index";

describe("Sider component", () => {
  const menus: ItemType[] = [
    { key: "1", label: "Menu 1" },
    { key: "2", label: "Menu 2" },
  ];

  it("renders without crashing", async () => {
    const { container } = render(<Sider menus={menus} />);
    await waitFor(() => expect(container).toBeInTheDocument());
  });

  it("renders the correct number of menu items", async () => {
    const { getAllByRole } = render(<Sider menus={menus} />);
    await waitFor(() => {
      const menuItems = getAllByRole("menuitem");
      expect(menuItems.length).toBe(menus.length);
    });
  });

  it("applies the collapsed prop correctly", async () => {
    const { container, rerender } = render(
      <Sider menus={menus} collapsed={true} />
    );

    await waitFor(() =>
      expect(
        container.querySelector(".ant-layout-sider-collapsed")
      ).toBeInTheDocument()
    );

    rerender(<Sider menus={menus} collapsed={false} />);

    await waitFor(() =>
      expect(
        container.querySelector(".ant-layout-sider-collapsed")
      ).not.toBeInTheDocument()
    );
  });
});
