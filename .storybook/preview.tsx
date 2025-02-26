import type { Preview } from "@storybook/react";
import { withTheme } from "./decorators/withTheme"; // Ensure this file exists

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
