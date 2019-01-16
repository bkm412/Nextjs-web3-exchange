import {Component} from 'react';
import styled from 'styled-components';
import {GetDWRecords} from "../../ethereum/methods";

export default class DwRecords extends Component {

    state = {
        records : []
    }

    componentDidMount(){
        GetDWRecords().then(records => this.setState({records}))
    }

    render(){
        console.log(this.state)
        return(
            <Records>

            </Records>
        )
    }
}

const Records = styled.div`
  
`
