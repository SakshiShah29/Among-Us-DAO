const {ethers} =require("hardhat");
const {AMONG_US_NFT_CONTRACT_ADDRESS}=require("../constants/constants");

async function main(){
  // Deploy the FakeNFTMarketplace contract first
  const FakeNFTMarketplace=await ethers.getContractFactory("FakeNFTMarketplace");
  const fakeNftMarketplace=await FakeNFTMarketplace.deploy();
  await fakeNftMarketplace.deployed();
  console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);

  //deploying the DAO contract
  const AmongUsDAO=await ethers.getContractFactory("AmongUsDAO");
  const amongUsDAO=await AmongUsDAO.deploy(
    fakeNftMarketplace.address,
    AMONG_US_NFT_CONTRACT_ADDRESS,{
      value:ethers.utils.parseEther("0.1"),
    }
  );
  await amongUsDAO.deployed();
  console.log("AmongUsDAO deployed to :",amongUsDAO.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });