import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { InView } from 'react-intersection-observer';

class ChurchManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
    }
    this.handleView = this.handleView.bind(this);
  }
  handleView(inView) {
    this.setState({
      view: inView
    })
  }
  render() { 
    return ( 
      <StaticQuery
        query={ graphql`
            query {
              home: file(relativePath: { eq: "page/home/hero.jpg" }) {
                publicURL
              }
            }
        ` }
        render={ data => {
          return (
            <InView as="section" triggerOnce onChange={inView => this.handleView(inView)}>
              <section
                className="church-manage justify-content-center"
                style={ {
                  background: `${ this.props.menuState ? `linear-gradient( rgba(0, 0, 0, .5), rgba(0, 0, 0, .5) ), `: ``} url(${data.home.publicURL})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                } }
              >
                <div className={ `church-manage-title text-white text-center ${this.state.view ? `fade-in-up` : `fade-in-hidden`}` }>
                  <div style={{ boxSizing: 'border-box'}}>
                    <h1 className="text-white"><em>church management.</em><strong>simplified.</strong></h1>
                  </div>
                </div>
              </section>
            </InView>
          )
        }}
      />
     );
  }
}
 
export default ChurchManagement;