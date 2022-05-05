import axios from 'axios';
import { Coins, LCDClient, MnemonicKey } from '@terra-money/terra.js';

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
