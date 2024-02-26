// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract SimpleGoal {
    
   string private goalSet;
    uint private yearToAchieveGoal;


  constructor(string memory _goal, uint _yearToAchievedGoal) {
        goalSet = _goal;
        yearToAchieveGoal = _yearToAchievedGoal;
    }

   function updateGoal(string memory _goal) public {
    goalSet = _goal;
    }

    function updateYear(uint _yearToAchieve) public {
        yearToAchieveGoal = _yearToAchieve;
    }

    function getEntityDetails() public view returns (string memory, uint) {
        return (goalSet, yearToAchieveGoal);
    }


}