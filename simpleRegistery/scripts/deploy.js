const hre = require("hardhat");

async function main() {

  const goal = "I WANT TO BE A PROTOCOL ENGINEER IN WEB3 SPACE";
  const yearToAchieved = 26;


  const message = await hre.ethers.deployContract("SimpleGoal", [goal, yearToAchieved]);

  await message.waitForDeployment();

  console.log(
    ` contract successfully deployed on ${message.target}`

  );
}


// 0xa94333a8181C2ffCb7B6Ad032B1F4c57997EeF36
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// For more information, visit https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify#verifying-on-sourcify
// The contract 0xa94333a8181C2ffCb7B6Ad032B1F4c57997EeF36 has already been verified on Etherscan.
// https://sepolia.etherscan.io/address/0xa94333a8181C2ffCb7B6Ad032B1F4c57997EeF36#code
