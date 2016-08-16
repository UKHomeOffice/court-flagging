'use strict';

module.exports = {
   'police-force': {
    mixin: 'select',
    className: ['typeahead', 'js-hidden'],
     options: [''].concat(require('../../../assets/static_police_forces').allPoliceForces),
     legend: {
      className: 'visuallyhidden'
    },
    validate: ['required']
  },
  'asn-reference': {
    mixin: 'input-text',
    validate: ['required', 'numeric']
  },
  'originator-email': {
    mixin: 'input-text',
    validate: ['required', 'email']
  }
};
