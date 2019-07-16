import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

import Header from './header';
import "./layout.scss";

const style = {
  color: '#fff',
  textDecoration: 'none',
}

class Layout extends Component {
  render() { 
    return ( 
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                menuLinks {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            <Header
              menuLinks={ data.site.siteMetadata.menuLinks }
              siteTitle={ data.site.siteMetadata.title }
              onHeaderHamburgerMenuClick={ this.props.onHamburgerMenuClick }
            />
            <div
              style={{
                margin: `0`,
                maxWidth: '100%',
                padding: `0px 0rem 0px`,
                paddingTop: 0,
              }}
            >
              <main>{this.props.children}</main>
            </div>
            <footer className="footer text-center">
              <p style={ {
                fontFamily: `"lato", "Helvetica Neue", Helvetica, Arial, sans-serif`,
                fontFeatureSettings: `"liga" 0`,
              }}>
                © Copyright UCare {`2006-${new Date().getFullYear()}`}&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to="/privacy" style={style}>Privacy</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to="/terms" style={style}>Terms</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <Link to="/sla" style={style}>SLA</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                <a
                  href="http://status.ucarehq.com/"
                  style={style}
                >
                  Status
                </a>
              </p>
            </footer>
          </React.Fragment>
        )}
      />
     );
  }
}
 
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
