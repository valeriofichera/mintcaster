// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Script, console} from "forge-std/Script.sol";
import {MINTCASTER} from "../src/nft.sol";

contract MINTCASTER is Script {

    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        MINTCASTER nft = new MINTCASTER(msg.sender);
        console.log("MINTCASTER NFT Contract deployed at:", address(nft));
        vm.stopBroadcast();
    }
}
;
