'use strict';

/**
 * transporter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transporter.transporter');
