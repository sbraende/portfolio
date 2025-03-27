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
        Frontend Developer | Visual-Effects Veteran | Fairly nerdy | 🇳🇴
      </h2>
      <p className="site-header__paragraph">
        My names is Sebastian Brænde, and I'm a frontend developer with a passion for building
        engaging web experiences. Previously, I worked as a Lighting Department Lead, Visual Effects
        Supervisor, and Senior Visual Effects Artist for commercials, TV, and film. I hold a
        bachelor's degree in Animation and a master's degree in Visual Effects, and love bringing
        stories to life through visuals.
      </p>
    </div>
  );
};

export default SiteHeader;
