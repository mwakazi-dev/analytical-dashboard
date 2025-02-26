import { Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  background-color: #fff;
  border-bottom: 2px solid rgba(5, 5, 5, 0.06);
  display: flex;
  flex-direction: row;
  align-items: center;
`;
