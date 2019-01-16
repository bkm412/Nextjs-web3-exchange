import {Component} from 'react';
import {getMyOrders} from "../../ethereum/methods";
import {inject, observer} from "mobx-react";
import styled from 'styled-components';


@inject("Core", "Language")
@observer
export default class OpenOrder extends React.Component {

    state = {
        openOrder : []
    }


    render() {
        const languageJSON = this.props.Language.getLang();


        return (
            <Order id="moduleOrderBook" className="bookview">

            </Order>
        )
    }
}

const Order = styled.div`

`
