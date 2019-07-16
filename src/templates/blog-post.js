import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import hexToRgba from 'hex-to-rgba';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import LatestBlog from '../components/blogs/latestblog';
import FeatureList from '../components/features/featurelists';
import FeatureList2 from '../components/features/featurelist2';

import './_blogpost.scss';

const BlogPost = (props) => {
  const post = props.data.markdownRemark;
  const { title, url, svg_code, feature_colour, type, date } = post.frontmatter;
  const { featured_image } = post.frontmatter;
  let publicURL = null;
  featured_image && (publicURL = featured_image.publicURL);
  let featureColorRgba = null;
  feature_colour
    ? featureColorRgba = hexToRgba(feature_colour, 0.7)
    : featureColorRgba = 'rgba(50, 58, 70, .5)'
  typeof window !== `undefined` && (window.document.title = `${title} | UCare`);
  return (
    <Layout>
      <div
        className="container-fluid text-center p-0 blog-post"
        style={ {
          backgroundImage: `linear-gradient( ${featureColorRgba}, ${featureColorRgba} ), url(${publicURL})`,
          backgroundColor: `${feature_colour ? feature_colour: '#323a46'}`,
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
          maxWidth: '100%',
        } }>
        <div className="centered">
          { svg_code &&
            <div className="feature-circle">
              <span dangerouslySetInnerHTML={ { __html: `${svg_code}` } }></span>
            </div>
          }
          <h1>{ title }</h1>
          <span><FontAwesomeIcon icon={ faCalendarAlt } />&nbsp;&nbsp;{ date }</span>
        </div>
      </div>
      <div className="container posts" >
        <div
          dangerouslySetInnerHTML={ { __html: post.html } }
          className={ `${url === "/sla/" || url === "/privacy/" || url === "/terms/" ? `s-page` : `pages`} ` }
        >
        </div>
      </div>
      {
        url !== "/sla/" && url !== "/privacy/" && url !== "/terms/" && type !== "post" &&
        <div className="row m-0 blog-feature-part">
          <div className="container text-center my-4">
            <h3>More Features</h3>
            <FeatureList location={ `feature` } />
            <FeatureList2 location={ `feature` } />
          </div>
        </div>
      }
      {
        type !== "post" &&
          <div>
            <LatestBlog />
          </div>
      }
    </Layout>
  )
}

export default BlogPost;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        type
        date(formatString: " D MMMM YYYY")
        url
        svg_code
        feature_colour
        featured_image {
          id
          name
          ext
          relativePath
          publicURL
        }
      }
    }
  }
`