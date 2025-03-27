import "./Tag.css";

const Tag = ({ children }) => {
  return (
    <>
      <li className="card__tag">{children}</li>
    </>
  );
};

export default Tag;
