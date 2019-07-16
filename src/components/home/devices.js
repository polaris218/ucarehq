import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { InView } from 'react-intersection-observer';

class Devices extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      descView: false,
      iDeviceView: false,
      appStore: false,
    }
    this.handleDescView = this.handleDescView.bind(this);
    this.handleiDeviceView = this.handleiDeviceView.bind(this);
    this.handleAppStoreView = this.handleAppStoreView.bind(this);
  }
  handleDescView(inView) {
    this.setState({ descView: inView });
  }
  handleiDeviceView(inView) {
    this.setState({ iDeviceView: inView });
  }
  handleAppStoreView(inView) {
    this.setState({ appStore: inView });
  }
  render() { 
    return ( 
      <StaticQuery
        query={ graphql`
          query {
            googleStore: file(relativePath: { eq: "page/home/en_badge_web_generic-300x89.png" }) {
              publicURL
            }
            devices: file(relativePath: { eq: "page/home/iDevices2.png" }) {
              publicURL
            }
          }
        `}
        render={ data => (
          <section className="container-fluid devices">
            <div className="row">
              <div className="col-lg-4 offset-lg-2 col-sm-8 offset-sm-2">
                <InView as="div" triggerOnce onChange={ inView => this.handleDescView(inView) }>
                  <div className={this.state.descView ? `fade-in-left`: `fade-in-hidden`}>
                    <h2>What you need</h2>
                    <h2>when you need it</h2>
                    <h2>on all you devices</h2>
                    <p>
                      No matter what your role in church, having access to the people and information that’s most important to you can help immensely. Being able to contact the right people, ensure people are followed up and tasks are actioned right away can help big churches feel less impersonal and small churches feel better resourced.
                    </p>
                    <p>
                      Whether you love your Apple, Android or Windows device, we’ve got you covered with full featured apps for when you’re not at a desk. And if you’re a Mac, PC or Chromebook user you’re all set, just fire up your web browser and you’ll have access to the same info and features available on your mobile device.
                    </p>
                  </div>
                </InView>
              </div>
              <div className="col-lg-6 device-photo" >
                <InView as="div" triggerOnce onChange={ inView => this.handleiDeviceView(inView) }>
                  <div className={this.state.iDeviceView ? `fade-in-right`: `fade-in-hidden`}>
                    <img src={ data.devices.publicURL } alt="iDevices"/>
                  </div>
                </InView>
              </div>
            </div>
            <InView as="div" triggerOnce onChange={inView => this.handleAppStoreView(inView)}>
              <div className={`row apple-google-play ${this.state.appStore ? `fade-in-up`: `fade-in-hidden`}`}>
                <div className="col-md-1 offset-md-3 text-center">
  
                    <a href="https://itunes.apple.com/us/app/ucare./id905961512?mt=8">
                      <img
                        className="button-center"
                        src="https://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg"
                        alt="Download on the AppStore"
                      />
                    </a>

                </div>
                <div className="col-md-1 offset-md-3 text-center" >
                  <a href="https://play.google.com/store/apps/details?id=com.ucareapp.app" >
                    <img
                      className="button-center"
                      src={ data.googleStore.publicURL }
                      alt="Get it on Google Play"
                      />
                  </a>
                </div>
              </div>
            </InView>
          </section>
        )}
      />
    );
  }
}
 
export default Devices;