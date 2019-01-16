import {Component} from 'react';
import Modal from 'react-responsive-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {config} from '../../static/js/config'

export default class DepositModal extends Component {

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
                        // depositEth(amount) : depositToken(prCode,amount)
                    }}>{token.productName} 입금</button>
                </Modal>
        )
    }
}

DepositModal.defaultProps = {
    open : false,
    onClose : () => {},
    prCode : "1"
}

DepositModal.propTypes = {
    open : PropTypes.bool,
    onClose : PropTypes.func,
    prCode : PropTypes.string.isRequired
}

const ModalWrapper = styled.div`

`

