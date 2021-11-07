/*
 * These hooks are called by the Aragon Buidler plugin during the start task's lifecycle. Use them to perform custom tasks at certain entry points of the development build process, like deploying a token before a proxy is initialized, etc.
 *
 * Link them to the main buidler config file (buidler.config.js) in the `aragon.hooks` property.
 *
 * All hooks receive two parameters:
 * 1) A params object that may contain other objects that pertain to the particular hook.
 * 2) A "bre" or BuidlerRuntimeEnvironment object that contains enviroment objects like web3, Truffle artifacts, etc.
 *
 * Please see AragonConfigHooks, in the plugin's types for further details on these interfaces.
 * https://github.com/aragon/buidler-aragon/blob/develop/src/types.ts#L22
 */

module.exports = {
  // Called before a dao is deployed.
  preDao: async ({ }, { web3, artifacts }) => { },

  // Called after a dao is deployed.
  postDao: async ({ dao }, { web3, artifacts }) => { },

  // Called after the app's proxy is created, but before it's initialized.
  preInit: async ({ proxy }, { web3, artifacts }) => { },

  // Called after the app's proxy is initialized.
  postInit: async ({ proxy }, { web3, artifacts }) => {
    // const [from] = await web3.eth.requestAccounts()

    // const finder = require('@uma/core/artifacts/contracts/oracle/implementation/Finder.sol/Finder.json');
    // const finderC = new web3.eth.Contract(finder.abi);
    // const finderResult = await finderC.deploy({ data: finder.bytecode }).send({ from });
    // console.log(finderResult.options.address)

    // const tokenFactory = require('@uma/core/artifacts/contracts/financial-templates/common/TokenFactory.sol/TokenFactory.json');
    // const tokenFC = new web3.eth.Contract(tokenFactory.abi);
    // const tokenFCResult = await tokenFC.deploy({ data: tokenFactory.bytecode }).send({ from });
    // console.log(tokenFCResult.options.address)

    // const lspc = require('@uma/core/artifacts/contracts/financial-templates/long-short-pair/LongShortPairCreator.sol/LongShortPairCreator.json')
    // const contract = new web3.eth.Contract(lspc.abi);
    // const result = await contract.deploy({ data: lspc.bytecode, arguments: [finderResult.options.address, tokenFCResult.options.address, "0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01"] }).send({ from });
    // console.log(result.options.address)

    // const erc20 = require('@openzeppelin/contracts/build/contracts/ERC20.json');
    // const erc20FC = new web3.eth.Contract(erc20.abi);
    // const erc20FCResult = await erc20FC.deploy({ data: erc20.bytecode, arguments: ['CodeBrent Token', 'CBZ'] }).send({ from });
    // console.log(erc20FCResult.options.address)

    // var c = new web3.eth.Contract(artifacts.require("ATest").abi)
    // console.log((await c.deploy({ data: artifacts.require("ATest").bytecode }).send({ from })).options.address)

  },


  // Called when the start task needs to know the app proxy's init parameters.
  // Must return an array with the proxy's init parameters.
  getInitParams: async ({ }, { web3, artifacts }) => {
    return [115];
  },

  // Called after the app's proxy is updated with a new implementation.
  postUpdate: async ({ proxy }, { web3, artifacts }) => { }
};
