import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        allJson {
          edges {
            node {
              id
              socialLinks {
                github
                dev
                twitter
                linkedin
                codepen
              }
              footer
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header SocialURL={data.allJson.edges[0].node.socialLinks} />
        <div>
          <main>{children}</main>
          <footer className="footer">
            {data.allJson.edges[0].node.footer}
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
