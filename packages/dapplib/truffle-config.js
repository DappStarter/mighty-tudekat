require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name riot stereo million hidden arm army gather'; 
let testAccounts = [
"0x8659f49da5b0cb99beb3d8f01bbb1d1ad5df536cb05ed87ddff292157093239a",
"0x2e87106116140823598d70e30f3f8c7d3e056a71ce584748b3c39cb500f3ca4c",
"0x22eb9cc46e27db9878a1342ee3e2e8b95e51ebe92d983d478b18cd0e538a96e6",
"0xf1e7485982c320046a4867c30ff69024a7ba67c4cbaf6a53f6788dc9da27a89b",
"0x23d44ff306b4f1e73af8a5739678e4313895a125a75af3aeca89dcb33dda7338",
"0x1dc0ef6bd15de5c6fefe2e67c4fb67783b926cdf78bcbc64d3b9147b954b64e9",
"0xd2fa2d690cd96183e998316e5f65f5a38a8e6dae3eb926083b662e5c7a036cf0",
"0x3164be930418057864de9e5c47f712c0425136b1bf51d7a2f9226c77479fdef2",
"0x71aa8de9b403d30737ce9a75f227e6b30e3741e67c4c4c04d5f66a348c75316a",
"0xb63a17b96a54ed0e4ee15b47ebee253f861d7627c0e2ee9ff1fb108562b448c7"
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
            version: '^0.5.11'
        }
    }
};
