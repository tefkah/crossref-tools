const path = require('path')
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin')

module.exports = (config) => {
  /**
   * The main entry for services will always look something like `{root}/services/{serviceName}/src/main.ts`
   * We can take advantage of this convention to find the service package.json file
   */
  const entry = config.entry.main[0]
  const packageJSON = require(path.join(entry.split('/src/')[0], 'package.json'))

  packageJSON.dependencies = {
    ...(packageJSON.dependencies || {}),

    // common implicit deps across all packages. service specific implicit deps should go into their respective package.json file
  }

  /**
   * The first plugin is `ForkTsCheckerWebpackPlugin` - we do not need to do type checking as part of the dev server.
   * We have other checks for this. Removing this plugin significantly reduces the resource consumption of services during development.
   */
  config.plugins.shift()

  return {
    ...config,

    plugins: [...config.plugins, new GeneratePackageJsonPlugin(packageJSON)],

    // skip minimizing but still tree shake
    optimization: {
      ...config.optimization,

      minimize: false,

      // Non-prod uses webpack cacheUnaffected setting, which cannot be used with usedExports. So only set when building for prod
      usedExports: process.env.NODE_ENV === 'production',
    },
  }
}
