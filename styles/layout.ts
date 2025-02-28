import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

export const StyledContent = styled(Content)`
  margin: 12px 20px;
  @media (min-width: 768px) {
    margin: 50px;
  }
`;
