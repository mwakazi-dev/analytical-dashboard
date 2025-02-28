import { Layout, Menu } from "antd";
import styled from "styled-components";

const { Sider } = Layout;

export const StyledSider = styled(Sider)`
  background: #fff; /* Custom background color */
  border-inline-end: 2px solid rgba(5, 5, 5, 0.06);
  min-height: 100vh; /* Full height */
  .ant-layout-sider-trigger {
    background: red; /* Change the collapsed trigger color */
  }
`;

export const StyledMenu = styled(Menu)`
  .ant-menu-item {
    font-size: 16px;
    color: #9d9d9d;
    border-inline-end: none;
    &:hover {
      background-color: #fff !important;
      color: #000 !important;
    }
  }
  .ant-menu-item-selected {
    color: #fff;
    background-color: #287f71 !important; /* Selected item background */
  }
`;
