const Card = ({ webpage }) => {
  return (
    <>
      <div className="card">
        <h3>{webpage.title}</h3>
        <div className="card__links-container">
          <a href={webpage.url} target="__blank">
            webpage
          </a>
          <p>|</p>
          <a href={webpage.githubUrl} target="__blank">
            github
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
