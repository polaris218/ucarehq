import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { InView } from 'react-intersection-observer'; 

class Management extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false
    };
    this.handleView = this.handleView.bind(this);
  }
  handleView(inView) {
    this.setState({ view: inView });
  }
  render() { 
    return ( 
      <InView as="section" triggerOnce onChange={inView => this.handleView(inView)}>
        <section className={`container management justify-content-center ${this.state.view ? `fade-in-up`: `fade-in-hidden`}`}>
          <h1 className="text-center title ">
            Easy to use church management software isn’t optional, it’s essential.
          </h1>
            <h2 className="text-center try-ucare">
              Try UCare FREE for 30 days.&nbsp;
                <a href="/sign-up">
                <button className="try-today">
                  try today&nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
                </a>
            </h2>
        </section>
      </InView>
    );
  }
}

export default Management;