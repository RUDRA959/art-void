import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'artist-portfolio25012026', // DO NOT do this (wrong)
    dataset: 'production',
  },
  deployment: {
    appId: 'ztj3fu3qvn72hjf2cshcvpn0',
  },
})
