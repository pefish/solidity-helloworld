const Test = artifacts.require("Test");
import Web3 from "web3"

declare var web3: Web3;

module.exports = async function (deployer,network, accounts) {
  await deployer.deploy(Test);
} as Truffle.Migration;

export {};