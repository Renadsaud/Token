//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TuwaiqToken is ERC20{
address owner;

constructor () ERC20("TuwaiqToken", "TTA"){
_mint(msg.sender,1000*10**18);
owner = msg.sender;

}
modifier onlyOwner() {
   require(msg.sender == owner, "You Are Not The owner");
    _;
 }

function mint(address to, uint256 amount) public onlyOwner {
   require(to != address(0), "You r");
    _mint(to, amount*10**18);
}
}