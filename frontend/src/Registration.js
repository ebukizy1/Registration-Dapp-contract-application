import React from "react";
import { ethers } from "ethers";
import contractABI from "./abi.json";
import { useState } from "react";
import "./Registration.css";

export const Registration = () => {
  const contractAddress = "0x75Ed4Ac64a775815999FcBf007D25AcCD72311f1";
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  const [message, setMessage] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [contractName, setContractName] = useState("");
  const [contractAge, setContractAge] = useState("");

  async function setRegistrationContractName() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.updateName(message);
        await transaction.wait();
        console.log("Message set successfully");
        setMessage("");
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  async function setRegistrationAge() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.updateAge(inputAge);
        await transaction.wait();
        console.log("Message set successfully");
        setInputAge("");
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  async function getContractDetails() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.getEntityDetails();
        setContractName(transaction.toString().split(",")[0]);
        setContractAge(transaction.toString().split(",")[1]);
        console.log(transaction);
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  return (
    <div className="input-bar">
      <div className="header">Registration Updated Form</div>
      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={setRegistrationContractName}>Set Name</button>

      <input
        type="text"
        placeholder="Enter your Age"
        value={inputAge}
        onChange={(e) => setInputAge(e.target.value)}
      />
      <button onClick={setRegistrationAge}>Set Age</button>

      <button onClick={getContractDetails}>Get Message</button>
     

      <p>contractName: {contractName}</p>
      <p>contractAge: {contractAge}</p>
      </div>

  );
};
