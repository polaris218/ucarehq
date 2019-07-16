import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import FeatureList from '../components/features/featurelists';
import FeatureList2 from '../components/features/featurelist2';
import LatestBlog from '../components/blogs/latestblog';

const Features = () => (
  <StaticQuery
    query={ graphql`
      query FeaturesQuery {
        allMarkdownRemark(filter: { frontmatter: { url: { eq: "/pages/features/"}}}) {
          edges {
            node {
             frontmatter {
              url
              tagline
              title
            }
              html
            }
          }
        }
        allFile(filter: { relativePath: { eq: "page/features/tumblr_o6nnyriAcM1tubinno1_1280.jpg"}}) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `}
    render={ data => {
      const { publicURL } = data.allFile.edges[0].node;
      if (typeof window !== `undefined`) window.document.title = 'UCare’s Powerful Features | UCare';
      return (
        <Layout>
          <div className="container-fluid p-0 m-0">
            <div className="row text-center feature-page" style={ {
              background: `linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url(${publicURL})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `cover`,
              backgroundPosition: `50%`,
            } }> 
              <div className="text-center feature-page-header">
                <h1 className="text-white">UCare's Powerful Features</h1>
                <h3 className="text-white">Church can be complex, but your software doesn't need to be.</h3>
              </div>
            </div>
            <div className="container text-center my-4">
              <div className="row feature-page-body">
                <p>
                  UCare provides effective and easy to use all-in-one church management solution that doesn’t cost the world so you can focus on ministry and loving people. Explore each powerful feature to find out how UCare handles the simplest to the most complex needs.
                </p>
              </div>
              <div className="feature-body-list">
                <FeatureList location={ `feature` }/>
                <FeatureList2 location={ `feature` }/>
              </div>
            </div>
            <div>
              <LatestBlog />
            </div>
          </div> 
        </Layout>
      )
    }}
  />
)

export default Features;