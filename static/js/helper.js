import {config} from './config'
import Web3 from 'web3';
import Decimal from 'decimal.js';
import numeral from 'numeral';

export const divideBN = (number, divisor) => {
    try {
        let result = new Decimal(number).div(new Decimal(divisor)); //BN.js does not handle deciaml places.
        return result.toDecimalPlaces(8).toString(10);
    } catch (e) {
        console.log(e);
    }
}

export const multiplyBN = (num, mul) => {
    try {
        let result = new Decimal(num).mul(new Decimal(mul));
        return result.toString(10);
    } catch (e) {
        console.log(e);
    }
}

export const addBN = (a, b) => {
    try {

        let result = new Decimal(a).add(new Decimal(b));
        return result.toString(10);
    } catch (e) {
        console.log(e);
    }
}

export const subBN = (a, b) => {
    try {
        let result = new Decimal(a).sub(new Decimal(b));
        return result.toString(10);
    } catch (e) {
        console.log(e);
    }
}


export function parseSmallNumber(num, returnNumeral = true) {
    if(num.toString().indexOf('e-') >=0){
        const number = num.toString().split('e-')[0]
        let lastNumber = number.length > 1 ? +number * 10 : +number;
        const floatPart = num.toString().split('e-')[1];
        return `0.${"0".repeat(+floatPart -1)}${lastNumber}`
    } else {
        return returnNumeral ? numeral(num).format('0,0.[00000000]') : false;
    }
}

export const instruments = config.marketList.map((o,i) => {
    const base = config.tokenList[o.base];
    return {
        address : base.address,
        decimal : base.decimal,
        productName : base.productName,
        prCode : o.base,
        tokens : o.trade.map(obj => {
            const trade = config.tokenList[obj];
            return {
                address : trade.address,
                decimal : trade.decimal,
                productName : trade.productName,
                prCode : obj,
            }
        })
    }
})