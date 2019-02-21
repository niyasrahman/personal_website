import { Link } from "gatsby";
import React from "react";
import "./header.scss";
const SSLink = url => (
  <a rel="noopener noreferrer" target="_blank" href={url.url}>
    <span className={`header__${url.type}`} />
  </a>
);

const Header = ({ SocialURL }) => (
  <header className="header">
    <div className="header__container">
      <Link to="/">
        <span className="header__logo">Niyas Rahman</span>
      </Link>
      <ul className="header__social-container">
        <SSLink type={"github"} url={SocialURL.github} />
        <SSLink type={"dev"} url={SocialURL.dev} />
        <SSLink type={"twitter"} url={SocialURL.twitter} />
        <SSLink type={"linkedin"} url={SocialURL.linkedin} />
        <SSLink type={"codepen"} url={SocialURL.codepen} />
      </ul>
    </div>
  </header>
);

export default Header;
