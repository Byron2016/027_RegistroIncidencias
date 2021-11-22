async function supportCssModules(config) {
  // console.log('1=================================')
  // console.log('>>>config', config.module.rules)
  // console.log('1=================================')

  config.module.rules.find(
    (rule) => rule.test.toString() === '/\\.css$/'
  ).exclude = /\.module\.css$/

  config.module.rules.push({
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
    ],
  })

  return config
}

module.exports = {
  stories: [
    '../atomDesign/**/*.stories.@(js|jsx|ts|tsx)',
    // "../ejemplos/**/*.stories.@(js|jsx|ts|tsx)",
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials', //,'storybook-css-modules-preset',
  ],
  // FIXME: Support CSS Modules for Storybook
  webpackFinal: supportCssModules,
}
