import "./Card.css";

const Card = ({ webpage }) => {
  return (
    <>
      <li className="card">
        <div className="card__image-container">
          <img className="card__image" src={webpage.thumbnail} alt={`${webpage.title} thumbnail`} />
        </div>
        <div className="card__text-container">
          <h3 className="card__title">{webpage.title}</h3>
          <div className="card__links-container">
            <a href={webpage.url} target="__blank">
              webpage
            </a>
            <p>
              <b>|</b>
            </p>
            <a href={webpage.githubUrl} target="__blank">
              github
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;
