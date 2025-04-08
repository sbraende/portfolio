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
        Hi! I'm Sebastian Brænde, a frontend developer passionate about creating engaging web
        experiences. With a background in visual effects, including roles as Lighting Department
        Lead and Visual Effects Supervisor, I bring a unique perspective to my work. I love telling
        stories through both visuals and code, and I'd love to connect!
      </p>
    </div>
  );
};

export default SiteHeader;
