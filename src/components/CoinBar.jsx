const CoinBar = ({ data }) => {

  return (
    <div className="coinbar">
      <marquee>
        {data &&
          data.map((data, idx) => (
            <span key={idx}>
              {data.symbol} ${Math.round(data.price * 100) / 100} | {"    "}
            </span>
          ))}
      </marquee>
    </div>
  );
};

export default CoinBar