'use strict';

/**
 * teksten service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::teksten.teksten');
