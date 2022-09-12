import { Link } from "react-router-dom";

const Currencies = () => {
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
    ];

    return (
        <div className="currencies">
            {currencies.map((coin, idx) => {
                // const { name, symbol } = coin;
                // const coin = {
                //     name: coin.name,
                //     symbol: coin.symbol
                // }
                coin.nonsense = "Eric's bored"
                console.log(coin);

                return (
                    <Link to={`/currencies/${coin.symbol}`}>
                        <h2>{coin.name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};

export default Currencies;