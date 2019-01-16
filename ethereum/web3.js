import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://kovan.infura.io/v3/f00d7a0545114321b4b6b8ea54f4feb0'
    );
    web3 = new Web3(provider);
}


export default web3;