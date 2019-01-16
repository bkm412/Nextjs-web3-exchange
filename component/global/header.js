import {Component} from 'react';
import styled from 'styled-components';
import {inject, observer} from 'mobx-react';
import Link from 'next/link';

@inject("Language")
@observer
export default class Header extends Component {

    navigation = (lang) => {
        const navList = [
            {
                "name" : lang.exchange,
                "location" : "/exchange"
            },
            {
                "name" : lang.wallet,
                "location" : "/wallet"
            },
            {
                "name" : lang.transaction,
                "location" : "/transaction"
            },
        ]
        return navList.map(obj => {
            return <Link href={obj.location} key={obj.name}><a className="nav_menu">{obj.name}</a></Link>
        })

    }

    render() {
        const {lang, setLang, getLang} = this.props.Language;
        const {Header} = getLang();
        return (
        <HeaderWrapper>
            <span>{Header.title}</span>
            <div className="nav">
                {this.navigation(Header)}
            </div>
            <button className={lang === 'en' && 'on'} onClick={() => setLang("en")}>EN</button>
            <button className={lang === 'kr' && 'on'} onClick={() => setLang('kr')}>KR</button>
        </HeaderWrapper>
        )

    }
}

const HeaderWrapper = styled.section`
    width : 100%;
    height: 50px;
    z-index : 2;
    position: fixed;
    float : left;
    text-align : center;
    .on {
        background : gray;
        color : white;
    }
    .nav {
        width : 50%;
        margin : 0 auto;
        .nav_menu {
            width : 33%;
            display: block;
            float : left;
        }
    }
`
