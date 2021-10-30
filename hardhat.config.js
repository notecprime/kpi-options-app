require("@nomiclabs/hardhat-web3");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.4.24",
    localhost: {
        url: "http://localhost:8545",
        accounts: [0xa8a54b2d8197bc0b19bb8a084031be71835580a01e70a45a13babd16c9bc1563]
    }
};
