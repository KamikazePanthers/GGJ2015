var npmProperties = require('../../../package.json');

module.exports = {
  title: 'GGJ 2015 - Kamikaze Panthers',
  description: npmProperties.description,
  port: 3017,
  liveReloadPort: 3018,
  mute: false,
  showStats: true,
  size:{
      x: 960,
      y: 540
  }
};
