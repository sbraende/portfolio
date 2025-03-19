import "./SiteHeader.css";

const SiteHeader = () => {
  return (
    <div className="site-header">
      <img
        className="site-header__image"
        src="/assets/images/profile/profile-picture.jpeg"
        alt="Sebastian Braende profile image"
      />
      <h1 className="site-header__title">Junior front-end dev | vfx-veteran | fairly nerdy | 🇳🇴</h1>
      <p className="site-header__paragraph">
        Drawing from my background as Head of Lighting, Visual Effects Supervisor, and Senior Visual
        Effects Artist across commercials, TV, and film, I have extensive experience in creating
        captivating narratives through imagery. Now, I’m excited to pivot my expertise into the
        field of frontend and web development.
      </p>
    </div>
  );
};

export default SiteHeader;
