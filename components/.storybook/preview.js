import '../util/main.css'
import '../util/tokens.css'

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
const customViewports = {
  kindleFire2: {
    name: "BV Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px",
    },
  },
  kindleFireHD: {
    name: "BV Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
}