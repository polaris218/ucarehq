import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { InView } from 'react-intersection-observer';

class LatestBlog extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      view: false,
    }
  }
  handleView(inView) {
    this.setState({ view: inView });
  }
  render() { 
    return ( 
      <StaticQuery
        query={ graphql`
          query {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date]}
              limit: 3
              filter: { frontmatter: { type: {eq: "post"}}}
            ) {
                edges {
                  node {
                    frontmatter {
                    url
                    title
                    date(formatString: "D MMMM YYYY"),
                    categories,
                    featured_image {
                      publicURL
                    }
                  }
                    excerpt(pruneLength: 240)
                    fields {
                      slug
                    }
                  }
                } 
              }
          }
        `}
        render={ data => {
          const { edges } = data.allMarkdownRemark;
          return (
            <InView as="div" triggerOnce onChange={inView => this.handleView(inView)}>
              <div className={
                `container-fluid text-center latestblog ${ this.state.view ? `fade-in-up`: `fade-in-hidden`}`
              }
              >
                <div className="container latest-blog-wrapper">
                  <h2>Latest From the Blog</h2>
                    {
                      edges.map((item, key) => {
                        const { slug } = item.node.fields;
                        const { publicURL } = item.node.frontmatter.featured_image;
                        const {
                          frontmatter: {
                            title,
                            date,
                            categories,
                          },
                          excerpt,
                        } = item.node;
                        return (
                          <div className="col-lg-4 p-2 align-top blog-out" key={ key }>
                            <div className="p-0 blogs text-left">
                              <a href={ slug } className="latest-blog">
                                <div className="thumb">
                                  <img
                                    className="m-0"
                                    src={ publicURL } alt={ title }
                                    style={ {
                                      width: '100%', height: 'auto'
                                    }}
                                  />
                                  <span className="cat">
                                    { categories.split(",")[0] }
                                  </span>
                                </div>
                                <div className="content">
                                  <h3>{ title }</h3>
                                  <div className="blog-excerpt">
                                    <span className="text-left feature-date"> 
                                      { date }
                                    </span>
                                    <div>
                                      { excerpt }
                                    </div>
                                  </div>
                                  <div className="readmore-link">
                                    <span className="read-more">
                                      Read More&nbsp;&nbsp;
                                      <FontAwesomeIcon icon={faChevronRight} />
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>                            
                          </div>
                        )
                      })
                    }
                </div>
              </div>
            </InView>
          )
        } }
      />
    );
  }
}
 
export default LatestBlog;