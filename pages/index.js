import {Component} from 'react';
import styled from 'styled-components'
import {inject, observer} from 'mobx-react';
import {Base} from '../component/global/globalComponents';
import {getOrderBook} from '../ethereum/methods'
import Link from 'next/link'

@inject("Core")
@observer
export default class Index extends Component {
    render() {
        return (
            <Base>
                <IndexWrapper>
                    It is Home
                </IndexWrapper>
            </Base>
        )
    }
}

const IndexWrapper = styled.div`
    margin : 0 auto;
    font-size : 20px;
`
