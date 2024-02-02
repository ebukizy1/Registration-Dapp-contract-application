Smart Contract - Registration Dapp (Test-Driven Development)
Overview
This smart contract, developed through Test-Driven Development (TDD), facilitates the updating of user names and ages on the Ethereum blockchain.

Testing
The project includes a comprehensive set of tests within the "test" folder. These tests, implemented using the Hardhat framework, rigorously validate all contract functionalities. This approach ensures the contract's robustness and correctness.

Deployment Script
The deployment script is contained in the "script.js" file. The smart contract is deployed to the Sepolia Ethereum testnet, with the resulting contract address being 0x75Ed4Ac64a775815999FcBf007D25AcCD72311f1.

Contract Verification
The contract undergoes verification using Hardhat, enhancing transparency and instilling confidence in users regarding the deployed code.

Frontend - Ethereum Message App
Project Initialization
The frontend is initialized using npx create-react-app for a swift and efficient setup.

Communication with Smart Contract
Ethereum blockchain communication is established using the ethers library, leveraging the ABI (Application Binary Interface) to interact seamlessly with the smart contract.

Functionality
updateName: Users can input a message, and the smart contract sets it on the Ethereum blockchain.
updateAge: Users can retrieve the stored message from the blockchain.
Deployment
To deploy the frontend:

Install dependencies: npm install
Start the development server: npm start
Ensure that the development environment has an Ethereum provider (e.g., MetaMask) connected to the Sepolia testnet.
This setup provides a user-friendly interface for interacting with the Ethereum blockchain while maintaining the security and integrity of the underlying smart contract..