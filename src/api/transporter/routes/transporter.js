'use strict';

/**
 * transporter router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::transporter.transporter');
