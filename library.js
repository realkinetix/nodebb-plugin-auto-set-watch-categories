'use strict';

const nconf = require.main.require('nconf');
const winston = require.main.require('winston');

const meta = require.main.require('./src/meta');

const routeHelpers = require.main.require('./src/routes/helpers');

const user = require.main.require('./src/user');
const categories = require.main.require('./src/categories');

const plugin = {};

plugin.onUserCreate = async function (hookData) {

  const announcementCategory = 1;
  const publicCategory = 2;
  await user.setCategoryWatchState(hookData.user.uid, [announcementCategory], categories.watchStates.watching);
  await user.setCategoryWatchState(hookData.user.uid, [publicCategory], categories.watchStates.watching);

};

module.exports = plugin;
