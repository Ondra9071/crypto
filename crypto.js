// Simple NodeJS app to get cryptocurrency prices using CoinGecko API
// https://github.com/Ondra9071/crypto

const axios = require('axios');
async function start() {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false'
    );

    const chalk = (await import('chalk')).default;
    const cryptocurrencies = response.data;

    cryptocurrencies.forEach((crypto) => {
      const formattedName = chalk.green(crypto.name);
      console.log(`${formattedName}: ${crypto.current_price} USD`);
    });
  } catch (error) {
    console.error('Error with loading prices:', error.message);
  }
}

start();