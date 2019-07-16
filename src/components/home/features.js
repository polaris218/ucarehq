import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { StaticQuery, graphql } from 'gatsby';
import { InView } from 'react-intersection-observer';

import FeatureList from '../features/featurelists';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = { view: false, readmoreView: false };
    this.handleTitleView = this.handleTitleView.bind(this);
  }
  handleTitleView(inView) {
    this.setState({ view: inView });
  }
  handleReadMoreView(inView) {
    this.setState({ readmoreView: inView });
  }
  render() { 
    return ( 
      <StaticQuery
        query={ graphql`
          query {
            file(relativePath: { eq: "favicon.png" }) {
              publicURL
            }
          }
        `}
        render={ data => (
          <div className="container-fuild p-0 features">
            <div className="container text-center">
              <InView as="div" triggerOnce onChange={ inView => this.handleTitleView(inView) }>
                <div className={this.state.view ? `animate`: `fade-in-hidden`}>
                  <h2 className="features-title text-center">
                    Features you will&nbsp;
                    <img
                      src={ data.file.publicURL }
                      alt="features you will "
                      style={ {
                        width: '40px',
                        marginTop: '30px',
                      }}
                    />
                  </h2>
                </div>
              </InView>
              <FeatureList location={ `root` } />
              <InView as="div" triggerOnce onChange={inView => this.handleReadMoreView(inView)}>
                <div className={`explore-more ${ this.state.readmoreView && `readmore-animate`}`}>
                  <a href="/features" className="explore-more-btn">
                    Explore More Features&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                </div>
              </InView>
            </div>
          </div>  
        )}
      />
    );
  }
}

export default Features;