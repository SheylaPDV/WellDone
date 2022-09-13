import ArticleDetail from "./ArticleDetail";

export default function Articule({ articule }) {
  const photoUrl = articule.photo
    ? `http://localhost:3001/${articule.photo}`
    : "/default.png";

  return (
    <>
      <div className="article">
        <div className="articule-box">
          <h2 className="articule-title">
            <i>{articule.title}</i>
          </h2>

          <p className="articule-content">{articule.content}</p>
        </div>{" "}
        <img className="img-article" src={photoUrl} alt="" />
        <a href="/ArticleDetail" className="detail">
          Info
        </a>
      </div>
    </>
  );
}
