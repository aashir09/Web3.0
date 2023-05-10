const main = async() => {

  const Transcation = await hre.ethers.getContractFactory("Transcation");
  const transcation = await Transcation.deploy();

  await transcation.deployed();

  console.log(
   "Transcation deployed to ",transcation.address
  );
}

const runMain = async () =>{
  try{
      await main();
      process.exit(0)
  }catch(error){
    console.error(error);
    process.exit(1)

  }
}
runMain();