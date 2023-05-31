// Simple NodeJS app to get cryptocurrency prices using CoinGecko API
// https://github.com/Ondra9071/crypto

const axios = require('axios');

console.log('Loading prices...');
async function start() {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false'
    );
    const chalk = (await import('chalk')).default;
    const cryptocurrencies = response.data;
    console.clear();
    cryptocurrencies.forEach((crypto) => {
      const formattedName = chalk.hex('#FFA500')(crypto.name);
      let priceChange24h = "";
      
      if (crypto.price_change_percentage_24h > 0) {
        priceChange24h = chalk.green(`(↑ ${crypto.price_change_percentage_24h}%)`);
      } else if (crypto.price_change_percentage_24h < 0) {
        priceChange24h = chalk.red(`(↓ ${crypto.price_change_percentage_24h}%)`);
      }
      if (crypto.price_change_percentage_24h = 0)
      {
        priceChange24h = ``;
      }
      console.log(`${formattedName}: ${crypto.current_price} USD ${priceChange24h}`);
    });
  } catch (error) {
    console.error('Error with loading prices:', error.message);
  }
}

start();
