import web3 from './web3';
import {config} from '../static/js/config';

const contract = new web3.eth.Contract(
    config.contractAddress[0].abi,
    config.contractAddress[0].address
)


export default contract;


