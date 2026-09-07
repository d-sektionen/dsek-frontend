export default () => ({
  meilisearch: {
    config: {
      host: process.env.MEILI_HOST,
      apiKey: process.env.MEILI_MASTER_KEY,
    },
  },
});
