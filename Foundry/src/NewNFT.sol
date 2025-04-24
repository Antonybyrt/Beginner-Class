// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    uint256 public nextTokenId;

    constructor() ERC721("MyNFT", "MNFT") {
        _mint(msg.sender, nextTokenId);
        nextTokenId++;
    }

    function mint() public {
        _mint(msg.sender, nextTokenId);
        nextTokenId++;
    }
}
