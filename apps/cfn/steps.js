'use strict';

const _ = require('lodash');
const controllers = require('hof').controllers;

module.exports = {
  '/': {
    controller: controllers.start,
    next: '/details'
  },
  '/details': {
    fields: [
      'police-force',
      'originator-email',
      'asn-reference'
    ],
    next: '/confirm',
    locals: {
      section: 'details'
    }
  },
  '/confirm': {
    controller: require('./controllers/confirm'),
    next: '/confirmation',
    config: require('./confirm-step-config'),
    locals: {
      section: 'confirm'
    }
  },
  '/confirmation': {
    backLink: false,
    clearSession: true,
    locals: {
      section: 'confirmation'
    }
  }
};
