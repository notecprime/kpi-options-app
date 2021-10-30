pragma solidity ^0.4.24;

import "@aragon/os/contracts/lib/math/SafeMath.sol";
import "@aragon/os/contracts/apps/AragonApp.sol";

contract KpiOptionsApp is AragonApp {
    using SafeMath for uint256;

    struct KpiParams {
        string name;
        string symbol;
        //uint256 collateralPerPair;
        //IERC20Standard collateralToken;
        //LongShortPairFinancialProductLibrary financialProductLibrary;
        //uint64 expirationTimestamp;
    }

    bytes32 public constant CREATE_KPI_ROLE = keccak256("CREATE_KPI_ROLE");

    /// Events
    event KpiOptionCreated(address indexed entity, string name);

    /// State
    uint256 public nextvalue;
    string public name;
    string public symbol;

    function initialize(uint256 _initValue) public onlyInit {
        nextvalue = _initValue;
        initialized();
    }

    /**
     * @notice Creates a new KPI Option
     * @param kpiName KPI Parameters
     * @param kpiSymbol KPI Parameters
     * @param collateralPerPair KPI Parameters
     * @param expiration KPI Parameters
     * @param fpl KPI Parameters
     * @param collateralToken KPI Parameters
     */
    function createKpiOption(
        string kpiName,
        string kpiSymbol,
        uint256 collateralPerPair,
        uint64 expiration,
        string fpl,
        string collateralToken
    ) public auth(CREATE_KPI_ROLE) returns (string) {
        require(1 == 1);
        name = kpiName;
        symbol = kpiSymbol;
        emit KpiOptionCreated(msg.sender, name);
        return name;
    }
}
