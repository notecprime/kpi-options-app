const { usePlugin } = require('@nomiclabs/buidler/config')

usePlugin('@aragon/buidler-aragon')

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      url: 'http://localhost:8545',
      gas: 10000000,
      blockGasLimit: 1245000000
    },
  },
  solc: {
    version: '0.4.24',
    optimizer: {
      enabled: true,
      runs: 10000
    }
  },
  aragon: {
    appServePort: 8001,
    clientServePort: 3000,
    appSrcPath: 'app/',
    appBuildOutputPath: 'dist/',
    deployedAddresses: {
      ens: '0xe5ac265B0FFE4b47C8386D7d715f3a3f6F8fb5B9',
      daoFactory: '0xA6f48C8190be8F92A4c31aAE4756289Ef3d91477',
      apm: '0x99d601f8a1E6fDa5c898977380D3dFB4b204CB11'
    },
    hooks: require('./scripts/buidler-hooks')
  }
}
