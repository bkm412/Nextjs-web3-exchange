import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components';
import {observer, inject} from 'mobx-react';

import {GlobalStyle} from '../component/global/globalComponents';

export default class MyDocument extends Document {
    static async getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet();

        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );

        const styleTags = sheet.getStyleElement();

        return {...page, styleTags};
    }

    render() {
        return (
            <html>
            <Head>
                {this.props.styleTags}
            </Head>

            <GlobalStyle/>
                <body className="custom_class">
                <Main/>
                <NextScript/>
                </body>
            </html>
        )
    }
}