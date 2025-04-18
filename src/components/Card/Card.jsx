import Tag from "../Tag/Tag";
import "./Card.css";
const Card = ({ webpage }) => {
  return (
    <>
      <li className="card">
        <div className="card__image-container">
          <a href={webpage.url} target="_blank">
            <img
              className="card__image"
              src={webpage.thumbnail}
              alt={`${webpage.title} thumbnail`}
            />
          </a>
        </div>
        <div className="card__text-container">
          <h3 className="card__title">{webpage.title}</h3>
          <p>{webpage.description}</p>
          <div className="card__links-container">
            <a href={webpage.url} target="_blank">
              webpage
            </a>
            <p>
              <b>|</b>
            </p>
            <a href={webpage.githubUrl} target="_blank">
              github
            </a>
          </div>
          <ul className="card__tags-list">
            {webpage.tags.map((tag) => {
              return <Tag key={tag}>{tag}</Tag>;
            })}
          </ul>
        </div>
      </li>
    </>
  );
};

export default Card;
