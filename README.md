# Nextjs-web3-exchange


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

### CSS styling
styled-component를 사용했으며, 각각의 component 내에 선언된 styled 에서 sass문법을 사용해서 styling이 가능하다.

```
const ContentsWrapper = styled.section`
    width : 100%;
    padding-top : 50px;
`
```


### Global CSS
Global CSS는 globalStyle.js 내의 createGlobalStyle에서 설정이 가능하다.
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

