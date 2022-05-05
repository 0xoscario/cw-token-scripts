import axios from 'axios';
import { Coins, LCDClient, MnemonicKey } from '@terra-money/terra.js';

//Bombay testnet
const terraswap_token_code_id = 148;
const terraswap_factory_code_id = 154;
const terraswap_pair_code_id = 155;
const terraswap_router_code_id = 63814;

const terraswap_factory_contract_address = "terra18qpjm4zkvqnpjpw0zn0tdr8gdzvt8au35v45xf";
const terraswap_router_contract_address = "terra1c58wrdkyc0ynvvxcv834kz65nfsxmw2w0pwusq";

(async () => {
    const gasPrices = await axios.get<any>('https://bombay-fcd.terra.dev/v1/txs/gas_prices');
    const gasPricesCoins = new Coins(gasPrices.data); 
    const lcd = new LCDClient({
      URL: "https://bombay-lcd.terra.dev/", // Use "https://lcd.terra.dev" for prod "http://localhost:1317" for localterra.
      chainID: "bombay-12", // Use "columbus-5" for production or "localterra".
      gasPrices: gasPricesCoins,
      gasAdjustment: "1.5", // Increase gas price slightly so transactions go through smoothly.
    });
    
    const mk = new MnemonicKey({
      mnemonic: 'dolphin opera december shed drift sniff pole already skin car video trial hello void brass kite mistake must casino click amateur mutual oval scatter',
    });
    const wallet = lcd.wallet(mk);
    
    console.log("wallet?", wallet.key.accAddress);
})()
