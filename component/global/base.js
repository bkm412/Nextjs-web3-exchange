import {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';
import {GlobalStyle, Header} from './globalComponents'
import Footer from "./footer";


export default class Base extends Component {


    render() {
        return (
            <Comp>
                <GlobalStyle/>
                <Header/>
                <ContentsWrapper>
                    {this.props.children}
                </ContentsWrapper>
                <Footer/>
            </Comp>
        )
    }
}

const Comp = styled.section`
    width : 100%;
`

const ContentsWrapper = styled.section`
    width : 100%;
    padding-top : 50px;
`
