import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/NewsCard";
import CoinBar from "../components/CoinBar"

const options = {
  method: "GET",
  url: "https://free-news.p.rapidapi.com/v1/search",
  params: { q: "crypto", lang: "en", page: 1, page_size: 20 },
  headers: {
    "X-RapidAPI-Host": "free-news.p.rapidapi.com",
    "X-RapidAPI-Key": "0dccd072c0mshfa7e83548dae966p101c71jsnc02bf4ef3d76",
  },
};

const options1 = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "20",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key": "0dccd072c0mshfa7e83548dae966p101c71jsnc02bf4ef3d76",
  },
};

function Home() {
  const [news, setNews] = useState([]);
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    return () => {
      axios
        .request(options)
        .then((response) => setNews(response.data.articles))
        .catch(function (error) {
          console.error(error);
        });
    };
  }, []);

  useEffect(() => {
    return () => {
      axios
        .request(options1)
        .then((response) => setCoin(response.data.data.coins));
    };
  }, []);
  
  // if (!news || news.length === 0) {
  //   return <p>'No News Yet'</p>;
  // }

  // console.log(coin)


  return (
    <div className="home">
      <CoinBar data={coin} />

      <h1>
        <span></span>Latest News
      </h1>

      {news.map((data, idx) => (
        <Card key={idx} data={data} />
      ))}
    </div>
  );
}

export default Home;
