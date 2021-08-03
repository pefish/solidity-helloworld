import { TestInstance } from "../types/truffle-contracts";
import Web3 from "web3"

declare var web3: Web3;

const Test = artifacts.require("Test");

contract('Test', (accounts) => {
  let testInstance: TestInstance

  beforeEach(async function () {
    testInstance = await Test.new()
  });


  it('helloworld', async () => {
    // @ts-ignore
    let testInstanceContract: web3.eth.Contract = new web3.eth.Contract(Test.abi, testInstance.address)

    const result = await testInstanceContract.methods["say"]().call()
    // console.log(result)
    assert.equal(result.toString(), "hello world");
  });

});
