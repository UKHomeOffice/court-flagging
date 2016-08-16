'use strict';
var _ = require('underscore');

var policeForceEmailAddresses = [
  { value: 'Avon and Somerset',   email: 'doNotUse-AvonandSomerset@homeoffice.gsi.gov.uk'},
  { value: 'Bedfordshire',        email: 'doNotUse-Bedfordshire@homeoffice.gsi.gov.uk'},
  { value: 'British Transport Police', email: 'doNotUse-BritishTransportPolice@homeoffice.gsi.gov.uk'},
  { value: 'Cambridgeshire',      email: 'doNotUse-Cambridgeshire@homeoffice.gsi.gov.uk'},
  { value: 'Cheshire',            email: 'doNotUse-Cheshire@homeoffice.gsi.gov.uk'},
  { value: 'City of London',      email: 'doNotUse-CityofLondon@homeoffice.gsi.gov.uk'},
  { value: 'Cleveland',           email: 'doNotUse-Cleveland@homeoffice.gsi.gov.uk'},
  { value: 'Cumbria',             email: 'doNotUse-Cumbria@homeoffice.gsi.gov.uk'},
  { value: 'Derbyshire',          email: 'doNotUse-Derbyshire@homeoffice.gsi.gov.uk'},
  { value: 'Devon and Cornwall',  email: 'doNotUse-DevonandCornwall@homeoffice.gsi.gov.uk'},
  { value: 'Dorset',              email: 'doNotUse-Dorset@homeoffice.gsi.gov.uk'},
  { value: 'Durham',              email: 'doNotUse-Durham@homeoffice.gsi.gov.uk'},
  { value: 'Dyfed-Powys',         email: 'doNotUse-Dyfed-Powys@homeoffice.gsi.gov.uk'},
  { value: 'Essex',               email: 'doNotUse-Essex@homeoffice.gsi.gov.uk'},
  { value: 'Gloucestershire',     email: 'doNotUse-Gloucestershire@homeoffice.gsi.gov.uk'},
  { value: 'Greater Manchester',  email: 'doNotUse-GreaterManchester@homeoffice.gsi.gov.uk'},
  { value: 'Gwent',               email: 'doNotUse-Gwent@homeoffice.gsi.gov.uk'},
  { value: 'Hampshire',           email: 'doNotUse-Hampshire@homeoffice.gsi.gov.uk'},
  { value: 'Hertfordshire',       email: 'doNotUse-Hertfordshire@homeoffice.gsi.gov.uk'},
  { value: 'Humberside',          email: 'doNotUse-Humberside@homeoffice.gsi.gov.uk'},
  { value: 'Kent',                email: 'doNotUse-Kent@homeoffice.gsi.gov.uk'},
  { value: 'Lancashire',          email: 'doNotUse-Lancashire@homeoffice.gsi.gov.uk'},
  { value: 'Leicestershire',      email: 'doNotUse-Leicestershire@homeoffice.gsi.gov.uk'},
  { value: 'Lincolnshire',        email: 'doNotUse-Lincolnshire@homeoffice.gsi.gov.uk'},
  { value: 'Merseyside',          email: 'doNotUse-Merseyside@homeoffice.gsi.gov.uk'},
  { value: 'Metropolitan Police', email: 'doNotUse-MetropolitanPolice@homeoffice.gsi.gov.uk'},
  { value: 'Norfolk',             email: 'doNotUse-Norfolk@homeoffice.gsi.gov.uk'},
  { value: 'North Wales',         email: 'doNotUse-NorthWales@homeoffice.gsi.gov.uk'},
  { value: 'North Yorkshire',     email: 'doNotUse-NorthYorkshire@homeoffice.gsi.gov.uk'},
  { value: 'Northamptonshire',    email: 'doNotUse-Northamptonshire@homeoffice.gsi.gov.uk'},
  { value: 'Northumbria',         email: 'doNotUse-Northumbria@homeoffice.gsi.gov.uk'},
  { value: 'Nottinghamshire',     email: 'doNotUse-Nottinghamshire@homeoffice.gsi.gov.uk'},
  { value: 'Police Service of Northern Ireland', email: 'doNotUse-PoliceServiceofNorthernIreland@homeoffice.gsi.gov.uk'},
  { value: 'South Wales',         email: 'doNotUse-SouthWales@homeoffice.gsi.gov.uk'},
  { value: 'South Yorkshire',     email: 'doNotUse-SouthYorkshire@homeoffice.gsi.gov.uk'},
  { value: 'Staffordshire',       email: 'doNotUse-Staffordshire@homeoffice.gsi.gov.uk'},
  { value: 'Suffolk',             email: 'doNotUse-Suffolk@homeoffice.gsi.gov.uk'},
  { value: 'Surrey',              email: 'doNotUse-Surrey@homeoffice.gsi.gov.uk'},
  { value: 'Sussex',              email: 'doNotUse-Sussex@homeoffice.gsi.gov.uk'},
  { value: 'Thames Valley',       email: 'doNotUse-ThamesValley@homeoffice.gsi.gov.uk'},
  { value: 'Warwickshire',        email: 'doNotUse-Warwickshire@homeoffice.gsi.gov.uk'},
  { value: 'West Mercia',         email: 'doNotUse-WestMercia@homeoffice.gsi.gov.uk'},
  { value: 'West Midlands',       email: 'doNotUse-WestMidlands@homeoffice.gsi.gov.uk'},
  { value: 'West Yorkshire',      email: 'doNotUse-WestYorkshire@homeoffice.gsi.gov.uk'},
  { value: 'Wiltshire',           email: 'doNotUse-Wiltshire@homeoffice.gsi.gov.uk'}

];

module.exports.allPoliceForces = _.pluck(policeForceEmailAddresses, 'value').sort();
module.exports.allPoliceForcesEmailAddresses = policeForceEmailAddresses;
