import {Component} from 'react';
import {getOrderBook} from "../../ethereum/methods";
import {inject, observer} from "mobx-react";
import styled from 'styled-components';


@inject("Core", "Language")
@observer
export default class OrderBook extends Component {

    state = {
        orderbook : []
    }

    render() {

        const {base, trade} = this.props.Core;
        const languageJSON = this.props.Language.getLang();

        return (
            <Book id="moduleOrderBook" className="bookview">
               OrderBook Here
            </Book>
        )
    }
}

const Book = styled.div`

`
