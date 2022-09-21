// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@opengsn/contracts/src/ERC2771Recipient.sol";
contract Box is ERC2771Recipient{
    uint256 private _value;
    address private trustedForwarder;

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    // Stores a new value in the contract
    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
    function setTrustedForwarder(address _trustedForwarder) public {
        trustedForwarder = _trustedForwarder;
    }
    function versionRecipient() external pure  returns (string memory) {
        return "1";
    }
}
