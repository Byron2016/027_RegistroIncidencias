module.exports = {
  stories: [
    '../atomDesign/**/*.stories.@(js|jsx|ts|tsx)',
    // "../ejemplos/**/*.stories.@(js|jsx|ts|tsx)",
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
  ],
}
