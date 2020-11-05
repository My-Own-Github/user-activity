import React from 'react';
import './scss/App.scss';
import './scss/common.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './components/login'
import { connect } from 'react-redux';
import Dashboard from './components/dashboard'
import HomePage from './components/home'

const mapStateToProps = (state) => {
  return {
    
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.isUserAuth = JSON.parse(localStorage.getItem('isUserAuth'))
    console.log(this.isUserAuth)
  }
  // componentDidMount = () => {
  //   store.dispatch(loadProfileFromLsAc())
  // }

  render() {
    return (
      <Router>
        <>
          <div className="main-Container">
            <Switch>
              {/* <Route path="/dashboard" component={Dashboard} /> */}
              <Route path="/login" component={Login} />
              <Route path="/home" component={HomePage} />
              <Route path="/">
                <Redirect to={this.isUserAuth? '/home' : '/login'}/>
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
