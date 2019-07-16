import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';
import { Link } from 'gatsby';

import OnlinestoresIcons from '../Icons/onlinestores';
import DashboardsIcons from '../Icons/dashboards';
import SchedulingIcons from '../Icons/scheduling';
import PeopleIcons from '../Icons/people';
import SecurityIcons from '../Icons/security';
import Giving from '../Icons/giving';

class FeatureList2 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstLineView: false,
      secondLineView: false,
    }
    this.handleFirstLineView = this.handleFirstLineView.bind(this);
    this.handleSecondLineView = this.handleSecondLineView.bind(this);
  }
  handleFirstLineView(inView) {
    this.setState({ firstLineView: inView });
  }
  handleSecondLineView(inView) {
    this.setState({ secondLineView: inView });
  }
  render() { 
    return ( 
      <div className="featurelist2">
        <InView as="div" triggerOnce onChange={inView => this.handleFirstLineView(inView)}>
          <div className={`row up ${this.state.firstLineView && `fade-in-up`}`}>
            <div className="col-md-4 feature-el">
              <Link to="/features/online-stores/">
                <div className="circle online-stores">
                  <OnlinestoresIcons />
                </div>
              </Link>
              <h6>Online Stores & POS</h6>
            </div>
            <div className="col-md-4 feature-el">
              <Link to="/features/giving-finances/">
                <div className="circle giving">
                  <Giving />
                </div>
              </Link>
              <h6>Giving & Finances</h6>
            </div>
            <div className="col-md-4 feature-el">
              <Link to="/features/dashboards/">  
                <div className="circle dashboards">
                  <DashboardsIcons />
                </div>
                </Link>
              <h6>Dashboards</h6>
            </div>
          </div>
        </InView>
        <InView as="div" triggerOnce onChange={inView => this.handleSecondLineView(inView)}>
          <div className={`row down ${this.state.secondLineView && `fade-in-up`}`}>
            <div className="col-md-4 feature-el">
              <Link to="/features/scheduling-reservations/">
                <div className="circle scheduling">
                  <SchedulingIcons />
                </div>
              </Link>
              <h6>Scheduling & Reservations</h6>
            </div>
            <div className="col-md-4 feature-el">
              <Link to="/features/people/">
                <div className="circle people">
                  <PeopleIcons />
                </div>
              </Link>
              <h6>People</h6>
            </div>
            <div className="col-md-4 feature-el">
              <Link to="/features/security/">
                <div className="circle security">
                  <SecurityIcons />
                </div>
              </Link>
              <h6>Security</h6>
            </div>
          </div>
        </InView>
      </div>
    );
  }
}
 
export default FeatureList2;