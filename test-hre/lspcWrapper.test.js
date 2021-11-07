const expect = require('./chai-setup').expect;

const hre = require('hardhat');
const { ethers, deployments, getNamedAccounts } = hre;
const { toWei, utf8ToHex, padRight } = hre.web3.utils;

describe("LSPCWrapper", function () {
    it("LSPCWrapper Can create LSP", async () => {
        await deployments.fixture(["LSPCWrapper"]);
        const wrapper = await ethers.getContract("LSPCWrapper");
        const pairName = 'UMA TVL KPI Option December 2021';
        const priceIdentifier = padRight(utf8ToHex('UMAUSD'), 64);
        await wrapper.createKpiOption(
            pairName,
            '1640966400',
            '1000000000000000000',
            priceIdentifier,
            'UMA TVL KPI Option December 2021',
            'UMA-KPI-1221',
            'UMA TVL KPI Option Short Token December 2021',
            'UMA-KPI-1221s',
            '0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828',
            '0x488211B646b909C490d942f456481BeAE52fde27',
            utf8ToHex(`Metric:TVL in UMA financial contracts measured in millions of USD,Endpoint:"https://api.umaproject.org/uma-tvl",Method:"https​://github.com/UMAprotocol/UMIPs/blob/master/Implementations/uma-tvl.md",Key:currentTvl,Interval:Updated every 10 minutes,Rounding:-6,Scaling:-6`)
        );

        const filter = wrapper.filters.CreatedKpiOption();
        const logs = await wrapper.queryFilter(filter);
        const lspAddr = logs[logs.length - 1].args.longShortPair;
        const j = require('@uma/core/build/contracts/LongShortPair.json');
        const lsp = new ethers.Contract(lspAddr, j.abi, ethers.provider);
        const result = await lsp.pairName();
        expect(result).to.equal(pairName);
    }).timeout(50000);

});