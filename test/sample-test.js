const { expect } = require("chai"); 
const { ethers } = require("hardhat"); 
 
describe("token", function () { 
  it("Should ", async function () { 
    const MyToken = await ethers.getContractFactory("TuwaiqToken"); 
    const myToken = await MyToken.deploy(); 
    await myToken.deployed(); 
 
  
const [owner]= await ethers.getSigners(); 
     
     
 
    
    expect(ethers.utils.formatEther( await myToken.balanceOf(owner.address))).to.equal("1000.0"); 
     console.log(ethers.utils.formatEther(await myToken.balanceOf(owner.address))); 
     
  }); 
  it("Should mint the token", async function () { 
    const MyToken = await ethers.getContractFactory("TuwaiqToken"); 
    const myToken = await MyToken.deploy(); 
    await myToken.deployed(); 
 
  
const [owner, acc2]= await ethers.getSigners(); 
    await myToken.mint(owner.address, 100); 
     
 
    
    expect(ethers.utils.formatEther( await myToken.balanceOf(owner.address))).to.equal("1100.0"); 
     console.log(ethers.utils.formatEther(await myToken.balanceOf(owner.address))); 
 
     
     expect(ethers.utils.formatEther( await myToken.balanceOf(acc2.address))).to.equal("0.0"); 
     console.log(ethers.utils.formatEther(await myToken.balanceOf(acc2.address))); 
  }); 
  it("Should be able to transfer", async function () { 
    const MyToken = await ethers.getContractFactory("TuwaiqToken"); 
    const myToken = await MyToken.deploy(); 
    await myToken.deployed(); 
 
  
const [owner, acc2]= await ethers.getSigners(); 
   
   await myToken.transfer(acc2.address,ethers.utils.parseUnits("100", 18)); 
 
    expect(ethers.utils.formatEther( await myToken.balanceOf(owner.address))).to.equal("900.0"); 
     console.log(ethers.utils.formatEther(await myToken.balanceOf(owner.address))); 
 
     
     expect(ethers.utils.formatEther( await myToken.balanceOf(acc2.address))).to.equal("100.0"); 
     console.log(ethers.utils.formatEther(await myToken.balanceOf(acc2.address))); 
  }); 
});