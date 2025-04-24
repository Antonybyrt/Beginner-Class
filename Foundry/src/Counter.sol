// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.13;

contract Counter {

    error MustBeGreaterThanOne();

    uint256 public number;

    constructor() {
        number = 10;
    }

    function increment() public {
        number++;
    }

    function decrement() public {
        if(number <= 1) revert MustBeGreaterThanOne();
        number --;
    }
}
