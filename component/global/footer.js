import {Component} from 'react';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';

@inject("Language")
@observer
export default class Footer extends Component {

    render() {
        const {Footer} = this.props.Language.getLang();

        return (
            <HeaderWrapper>
                {Footer.title}
            </HeaderWrapper>
        )

    }
}

const HeaderWrapper = styled.section`
    width : 100%;
    height: 50px;
    z-index : 2;
    float : left;
    text-align : center;
`
