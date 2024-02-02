const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Registration ", async ()=>{
  const createVotingContract = async () => {
    const name = "emmanuel";
    const age = 24;
    const [owner ] = await ethers.signer();
    const Registration =  await ethers.getContractFactory("SimpleRegistration");
    const registration = await Registration.deploy(name, age);
    return {registration , name, age, owner};
  };

  describe.only("check SimpleRegistration is created", async ()=>{
    const [registration, name, age] = loadFixture(createVotingContract);
    expect(await registration.name()).to.equal(name);
    expect(await registration.age()).to.equal(age);
    
});
  

    
})