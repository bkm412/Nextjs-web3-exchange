import {Component} from 'react';
import styled from 'styled-components';
import {getTakerFee} from "../../ethereum/methods";

export default class OrderEntry extends Component{

    render() {
        return (
            <Entry>
                Order Entry here
            </Entry>
        )
    }
}

const Entry = styled.div`

`
