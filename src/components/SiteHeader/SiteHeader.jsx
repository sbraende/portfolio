import "./SiteHeader.css";

const SiteHeader = () => {
  return (
    <div className="site-header">
      <img
        className="site-header__image"
        src="/assets/images/profile/profile-picture.jpeg"
        alt="Sebastian Braende profile image"
      />
      <h2 className="site-header__title">
        Front-end developer | visual-effects veteran | fairly nerdy | 🇳🇴
      </h2>
      <p className="site-header__paragraph">
        My name is Sebastian Brænde, and I'm a frontend developer with a passion for building
        engaging web experiences. I previously worked as Department lead of Lighting, Visual Effects
        Supervisor, and Senior Visual Effects Artist for commercials, TV, and film, bringing stories
        to life through visuals.
      </p>
    </div>
  );
};

export default SiteHeader;
