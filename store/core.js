import {action, observable} from 'mobx';
import contract from '../ethereum/contract';
import web3 from '../ethereum/web3';

class Core {
    @observable base;
    @observable trade;

    @action.bound
    setBase = (base) => {
        this.base = base;
    }

    @action.bound
    setTrade = (trade) => {
        this.trade = trade;
    }


}

export default new Core();