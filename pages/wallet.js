import {Component} from 'react';
import styled from 'styled-components';
import {DepositModal, WithdrawModal} from '../component/wallet/walletComponents';
import {getBalance} from '../ethereum/methods';
import axios from 'axios';
import {getPrivateTrades, getTradeHistory} from '../ethereum/fetchDB';
import {Base} from "../component/global/globalComponents";

export default class Wallet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            depositOpen: false,
            withdrawOpen: false,
            selectToken: "2",
            balances: []
        }
    }

    onOpenModal(type) {
        type === 'deposit' ? this.setState({depositOpen: true}) : this.setState({withdrawOpen: true});
    };

    onCloseModal() {
        this.setState({depositOpen: false, withdrawOpen: false});
    };

    render() {
        const {depositOpen, withdrawOpen, selectToken} = this.state;
        return (
            <Base>
                <WalletWrapper>
                    It is Wallet
                    <button onClick={() => this.onOpenModal('deposit')}>입금오픈</button>
                    <button onClick={() => this.onOpenModal('withdraw')}>출금오픈</button>
                    <DepositModal open={depositOpen} onClose={() => this.onCloseModal()} prCode={selectToken}/>
                    <WithdrawModal open={withdrawOpen} onClose={() => this.onCloseModal()} prCode={selectToken}/>
                </WalletWrapper>
            </Base>
        )
    }
}

const WalletWrapper = styled.div`

`
