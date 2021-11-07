require("@nomiclabs/hardhat-web3");
require('hardhat-deploy');
require('hardhat-deploy-ethers');

module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {
            forking: {
                url: "https://eth-mainnet.alchemyapi.io/v2/go8qtdU7Q2zXSDAwYnGZh_te-YECCZo0",
                blockNumber: 13566263
            },
            accounts: [{ privateKey: '0xa8a54b2d8197bc0b19bb8a084031be71835580a01e70a45a13babd16c9bc1563', balance: '91800000000000000000' }]
        },
        localhost: {
            url: 'http://localhost:8545',
        },
    },
    namedAccounts: {
        deployer: 0
    },
    paths: {
        artifacts: "artifacts-hre",
        sources: "contracts-hre",
        tests: "test-hre"
    }
};
