import Card from "../Card/Card";

const CardList = ({ portfolioData }) => {
  return (
    <>
      {portfolioData.map((webpage) => {
        return <Card webpage={webpage} key={webpage.id} />;
      })}
    </>
  );
};

export default CardList;
