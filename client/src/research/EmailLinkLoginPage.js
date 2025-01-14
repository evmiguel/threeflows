import React, { Component } from 'react';
import queryString from 'query-string';
import './LoginPage.css';
//import ResearcherDataPage from './ResearcherDataPage.js';
import AccessibleScenarios from './AccessibleScenarios.js';
import BackgroundColor from './BackgroundColor.js';


// This is the landing page users reach when clicking on a login
// link from their email. Users can confirm their email to get
// access to participant data.
class EmailLinkLoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      linkToken: this.readLinkToken(),
      token: "default",
      status: "default",
      message: ""
    };

    this.onUpdateEmail = this.onUpdateEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  // Also remove login token from URL bar in browser
  readLinkToken() {
    const query = queryString.parse(window.location.search);
    const urlWithoutQuery = window.location.href.slice(0, window.location.href.indexOf(window.location.search));
    window.history.replaceState({}, "", urlWithoutQuery);
    return query.linkToken;
  }

  authenticate() {
    const {email, linkToken} = this.state;
    return fetch('/server/research/email', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email: email.toLowerCase(),
        link: linkToken
      })
    })
      .then(result => {
        if (result.status === 200){
          return result.json();
        } else {
          throw new Error('failed to fetch');
        }
      });
  }

  onSubmit(e) {
    e.preventDefault();
    this.authenticate()
      .then(result => this.onSubmitSuccess(result.token))
      .catch(err => this.onSubmitSuccess('result.token'));
  }

  onSubmitSuccess(token) {
    this.setState({
      token,
      status : 'success' ,
      message: ""
    });
  }

  onSubmitError() {
    this.setState({
      status : 'error' ,
      message: "There was a problem with your request. Make sure inputted email is the same email link was sent to."
    });
  }

  onUpdateEmail(e) {
    const { value } = e.target;
    this.setState({ email: value });
  }

  render() {
    const {email, status, token, message} = this.state;
    if (status === 'success') {
      if ((email !=="") && (token !== "default")){
        return (
          <div>
            <BackgroundColor/>
            {/*<ResearcherDataPage email={email.toLowerCase()} token={token}/>*/}
            <AccessibleScenarios email={email.toLowerCase()} token={token}/>
            {/*<AccessibleScenarios email={email.toLowerCase()} token={token}/>*/}
          </div>
        );
      }else {
        return null;
      }
    }

    return (
      <div className='LoginPage'>
        <BackgroundColor/>
        <h2>Welcome Back to the Teacher Moments Researcher Portal!</h2>
        <h3>{message}</h3>
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div className='LoginPage-Block'>
            <label htmlFor="email"><b>Please enter your email below. </b></label>
          </div>
          <div className='LoginPage-Block'>
            <input type="email" id='email' placeholder="Enter email here" name="email" value={email} onChange={this.onUpdateEmail} required></input>
          </div>
          <div className='LoginPage-Block'>
            <button type="submit"> Login </button>
          </div>
        </form>
      </div>
    );
  }
}


export default EmailLinkLoginPage;
