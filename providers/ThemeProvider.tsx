import { FC } from "react";
import { ConfigProvider } from "antd";
import theme from "@/lib/theme";

interface Props {
  children: React.ReactNode;
}
const ThemeProvider: FC<Props> = ({ children }) => {
  return <ConfigProvider theme={{ ...theme }}>{children}</ConfigProvider>;
};

export default ThemeProvider;
