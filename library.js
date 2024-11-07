'use strict';

const nconf = require.main.require('nconf');
const winston = require.main.require('winston');

const meta = require.main.require('./src/meta');

const routeHelpers = require.main.require('./src/routes/helpers');

const user = require.main.require('./src/user');

const categories = require.main.require('./src/categories');

const plugin = {};

plugin.onUserCreate = async function ({ user }) {

  const announcementCategory = 1;
  await user.setCategoryWatchState(user.uid, [announcementCategory], categories.watchStates.watching);

};

module.exports = plugin;
