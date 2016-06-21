/* eslint-env node */

// mock react native
require('react-native-mock/mock');

// setup chai
const chai = require('chai');
chai.use(require('chai-enzyme')());
chai.should();
