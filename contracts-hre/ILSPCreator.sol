// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.0;

abstract contract LongShortPairCreator {
    struct CreatorParams {
        string pairName;
        uint64 expirationTimestamp;
        uint256 collateralPerPair;
        bytes32 priceIdentifier;
        string longSynthName;
        string longSynthSymbol;
        string shortSynthName;
        string shortSynthSymbol;
        address collateralToken;
        address financialProductLibrary;
        bytes customAncillaryData;
        uint256 prepaidProposerReward;
        uint256 optimisticOracleLivenessTime;
        uint256 optimisticOracleProposerBond;
    }

    event CreatedLongShortPair(
        address indexed longShortPair,
        address indexed deployerAddress,
        address longToken,
        address shortToken
    );

    function createLongShortPair(CreatorParams memory params)
        public
        returns (address)
    {}
}
