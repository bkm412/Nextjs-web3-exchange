import {Component} from 'react';
import styled from 'styled-components'
import contract from '../ethereum/contract';
import {inject, observer} from 'mobx-react';
import {Base} from '../component/global/globalComponents';
import {getOrderBook} from '../ethereum/methods'
import {Balances, OpenOrder, OrderBook, OrderEntry} from "../component/exchange/exchangeComponents";

@inject("Core")
@observer
export default class Exchange extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Base>
                <ExchangeWrapper>
                    It is Exchange
                    <OrderBook/>
                    <OpenOrder/>
                    <Balances/>
                    <OrderEntry/>
                </ExchangeWrapper>
            </Base>
        )
    }
}

const ExchangeWrapper = styled.div`
`
