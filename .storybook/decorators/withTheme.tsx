import React from "react";
import ThemeProvider from "../../providers/ThemeProvider";
import { Decorator } from "@storybook/react";

export const withTheme: Decorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);
