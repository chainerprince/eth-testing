import Web3 from 'web3';

export const ethData = async (address:string) => { 
   // I used infura since I can't download my own local version 
   // of etherium blockchain.  
    const provider = `https://mainnet.infura.io/v3/${address}`;
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);
    const number = await web3.eth.getBlockNumber(); 
    const block = await web3.eth.getBlock(number); 
    // To get all transactions I will loop through the block.transactions
    // and get the transaction details   
    const latestTransaction = await web3.eth.getTransaction(block.transactions[block.transactions.length - 1]);
 
 return {
    latestTransaction
 }
}
