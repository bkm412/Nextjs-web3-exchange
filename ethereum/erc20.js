

let minABI = [
    // balanceOf
    {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    },
    // decimals
    {
        "constant":true,
        "inputs":[],
        "name":"decimals",
        "outputs":[{"name":"","type":"uint8"}],
        "type":"function"
    }
];

export const getBalanceOfERC20 = (tokenAddress) => {
    let contract = window.web3.eth.contract(minABI).at(tokenAddress);

// Call balanceOf function
    contract.balanceOf(walletAddress, (error, balance) => {
        // Get decimals
        contract.decimals((error, decimals) => {
            // calculate a balance
            return balance.div(10**decimals);
        });
    });
}