import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import BlogListTemp from '../components/blogs/bloglist';
import LatestBlog from '../components/blogs/latestblog';
import './_bloglist.scss';

/**
 * @see https://desktopofsamuel.com/building-gatsby-with-multiple-post-type
 * Gatsby pagination
 */
class BlogList extends Component {
  render() { 
    const { data: { blog } } = this.props;
    const posts = this.props.data.allMarkdownRemark.edges
    const { totalCount } = this.props.data.allMarkdownRemark;
    const numPages = Math.ceil(totalCount / 5);
    const { currentPage } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    typeof window !== `undefined`
      && (window.document.title = `${currentPage === 1 ? 'Blog | Ucare': `Blog | Page ${currentPage} | UCare`}`)
    const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/page/${(currentPage - 1).toString()}`
    const nextPage = `/blog/page/${(currentPage + 1).toString()}`
    return ( 
      <Layout>
        <div className="container-fluid p-0 blog-header text-center" style={ {
          background: `linear-gradient( rgba(50,58,70,.5), rgba(50,58,70,.5) ), url(${blog.publicURL})`,
          backgroundColor: '#323a46',
          backgroundPosition: '50%',
          backgroundSize: 'cover'
        } }>
          <div className="centered">
            <h1>Blog</h1>
            <h6>Latest News & Updates from the UCare Team</h6>
          </div> 
        </div>
        {posts.map(({ node }) => {
          const { title, date, featured_image } = node.frontmatter;
          let publicURL = null;
          if (featured_image) publicURL = featured_image.publicURL;
          const { slug } = node.fields;
          const { excerpt } = node;
          return <BlogListTemp
                  title={ title }
                  date={ date }
                  url={ slug }
                  excerpt={ excerpt }
                  imageURL={ publicURL }
                  key={slug}
                />
        }) }
        <div className="container blog-list-main">
          <div className="arrow">
            { !isLast && (
              <Link to={ nextPage } rel="next">
                <button
                  type="button"
                  className="btn btn-default arrow-btn"
                  onClick={this.handleNext}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} className="arrow-icon" />
                </button> 
              </Link>
            )
            }&nbsp;
            { !isFirst && (
              <Link to={ prevPage } rel="prev">
                <button
                  type="button"
                  className="btn btn-default arrow-btn"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="arrow-icon" />
                </button>
              </Link>
            ) }
          </div>
        </div>
        <div>
          <LatestBlog />
        </div>
      </Layout>
     );
  }
}

export default BlogList;
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: {eq: "post"}}}
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 292)
          fields {
            slug
          }
          frontmatter {
            url
            title
            date(formatString: "DD MMMM, YYYY")
            featured_image {
              relativePath
              publicURL
              name
              extension
            }
          }
        }
      }
    }
    blog: file(relativePath: { eq: "page/blog/friends04.jpg" }) {
      publicURL
    }
  }
`