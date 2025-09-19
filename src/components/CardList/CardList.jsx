import "./CardList.css";
import Card from "../Card/Card";
import portfolioData from "../../data/portfolioData";

const CardList = () => {
  const featuredProjects = portfolioData.filter((project) => project.feature);
  const projects = portfolioData.filter((project) => !project.feature);

  return (
    <>
      <div className="project-category">
        <h3 className="project-category-tile">Featured projects ⭐️</h3>
        <ul className="card-list">
          {featuredProjects.map((webpage) => {
            return <Card webpage={webpage} key={webpage.id} />;
          })}
        </ul>
      </div>
      <div className="project-category">
        <h3 className="project-category-tile">Projects </h3>
        <ul className="card-list">
          {projects.map((webpage) => {
            return <Card webpage={webpage} key={webpage.id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default CardList;
