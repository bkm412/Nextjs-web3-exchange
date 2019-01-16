import React from 'react';
import App, {Container} from 'next/app';
import {Meta} from '../component/global/globalComponents';
import {Provider} from 'mobx-react';
import Core from '../store/core';
import Language from '../store/language';

const stores = {
    Core,
    Language
}

export default class MyApp extends App {
    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props;


        return (
            <Container>
                <Meta/>
                <Provider {...stores}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}