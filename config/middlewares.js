// module.exports = [
//   'strapi::logger',
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];

module.exports = [
  "strapi::logger",
  "strapi::errors",

  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: false,
    },
  },

  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",

  {
    name: "strapi::session",
    config: {
      cookie: {
        secure: false,
      },
    },
  },

  "strapi::favicon",
  "strapi::public",
];
