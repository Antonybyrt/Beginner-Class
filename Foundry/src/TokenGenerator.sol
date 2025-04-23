// SPDX-License-Identifier: AGPL3.0
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenGenerator is ERC20 {

    constructor(
        string memory name,
        string memory symbol,
        address to
    ) ERC20(name, symbol) {
        _mint(to, 100 * 10 ** decimals());
    }

}