function NewsCard({data}) {
    if (!data || data.length === 0) {
      return <p>'No News Yet'</p>;
    }
  return (
    <div className="newscard">
      <img alt={data.author} src={data.media} />

      <div className="news_component">
        <h4> {data.title} </h4>
        <p>
          {data.published_date} {data.author && `| ${data.author} `}
        </p>
        <p> {data.rank} Views</p>
      </div>
    </div>
  );
}

export default NewsCard