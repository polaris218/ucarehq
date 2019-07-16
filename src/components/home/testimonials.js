import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import { InView } from 'react-intersection-observer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * 
 * @param {*} props 
 * @see https://github.com/kenwheeler/slick/issues/245#issuecomment-315374816
 * about react-slick dot color change
 */
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className='slick-arrow-prev'
      onClick={ onClick }
      style={ {
        position: 'absolute',
        display: 'block',
        height: '20px',
        width: '20px',
        top: '45%',
        color: '#fff',
        zIndex: '1',
      } }
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}
const NextArrow = (props) => {
  const {  onClick } = props;
  return (
    <div
      className='slick-arrow-next'
      onClick={ onClick }
      style={ {
        position: 'absolute',
        display: 'block',
        height: '20px',
        width: '20px',
        top: '45%',
        right: '0',
        color: '#fff',
        zIndex: '2',
      } }
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      view: false,
    }
    this.handleView = this.handleView.bind(this);
  }
  handleView(inView) {
    this.setState({ view: inView });
  }
  render() { 
    return ( 
      <StaticQuery
        query={ graphql`
          query Testnomial {
            bgImg: file(relativePath: { eq: "testimonials-bg.jpg" }) {
              publicURL
            }
            ourchurch: file(relativePath: { eq: "ourchurch.png" }) {
              publicURL
            }
            rcbc: file(relativePath: { eq: "rcbc.png" }) {
              publicURL
            }
            flc: file(relativePath: { eq: "flc.png" }) {
              publicURL
            }
            metro: file(relativePath: { eq: "metro.png" }) {
              publicURL
            }
            kings: file(relativePath: { eq: "kings.png" }) {
              publicURL
            }
          }
        `}
        render={ data => {
          const {
            bgImg,
            ourchurch,
            rcbc,
            flc,
            metro,
            kings,
          } = data;
          return (
            <section className="container-fluid p-0 testinomial" style={ {
              background: `url(${bgImg.publicURL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              boxSizing: 'border-box',
              width: '100%',
              height: '500px'
            } }>
              <InView as="div" triggerOnce onChange={ inView => this.handleView(inView) }>
                <div className={this.state.view ? `fade-in-up`: `fade-in-hidden`}>
                  <div className="container text-center text-white">
                    <h3>Churches We Work With</h3>
                  </div>
                  <div className="row m-0">
                    <div className="container text-center my-5 slick-panel">
                      <Slider
                        dots={ true }
                        infinite={ true }
                        speed={ 500 }
                        slidesToShow={ 3 }
                        slidesToScroll={ 1 }
                        autoplay={ true }
                        centerMode={ true }
                        style={ {
                          color: '#fff',
                        } }
                        prevArrow={ <PrevArrow /> }
                        nextArrow={ <NextArrow /> }
                        responsive={ [
                          { breakpoint: 1024,
                            settings: {
                              slidesToShow: 3,
                              slidesToScroll: 3,
                              infinite: true,
                              dots: true
                            }
                          },
                          // {
                          //   breakpoint: 700,
                          //   settings: {
                          //     slidesToShow: 2,
                          //     slidesToScroll: 2
                          //   }
                          // },
                          {
                            breakpoint: 800,
                            settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                            }
                          }
                        ]}
                      >
                          <img src={ ourchurch.publicURL } className="w-50" alt="ourchurch" />
                          <img src={ rcbc.publicURL } className="w-50" alt="ourchurch" />
                          <img src={ flc.publicURL } className="w-50" alt="ourchurch" />
                          <img src={ metro.publicURL } className="w-50" alt="ourchurch" />
                          <img src={ kings.publicURL } className="w-50" alt="ourchurch" />
                      </Slider>
                    </div>
                  </div>
                </div>
              </InView> 
            </section>
          )
        }}
      />
     );
  }
}

export default Testimonials;