import React, { Component } from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import HamburgerMenu from 'react-hamburger-menu';
import { InView } from 'react-intersection-observer';
import Media from 'react-media';
import 'intersection-observer';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "transparent",
      isTop: true,
      menuOpen: false,
      location: null,
    };
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.handleIntersection = this.handleIntersection.bind(this);
  }
  componentWillMount() {
    if (typeof window !== `undefined`) {
      this.setState({ location: window.location.pathname });
    } 
  }
  handleHamburgerClick() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
    this.props.onHeaderHamburgerMenuClick();
  }
  handleIntersection(inView) {
    this.setState({ isTop: inView });
  }
  render() {
    return (
      <StaticQuery
        query={ graphql`
          query {
            heartLogo: file(relativePath: { eq: "ucare-heart.svg"}) {
              publicURL
            }
            bigLogo: file(relativePath: { eq: "ucare-logo.svg"}) {
              publicURL
            }
          }
        `}
        render={ data => {
          return (
            <InView as="nav" onChange={ inView => this.handleIntersection(inView) }>
              <nav className={ `navbar navbar-expand-lg fixed-top text-center ${this.state.isTop ? 'navbar-trans' : 'bg-lights'}` }>
                <div className={ this.state.isTop ? `biglogo` : `heartlogo` }>
                  <div className={ this.state.menuOpen ? `hide-logo` : `show-logo` }>
                    <Link to="/">
                      <img
                        src={
                          this.state.isTop
                            ? data.bigLogo.publicURL
                            : data.heartLogo.publicURL
                        }
                        alt="Logo"
                      />
                    </Link>
                  </div>
                </div>
                <Media query="(min-width: 990px)">
                  {
                    matches => matches &&
                      <ul className="navbar-nav mx-auto">
                        <li>
                          <Link to="/features" className={ `nav-item  ${!this.state.isTop && `item-down`}` }>
                            features
                          </Link>
                        </li>
                        <li>
                          {
                            this.state.location === "/"
                              ? (
                                <ScrollLink
                                  to="pricing"
                                  spy={ true }
                                  smooth={ true }
                                  hashSpy={ true }
                                  duration={ 500 }
                                  className={ `nav-item  ${!this.state.isTop && `item-down`}` }
                                  activeClass="pricing-active-class"
                                >
                                  pricing
                                </ScrollLink>
                              )
                              : (
                                <Link to="/#pricing" className={ `nav-item  ${!this.state.isTop && `item-down`}` }>
                                  pricing
                                </Link>
                              )
                          }
                        </li>
                        <li>
                          <a href="https://ucare.zendesk.com/hc/en-us" className={ `nav-item  ${!this.state.isTop && `item-down`}` }>
                            support
                          </a>
                        </li>
                        <li>
                          <Link to="/blog" className={ `nav-item  ${!this.state.isTop && `item-down`}` }>
                            blog
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://connect.ucareapp.com/signin?_ga=2.13867701.365518745.1558216565-1288942489.1557477004"
                            className={ `nav-item  ${!this.state.isTop && `item-down`}` }
                          >
                            sign in
                        </a>
                        </li>
                      </ul>
                  }
                </Media>
                <Link
                  className={ `btn trial-btn ${this.state.isTop ? 'trial-hide' : ''}` }
                  to="/sign-up"
                >
                  free 30-day trial&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={ faChevronRight } />
                </Link>
                <button
                  className={
                    `text-center text-white hamburger 
                    ${this.state.menuOpen ? `hamburger-active` : `hamburger-inactive`}
                    ${!this.state.isTop && `hamburger-below`}`
                  }
                  onClick={this.handleHamburgerClick.bind(this)}
                >
                  {
                    this.state.menuOpen
                      ? <HamburgerMenu
                        isOpen={ this.state.menuOpen }
                        menuClicked={ this.handleHamburgerClick.bind(this) }
                        width={ 24 }
                        height={ 12 }
                        strokeWidth={ 2 }
                        rotate={ 0 }
                        borderRadius={ 0 }
                        // animationDuration={ 0.5 }
                        color={ this.state.isTop ? `#fff` : `#000` }
                      />
                      : <HamburgerMenu
                        isOpen={ this.state.menuOpen }
                        menuClicked={ this.handleHamburgerClick.bind(this) }
                        width={ 24 }
                        height={ 12 }
                        strokeWidth={ 2 }
                        rotate={ 0 }
                        borderRadius={ 0 }
                        // animationDuration={ 0.5 }
                        color={ this.state.isTop ? `#fff` : `#000` }
                      />
                  }
                </button>
                <div className={ `sidebar ${this.state.menuOpen ? `sidebar-active` : `sidebar-inactive`}` }>
                  <Link to={ `/features` } className={ `sidebar-item` }>Features</Link>
                  {
                    this.state.location === "/"
                      ? (
                        <ScrollLink
                          to="pricing"
                          smooth={ true }
                          hashSpy={ true }
                          duration={ 500 }
                          className={ `sidebar-item` }
                          activeClass="pricing-active-class"
                        >
                          pricing
                      </ScrollLink>
                      )
                      : (
                        <Link to="/#pricing" className={ `sidebar-item` }>
                          pricing
                      </Link>
                      )
                  }
                  <a href="https://ucare.zendesk.com/hc/en-us" className={ `sidebar-item` }>support</a>
                  <Link to="/blog" className={ `sidebar-item` }>blog</Link>
                  <a
                    href="https://connect.ucareapp.com/signin?_ga=2.13867701.365518745.1558216565-1288942489.1557477004"
                    className={ `sidebar-item` }
                  >
                    sign in
                  </a>
                  <Link className="trials-free-btn" to="/sign-up">
                    free 30-day trial&nbsp;&nbsp;
                    <FontAwesomeIcon icon={ faChevronRight } />
                  </Link>
                </div>
              </nav>
            </InView>
          )
        }}
      />
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
