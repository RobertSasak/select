import { ExpoConfig, ConfigContext } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: config.name ?? 'defaultName',
  slug: config.slug ?? 'defaultSlug',
  experiments: {
    // Need to be set only when deploying to web. Otherwise it cause iOS build error.
    baseUrl: process.env.BASE_URL,
  },
})
