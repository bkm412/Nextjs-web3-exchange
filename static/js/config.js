import latestABI from '../abi/20190114';
import tokenList from '../json/tokenList';

export const config = {
    basePrice: "10000000000",
    contractAddress : [{
        name : "latest",
        address : "0000000000000000000000000",
        abi : latestABI
    }],
    tokenList : tokenList,
    marketList : [
        {
            base : 1,
            trade : [2,3,4]
        },
        {
            base : 2,
            trade : [3,4]
        }
    ],
    dbUrl : "https://dburl"

}