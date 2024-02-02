// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract SimpleRegistration {
    
   string private entityName;
    uint private entityAge;


  constructor(string memory name, uint age) {
        entityName = name;
        entityAge = age;
    }

   function updateName(string memory newName) public {
        entityName = newName;
    }

    function updateAge(uint newAge) public {
        entityAge = newAge;
    }

    function getEntityDetails() public view returns (string memory name, uint age) {
        return (entityName, entityAge);
    }


}