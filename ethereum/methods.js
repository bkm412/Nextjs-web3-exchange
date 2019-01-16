import contract from './contract';
import web3 from './web3';
import {config} from '../static/js/config';
import {convertPriceArray, convertVolumeArray, divideBigNumbers, multiplyBigNumbers} from '../static/js/helper';

//your function at smart contract
//example

export async function getBalance() {
    try{

        const FromAddress = await web3.eth.getAccounts();
        return await contract.methods.getBalance().call({
            from : FromAddress[0]
        });

    }catch(e) {

    }
}
