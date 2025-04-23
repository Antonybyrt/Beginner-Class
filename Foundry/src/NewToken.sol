// SPDX-License-Identifier: AGPL3.0
pragma solidity ^0.8.13;

import {TokenGenerator} from "./TokenGenerator.sol";

contract NewToken {

    function createNewToken(string memory name, string memory symbol) public returns (TokenGenerator) {
        TokenGenerator token = new TokenGenerator(name, symbol, msg.sender);

        return token;
    }

}