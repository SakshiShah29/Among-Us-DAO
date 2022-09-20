//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract FakeNFTMarketplace{
    //creating a mapping for each tokenid that is hold by the address
    mapping(uint256=>address) public tokens;

    //setting the value for our nft
    uint256 nftPrice=0.1 ether;

    //purchase accepts the eth and set the tokenid which was to 
    //be purchased to the caller of the function

    function purchase(uint256 tokenId) external payable{
        require(msg.value==nftPrice,"The NFT costs 0.1 ether");
        tokens[tokenId]=msg.sender;
    }

    //function that gets the price of an nft
    function getPrice() external view returns(uint256){
        return nftPrice;
    }

    //checks whether the tokenId is available for the purchase or not
    function available(uint256 tokenId)external view returns(bool){
        // address(0) = 0x0000000000000000000000000000000000000000
        // This is the default value for addresses in Solidity
        if(tokens[tokenId]== address(0)){
            return true;
        }
        return false;
    }
}