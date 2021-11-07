const chaiModule = require('chai');
const chaiEthers = require('chai-ethers').chaiEthers;
chaiModule.use(chaiEthers);
module.exports = chaiModule;