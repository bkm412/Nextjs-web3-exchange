import {Component} from 'react';
import styled from 'styled-components';
import {DwRecords} from "../component/transaction/transactionComponents";
import {instruments} from "../static/js/helper";
import {Base} from "../component/global/globalComponents";

export default class Transaction extends Component {

    render() {
        console.log(instruments)
        return (
            <Base>
                <TransactionWrapper>
                    It is transaction
                    <DwRecords/>
                </TransactionWrapper>
            </Base>
        )
    }
}

const TransactionWrapper = styled.div`

`
