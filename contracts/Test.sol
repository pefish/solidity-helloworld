// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {

    string public word;

    function say() external view returns (string memory) {
        return word;
    }

    function setWord(string memory _word) external {
        word = _word;
    }

}
