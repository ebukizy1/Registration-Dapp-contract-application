import React from "react";
import { ethers } from "ethers";
import contractABI from "./abi.json";
import { useState } from "react";
import "./Registration.css";

export const Registration = () => {
  const contractAddress = "0xdAC15662B0894Fa834F79fA9178De30b4b80A055";
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
        const transaction = await contract.updateGoal(message);
        await transaction.wait();
        console.log("Goal set successfully");
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
        const transaction = await contract.updateYear(inputAge);
        await transaction.wait();
        console.log("Message set successfully");
        setInputAge("");
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  async function getEntityDetails () {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
      try {
        const details = await contract.getEntityDetails();
        const [goal, year] = details;
        setContractName(goal)
        setContractAge(year)
      } catch (err) {
        console.error('Error:', err);
      }
    }
  }
  
  return (
    <div className="input-bar">
      <div className="header">GOAL SETTING FORM</div>
      <input
        type="text"
        placeholder="Enter your goal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={setRegistrationContractName}>SET GOAL</button>

      <input
        type="text"
        placeholder="Enter your year to accomplish goal"
        value={inputAge}
        onChange={(e) => setInputAge(e.target.value)}
      />
      <button onClick={setRegistrationAge}>SET YEAR</button>


      <button onClick={getEntityDetails}>GET GOALS</button>
     

      <p>GOAL SET: {contractName}</p>
      <p>YEAR TO ACCOMPLISH: {contractAge}</p>
      </div>

  );
};
