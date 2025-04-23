// SPDX-License-Identifier: AGPL3.0
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {NewToken} from "../src/NewToken.sol";

contract CounterScript is Script {
    NewToken public token;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        token = new NewToken();

        vm.stopBroadcast();
    }
}
