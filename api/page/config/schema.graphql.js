const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  definition: ``,
  query: `
    pageBySlug(slug: String!, locale: String): Page
  `,
  type: {},
  resolver: {
    Query: {
      pageBySlug: {
        description: 'Return a single page by the slug',
        resolverOf: 'application::page.page.findOne',
        resolver: async (obj, { slug, locale, limit }) => {
          const entity = await strapi.services.page.findOne({ slug, _locale: locale, _limit: limit });
          return sanitizeEntity(entity, { model: strapi.models.page });
        },
      },
    },
  },
};
