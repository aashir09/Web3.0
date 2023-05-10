
//SPDX-License-Identifier: UNLICENSED
pragma solidity ^ 0.8.0;

contract Transcation{
    
    uint256 trasacationCount;

    event  Transfer(address from,address receviver,uint amount,string message,uint256 timestamp,string keyword);

    struct TransferStruct {
        address sender;
        address receviver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;

    }
    TransferStruct[] transcation;

    function addToBlockchain(address payable reciver,uint amount,string memory message,string memory keyword) public{
        trasacationCount += 1;
        transcation.push(TransferStruct(msg.sender,reciver,amount,message,block.timestamp,keyword));

        emit Transfer(msg.sender,reciver,amount,message,block.timestamp,keyword);
    }

    function getAllTransactions() public view returns(TransferStruct[] memory){
        return transcation;
    }

    function getTransactionCount() public view returns(uint256){

        return trasacationCount;
    }

 }