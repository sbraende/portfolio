import "./CardList.css";
import Card from "../Card/Card";

const CardList = ({ portfolioData }) => {
  return (
    <>
      <ul className="card-list">
        {portfolioData.map((webpage) => {
          return <Card webpage={webpage} key={webpage.id} />;
        })}
      </ul>
    </>
  );
};

export default CardList;
