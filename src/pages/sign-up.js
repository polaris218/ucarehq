import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import { getNames } from 'country-list';

import Layout from '../components/layout';
import LatestBlog from '../components/blogs/latestblog';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
class Singup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryNames: [],
      qa: [
        { "Q": " What happens after my trial?", "A": "You can subscribe any time during your 30-day trial. However, if you hit the end of your trial without subscribing, your account will be put on hold (all your data will stay safe for another 30 days, so don’t stress) until you subscribe or cancel." },
        { "Q": " Do I have to sign a long term contract?", "A": "No. UCare is pay as you go, there are no long term contracts or commitments on your part. You simply pay month-to-month. If you cancel, you’ll be billed for the current month, but you won’t be billed again." },
        { "Q": " Are there per-user fees?", "A": "No. The price is inclusive of all the feature, with as many users as you need. We charge based on the number of people regularly connected to your church." },
        { "Q": "Who is considered regular?", "A": "We consider any person that attends three or more times in 60 days to be regular. If people stop attending regularly you should archive them." },
        { "Q": " Can I still contact archived people?", "A": "Yes, archived people are similar to regular people & visitors. You can still view their full profile, send them email or SMS, register for events and record future attendance." },
        { "Q": " Do you charge for visitors?", "A": "We don’t charge for visitors or infrequent attenders, though once people attend three times in 60 days they are considered regular and will be charged for." },
        { "Q": " Do you charge for children?", "A": "We only charge for children who attend regularly, this allows us to dedicate resources to continue improving our easy to use child safety features." },
        { "Q": " What types of payment do you accept?", "A": "Once your trial ends you’ll be able to pay your monthly subscription using any major credit card or you can use PayPal." },
        { "Q": " Are there setup costs?", "A": "None, simply subscribe after your 30-day trial ends to keep your account." },
        { "Q": " Can I import our data?", "A": "Sure can. UCare walks you through importing people, households, groups and more from CSV files. Most databases will export in CSV format so you can quickly transition your data." },
        { "Q": " Can you help migrate our data?", "A": "Yes! Our team has a number of tools to help migrate more of your data to UCare. Please use the help button to contact our support team who are happy to help." },
        { "Q": " Will I be able to import custom fields?", "A": "Yes! You can import as many custom fields as you need, you can even give your users the ability to create custom fields on the fly if you want." },
        { "Q": " Can we export our data?", "A": "Whether you want a backup or you have decided to close your account you can export your data from UCare." },
        { "Q": " What format can we export?", "A": "You can export your data in CSV format when you need, or contact support to request a copy of the latest backup of your data." },
        { "Q": " How often are backups run?", "A": "Backup runs continuously, backing up your data to different geographical locations. If the internet dies or the hardware that your data is on then within about one minute our systems automatically switch to a backup." },
        { "Q": " Where is our data stored?", "A": "Your data is stored as close to you as possible, this can be important to ensure that your data is governed by to laws of your country. We currently have two locations in the United States, two in Europe and two in Australia." },
        { "Q": " Do you provide training?", "A": "Absolutely! We want to do everything we can to make sure you understand how to use UCare and are using it the best you can. After all, if no one can use it, what good is it? Use the help button to find out more." },
        { "Q": " What level of auditing exists?", "A": "For security reasons it may be important to audit user’s activity. Admins have access to a full audit log so they can see exactly who is viewing which info and what changes they are making." },
        { "Q": " What happens to deleted info?", "A": "Any deleted info (e.g. people, groups, payments, etc.) is removed right away. But a backup of this info is kept and you can undelete it at any time, it will even be available in 10 years." },
        { "Q": " What is your service availability?", "A": "Our average up-time is over 99.95%, less than 20 minutes unplanned down time in a month. We have a <a href=\"/sla\" /> Service Level Agreement of 99.9%,</a> if we ever fail to meet this a credit will be applied to your account." },
        { "Q": " Do you have phone support?", "A": "We find that our free email support & help center is more than adequate for most churches. But phone support packages are available, use the help button to ask for a quote." },
      ],
      rows: null,
      firstname: null,
      lastname: null,
      email: null,
      countryname: "Australia",
      mobile: null,
      tenant: null,
      formValidation: {
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        tenant: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    const { countryNames, qa } = this.state;
    countryNames.push("Australia");
    countryNames.push("Canada");
    countryNames.push("New Zealand");
    countryNames.push("South Africa");
    countryNames.push("United Kingdom");
    countryNames.push("USA");
    countryNames.push("---");
    
    for (let i = 0; i < getNames().length; i++) {
      if (
        getNames()[i] !== "Australia" &&
        getNames()[i] !== "Canada" &&
        getNames()[i] !== "New Zealand" &&
        getNames()[i] !== "South Africa" &&
        getNames()[i] !== "United Kingdom" &&
        getNames()[i] !== "USA" &&
        getNames()[i] !== "United States"
      ) {
        countryNames.push(getNames()[i]);
      }
    }
    this.setState({
      rows: qa.length % 3 === 0 ? qa.length / 3 : parseInt(qa.length / 3) + 1
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { firstname, lastname, email, tenant } = this.state;

    !firstname &&
      this.setState(prevState => ({
        formValidation: {
          ...prevState.formValidation,
          firstname: "error",
        }
      }))
    !lastname &&
    this.setState(prevState => ({
      formValidation: {
        ...prevState.formValidation,
        lastname: "error",
      }
    }))
    !tenant &&
    this.setState(prevState => ({
      formValidation: {
        ...prevState.formValidation,
        tenant: "error",
      }
    }))
    !email && (
      this.setState(prevState => ({
        formValidation: {
          ...prevState.formValidation,
          email: "error",
        }
      }))
    )
    if ( firstname && lastname && tenant && email ) {
      fetch("https://crm.ucareapp.com/signup", {
        method: "put",
        "Content-type": "application/json"
      }).then(response => response.json())
        .then(res => {
          console.log(res);
        })
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === "email") {
      const { email } = this.state;
      !emailRegex.test(email) ?(
        this.setState(prevState => ({
          formValidation: {
          ...prevState.formValidation,
            email: "type-error"
          }
        }))
      ): (
        this.setState(prevState => ({
          formValidation: {
            ...prevState.formValidation,
            email: "",
          }
        }))
      )
    } 
    if(event.target.name === "firstname") 
    this.setState(prevState => ({
      formValidation: {
        ...prevState.formValidation,
        firstname: "",
      }
    }))
    if(event.target.name === "lastname") 
      this.setState(prevState => ({
        formValidation: {
          ...prevState.formValidation,
          lastname: "",
        }
      }))
    if(event.target.name === "tenant") 
    this.setState(prevState => ({
      formValidation: {
        ...prevState.formValidation,
        tenant: "",
      }
    }))
  }
  render() {
    const { countryNames, qa, formValidation } = this.state;
    const { firstname, lastname, email, tenant } = formValidation;
    typeof window !== `undefined` && (window.document.title = '30-day free trial | Ucare');
    return (
      <Layout>
        <div className="container-fluid p-0 blog-header text-center" style={ {
          background: `linear-gradient( rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45) ), url(${this.props.data.signup.publicURL})`,
          backgroundColor: '#323a46',
          backgroundPosition: '50%',
          backgroundSize: 'cover'
        } }>
          <div className="centered">
            <h1>30-day free trial</h1>
            <h6>No obligations and no credit card required.</h6>
          </div> 
        </div>
        <div className="container signup">
          <div className="row signup-form">
            <div className="col-md-8 user-input-form">
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Your name*</label>
                    <input
                      type="text"
                      className={`form-control ${firstname === "error" ? "error": ""}`}
                      placeholder="First name" 
                      name="firstname"
                      onChange={this.handleChange}
                    />
                    { firstname === "error" && <small className="error-message">This is required</small> }
                  </div>
                  <div className="form-group col-md-6">
                    <label>&nbsp;</label>
                    <input
                      type="text" 
                      className={`form-control ${firstname === "error" ? "error": ""}`}
                      placeholder="Last name"
                      name="lastname"
                      onChange={this.handleChange}
                    />
                    { lastname === "error" && <small className="error-message">This is required</small> }
                  </div>
                </div>
                <div className="form-group">
                  <label>Your email*</label>
                  <input
                    type="email"
                    className={`form-control ${firstname === "error" ? "error": ""}`}
                    placeholder="This must be correct as we will email you with you sign in details"
                    name="email"
                    onChange={this.handleChange}
                  />
                  { email === "error" && <small className="error-message">This is required</small> }
                  { email === "type-error" && <small className="error-message">A valid email is required</small> }
                </div>
                <div className="form-group">
                  <label>
                    Your country*
                    <small> — so we know where to store your data & format phone numbers</small>
                  </label>
                  <select
                    className={`form-control`}
                    onChange={ this.handleChange }
                    name="countryname"
                    value={this.state.countryname}
                  >
                    {
                      countryNames.map((item, key) => (
                        <option key={key}>{ item }</option>
                      ))
                    }
                  </select>
                </div>
                <div className="form-group">
                  <label>Your mobile phone</label>
                  <input
                    type="tel"
                    className={`form-control`}
                    maxLength="255"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Required for sms features"
                    name="mobile"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Reserve your UCare site address*</label>
                  <div>
                    <h6>https://
                    <input
                      className={ `church-appenx ${tenant === "error" ? "error": "" }`}
                      id="tenant"
                      name="tenant"
                      title="address"
                      type="text"
                      minLength="3"
                      maxLength="255"
                      required=""
                      pattern="^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$"
                      placeholder={`e.g. yourchurch`}
                      onChange={this.handleChange}
                    />
                    .ucareapp.com
                    </h6>
                    { tenant === "error" && <small className="error-message">This is required</small> }
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-success trial"
                >
                  Start your free 30-day trial
                </button>
                <p>
                  <small>
                    By clicking you agree to the 
                    <Link to="/terms"> Terms of Service</Link> and 
                    <Link to="/privacy"> Privacy policy.</Link>
                  </small>
                </p>
              </form>
            </div>
            <div className="col-md-4">
              <ul className="list-group">
                <li><h5>Your trial includes everything</h5></li>
                <li><img src={ this.props.data.checkMark.publicURL} alt="check mark"/>&nbsp;&nbsp; Unlimited users</li>
                <li><img src={ this.props.data.checkMark.publicURL} alt="check mark"/>&nbsp;&nbsp; People & households</li>
                <li><img src={ this.props.data.checkMark.publicURL} alt="check mark"/>&nbsp;&nbsp; Child safety & Check-in</li>
                <li><img src={ this.props.data.checkMark.publicURL} alt="check mark"/>&nbsp;&nbsp; Giving & stores</li>
                <li><img src={ this.props.data.checkMark.publicURL} alt="check mark"/>&nbsp;&nbsp; Group management</li>
                <li><img src={ this.props.data.checkMark.publicURL} alt="check mark"/>&nbsp;&nbsp; Dashboards & reports</li>
                <li><img src={ this.props.data.checkMark.publicURL} alt="check mark"/>&nbsp;&nbsp; Custom forms</li>
                <li><img src={ this.props.data.checkMark.publicURL} alt="check mark"/>&nbsp;&nbsp; Bulk email & SMS</li>
                <li><img src={ this.props.data.checkMark.publicURL} alt="check mark"/>&nbsp;&nbsp; Integrations & API</li>
                <li><img src={ this.props.data.checkMark.publicURL} alt="check mark"/>&nbsp;&nbsp; Email support & help center</li>
              </ul>
            </div>
          </div>
          <div className="row faq">
            <div className="text-center">
              <div className="faq-title">
                <h2>Frequently Asked Questions</h2>
                <p>
                  We’re here to help. If you run into any problems at all, feel free to use the help button to contact us.
                </p>
              </div>
              <div className="row text-left">
              {
                qa.map((item, key) => (
                  <div className="col-md-4 m-0 p-2 pl-3 pr-3 d-inline qas" key={key}>
                    <h4>{`Q: ${item.Q}` }</h4>
                    <p dangerouslySetInnerHTML={{__html: item.A }}></p>
                  </div>
                ))
              }
              </div>
            </div>
          </div>
        </div>
        <LatestBlog />
      </Layout>
     );
  }
}
 
export default Singup;
export const signupQuery = graphql`
  query {
    signup: file(relativePath: { eq: "page/sign-up/pricing.jpg" }) {
      publicURL
    }
    checkMark: file(relativePath: { eq: "check2.svg" }) {
      publicURL
    }
  }
`