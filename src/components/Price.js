import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Price = (props) => {
  // Our api key from coinapi.io
  const apiKey = "5C61AFA1-048D-42DA-8588-B2733B742D46";
  const {symbol} = useParams()
  // console.log(params)
  // Grabbing the Currency symbol from the URL Param  // Using the other two variables to create our URL
  const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  //state to hold the coin data
  const [coin, setCoin] = useState(null);

  //function to fetch coin data
  const getCoin = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setCoin(data);
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
      getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    console.log(coin);
    return (
      <div>
        <h1>The value of one {coin.asset_id_base} is ${coin.rate} in {coin.asset_id_quote}</h1>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return (<h1>Loading...</h1>);
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin ? loaded() : loading();
};

export default Price;