const hre = require("hardhat");

async function main() {

  const name = "EMMANUEL CHUKWUMA";
  const age = 24;


  const message = await hre.ethers.deployContract("SimpleRegistration", [name, age]);

  await message.waitForDeployment();

  console.log(
    ` contract successfully deployed on ${message.target}`

  );
}

//0x8199a8eE572d05221c1CDB908c868435399241c4
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x75Ed4Ac64a775815999FcBf007D25AcCD72311f1