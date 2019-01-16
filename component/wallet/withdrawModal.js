import {Component} from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';
import {config} from "../../static/js/config";
import PropTypes from "prop-types";
import DepositModal from "./depositModal";

export default class WithdrawModal extends Component {

    state = {
        amount : "0"
    }
    amountChange = (e) => {
        this.setState({
            amount : e.target.value
        })
    }

    render() {
        const {open, onClose, prCode} = this.props;
        const {amount} = this.state;

        return (
                <Modal open={open} onClose={onClose} center>
                    <input
                        value={amount}
                        onChange={this.amountChange}
                    ></input>
                    <button onClick={() => {
                        // token.productName === "ETH" ?
                        // withdrawEth(amount) : withdrawToken(prCode,amount)
                    }}>{token.productName} 출금</button>
                </Modal>
        )
    }
}

WithdrawModal.defaultProps = {
    open : false,
    onClose : () => {},
    prCode : "1"
}

WithdrawModal.propTypes = {
    open : PropTypes.bool,
    onClose : PropTypes.func,
    prCode : PropTypes.string.isRequired
}

const ModalWrapper = styled.div`

`

