// SPDX-License-Identifier: AGPL3.0
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {TokenGenerator} from "../src/TokenGenerator.sol";

contract CounterScript is Script {
    TokenGenerator public token;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        token = new TokenGenerator("name", "NM", 0xa689465b64C77216D1351c860550F16e2c1Dcb72);

        vm.stopBroadcast();
    }
}
