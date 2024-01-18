import type {LoginPageInterface} from '@interfaces/BO/login';
import semver from 'semver';

const psVersion = process.env.PS_VERSION ?? '0.0.0';

let loginPage: LoginPageInterface;

/* eslint-disable global-require */
if (semver.gte(psVersion, '8.0.0')) {
  loginPage = require('@versions/8.0.0/pages/BO/login');
} else {
  loginPage = require('@versions/8.0.0/pages/BO/login');
}
/* eslint-enable global-require */
module.exports = loginPage;
