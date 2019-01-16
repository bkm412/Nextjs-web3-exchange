import { createGlobalStyle } from 'styled-components'
import {Fragment} from "react";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    margin: 0;
    padding : 0;
  }
`

export default () => {
    return (
        <Fragment>
            <GlobalStyle/>
        </Fragment>
    )
}

