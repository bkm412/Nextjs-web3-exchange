import {Component} from 'react';
import {getBalance} from "../../ethereum/methods";
import {inject, observer} from "mobx-react";
import styled from 'styled-components';


@inject("Core", "Language")
@observer
export default class Balances extends React.Component {

    state = {
        balances : []
    }

    componentDidMount() {
        getBalance().then(res => this.setState({balances : res}));
    }

    render() {
        const {base, trade} = this.props.Core;
        const {BUTTONS} = this.props.Language.getLang();


        return (
            <Balance>
                balance
            </Balance>
        )
    }
}

const Balance = styled.div`

`
