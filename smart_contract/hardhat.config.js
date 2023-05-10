//https://eth-sepolia.g.alchemy.com/v2/MRjeXihoPtejqzDlQU7XC2OXsAg_MO7h

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:'0.8.0',
  networks:{
     Sepolia:{
       url:'https://eth-sepolia.g.alchemy.com/v2/MRjeXihoPtejqzDlQU7XC2OXsAg_MO7h',
       accounts:['a7107f52f16cfedaa8374404b54007f7796b0e540846102860a9271f4ed0a2a6'],
    },
  },
};
