require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stove regret range purse grace immense army gaze'; 
let testAccounts = [
"0x0a01e97500c75dafdd0630ef526593d841601dfae2a54e9ab38df4922b5888fa",
"0x1471125108dc256a69b3b9b3aba5eccffb1df0b93438824e7448cc7d6fbfb9f9",
"0x1a8e6edc48d4128c500ad52393701cbec551a5e3438192873678b69f1b1935a9",
"0x2003292070d3c21838c43411d528b1ed7c77b03bf3d22f615f6cd17b4c55dd08",
"0x7acf535dff3c9fdc922d1202e4627ba53d1f92a527e21b106c14dcb78842f46e",
"0x33772c6d94494d828fe52ba7a41de9a4a1e1fec78c30dd594442411b9f6438ce",
"0xc03c8a7779f09803eb9f9fb96dc259943b34a2e0afd297ff02570c73b14e30f4",
"0xd746fb946875d390b87cc35da69fe97f46c4a0417336fc469eea74fe5d490607",
"0x05c1531723dc64b585095fe84679d3f3cf7d8a007e019568ac7c54e349e24cf2",
"0xf5cebe2a9ed4164d58f177a7f752bb306080f9087de5518a58ebe6b01b2f9b13"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

