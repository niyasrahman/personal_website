import React from "react";
import Jumbotron from "../components/Jumbotron";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import BlogPosts from "../components/BlogPosts";
import Slide from "../components/Slide";
const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Hi, I'm "
      keywords={[`front end develop`, `niyasrahman`, `bangalore`]}
    />
    <Jumbotron data={data.allJson.edges[0].node.Jumbotron} />
    <BlogPosts data={data.allMediumPost.edges} />
    <Slide data={data.allJson.edges[0].node.sideproject} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allJson {
      edges {
        node {
          id
          Jumbotron {
            title
            text
          }
          sideproject {
            id
            title
            para
            image
            status
            github
            liveurl
          }
        }
      }
    }
    allMediumPost {
      edges {
        node {
          id
          title
          slug
          createdAt
          previewContent {
            subtitle
          }
          uniqueSlug
          author {
            username
          }
        }
      }
    }
  }
`;
