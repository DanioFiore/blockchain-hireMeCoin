const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('a1f79e26b34cd2c11a0fd58fe7cd6fb5c6f5ef929255cc0f08f19f92d7e57d03');
const myWalletAddress = myKey.getPublic('hex');

let hireMeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
hireMeCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
hireMeCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of Danio is', hireMeCoin.getBalanceOfAddress(myWalletAddress));

