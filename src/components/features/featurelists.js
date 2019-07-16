import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';
import { Link } from 'gatsby';

import AttendanceIcon from '../Icons/attendance';
import ChildIcon from '../Icons/child';
import EventBooking from '../Icons/eventbooking';
import Group from '../Icons/groups';
import Process from '../Icons/process';
import Giving from '../Icons/giving';
import SurveysIcons from '../Icons/surveys';

class FeatureList extends Component {
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
      <div className="featurelist1">
        <InView as="div" triggerOnce onChange={inView => this.handleFirstLineView(inView)}>
          <div className={`row row-up ${this.state.firstLineView && `fade-in-up`}`}>
            <div className="col-md-4 feature-el">
              <Link to="/features/attendance-tracking/">
                <div className="circle attendance">  
                  <AttendanceIcon />
                </div>
              </Link>
              <h6>Attendance Tracking</h6>
            </div>
            <div className="col-md-4 feature-el">
              <Link to="/features/check-in-child-safety/">
                <div className="circle child">
                  <ChildIcon />  
                </div>
              </Link>
              <h6>Check-in & Child Safety</h6>
            </div>
            <div className="col-md-4 feature-el">
              <Link to="/features/event-ticket-booking/">
                <div className="circle event-booking">
                  <EventBooking />  
                </div>
              </Link>
              <h6>Event Bookings</h6>
            </div>
          </div>
        </InView>
        <InView as="div" triggerOnce onChange={inView => this.handleSecondLineView(inView)}>
          <div className={`row row-down ${this.state.secondLineView && `fade-in-up`}`}>
            <div className="col-md-4 feature-el">
              <Link to="/features/groups/">
                <div className="circle groups">
                  <Group />
                </div>
              </Link>
              <h6>Groups</h6>
            </div>
            <div className="col-md-4 feature-el">
              <Link to="/features/processes-automation/">
                <div className="circle process">
                  <Process />
                </div>
              </Link>
              <h6>Process & Automation</h6>
            </div>
            <div className="col-md-4 feature-el">
              {
                this.props.location === 'root' ?
                  <Link to="/features/giving-finances/">
                    <div className="circle giving">
                      <Giving /> 
                    </div>
                  </Link>
                  :
                  <Link to="/features/forms-and-surveys/">
                    <div className="circle surveys">
                      <SurveysIcons />
                    </div>
                  </Link>
              }
              <h6>
                {
                  this.props.location === `root` 
                    ? 'Giving & Finances'
                    : 'Forms & Surveys'
                }
                </h6>
            </div>
          </div>
        </InView>
      </div>
    );
  }
}
 
export default FeatureList;