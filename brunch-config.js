'use strict';

exports.config = {
  paths: {
    public: 'public'
  },

  server: {
    path: 'server',
    port: 3333
  },

  modules: {
    definition: false,
    wrapper: false
  },

  plugins: {
    autoreload: {
      enabled: process.env.browsersync !== 'true'
    },
    groundskeeper: {
      console: false,
      debugger: false,
      pragmas: ['validation', 'development']
    }
  },

  files: {
    javascripts: {
      joinTo: {
        'scripts/app.js': /^app/,
        'scripts/vendor.js': /^(vendor|bower_components)/
      }
    },

    stylesheets: {
      joinTo: {
        'styles/app.css': /^(app|vendor|bower_components)/
      }
    },

    templates: {
      joinTo: 'scripts/app.js'
    }
  }
};
