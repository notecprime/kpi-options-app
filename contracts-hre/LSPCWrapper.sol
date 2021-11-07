// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.0;

import "hardhat/console.sol";

import "./ILSPCreator.sol";

contract LSPCWrapper {
    event CreatedKpiOption(
        address indexed longShortPair,
        address indexed deployerAddress
    );

    string public name = "LSPCWrapper";
    address public creatorAddress = 0x9504b4ab8cd743b06074757d3B1bE3a3aF9cea10;

    function createKpiOption(
        string memory pairName,
        uint64 expirationTimestamp,
        uint256 collateralPerPair,
        bytes32 priceIdentifier,
        string memory longSynthName,
        string memory longSynthSymbol,
        string memory shortSynthName,
        string memory shortSynthSymbol,
        address collateralToken,
        address financialProductLibrary,
        bytes memory customAncillaryData
    ) public returns (address) {
        LongShortPairCreator.CreatorParams memory params = LongShortPairCreator
            .CreatorParams(
                pairName,
                expirationTimestamp,
                collateralPerPair,
                priceIdentifier,
                longSynthName,
                longSynthSymbol,
                shortSynthName,
                shortSynthSymbol,
                collateralToken,
                financialProductLibrary,
                customAncillaryData,
                0,
                7200,
                40000000000000000000
            );
        address result = LongShortPairCreator(creatorAddress)
            .createLongShortPair(params);

        require(result != address(0), "Failed to create KPI Options");

        emit CreatedKpiOption(result, msg.sender);
        return result;
    }
}
