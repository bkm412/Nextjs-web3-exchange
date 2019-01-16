# Nextjs-web3-exchange

### About
스마트컨트랙트로 구동되는 거래소 Front-end Part 입니다.

- [Structure](#structure)
- [Router](#router)
- [CSS styling](#css-styling)
- [Global CSS](#global-css)
- [Mobx](#mobx)

### Structure
<details>
    <summary>structure</summary>
    
    project
        ├── .next                       # build folder, release server
            ├── bundles                     # build client
                └── pages                       # client pages
            ├── server                      # build server
                └── bundles                     # server bundles
                    └── pages                       # server pages
            └── static                      # static folder
                └── commons                     
                    └── main.js                     # node_modules
        ├── component
            ├── exchange                    # exchange components
            ├── global                      # global components
                ├── base.js                     # base component
                ├── footer.js                   # footer
                ├── globalStyle.js              # global style component
                ├── header.js                   # header
                └── Meta.js                     # <head>tag 
            ├── transaction                   # transaction components
            └── wallet                        # wallet components
        ├── ethereum                        # contain web3 folder
            ├── web3.js                       # initialize web3
            ├── contract.js                   # connect to your smart contract
            ├── erc20.js                      # call balance of erc20 tokens
            ├── methods.js                    # call function of your smart contract
            └── fetchDB.js                    # call DB
        ├── node_modules                    # modules
        ├── static                          # static files (js, json, image ...)
            ├── abi                           # contract abi files  
            ├── images                        # image files
            ├── js                            # contract abi files  
                ├── config.js                   # my config
                └── helper.js                   # helper functions
            ├── json                          # other json files
            └── lang                          # language (korean, english) json file
        ├── store                           # mobx store files
            ├── core.js                       # exchange store
            └── language.js                   # language store
        ├── .babelrc                        # babel config
        ├── .gitignore                      # gitignore
        ├── package.json                    # set package and moludes
        ├── README.md                       # readme
        └── server.js                       # express server setting
                    
</details>

### Router
기본 Next.js 설정에 의해 pages 폴더 안의 파일을 타겟으로 라우팅해주기 때문에 pages 폴더 내에 라우팅 할 Url과 같은 이름으로 js파일을 만들면 됩니다.

만악 라우팅을 커스터마이징 하고싶으면 아래 링크를 참고하세요.

https://github.com/zeit/next.js/wiki/Centralizing-Routing

### CSS styling
styled-component를 사용했으며, 각각의 component 내에 선언된 styled 에서 sass문법을 사용해서 styling이 가능합니다.

```
const ContentsWrapper = styled.section`
    width : 100%;
    padding-top : 50px;
`
```


### Global CSS
Global CSS는 globalStyle.js 내의 createGlobalStyle에서 설정이 가능합니다.
```
    ├── component                      
        ├── global    
            ├── globalStyle.js 
            
    
    const GlobalStyle = createGlobalStyle`
      body {
        color: ${props => (props.whiteColor ? 'white' : 'black')};
        margin: 0;
        padding : 0;
    }
    `
```

### Mobx
모든 부분에서 언어의 변경을 감지해야 하기 때문에, Mobx와 Redux의 사용을 고민했습니다.

그러다 Mobx가 훨씬 간단하고 가독성이 좋아서 Mobx를 사용하게 되었습니다.

언어 정보는 Language Store, 거래소에서 저장해야 할 정보를 Core store에 담아 사용하고 있습니다.

