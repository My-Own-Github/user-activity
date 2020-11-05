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
import HomePage from './components/home'

/**
 *
 *
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  /**
   *
   *
   * @memberof App
   */
  componentDidMount = () => {
    this.isUserAuth = JSON.parse(localStorage.getItem('isUserAuth'))
  }

  /**
   *
   *
   * @returns
   * @memberof App
   */
  render() {
    return (
      <Router>
        <>
          <div className="main-Container">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/home" component={HomePage} />
              <Route path="/">
                <Redirect to={this.isUserAuth ? '/home' : '/login'} />
              </Route>
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
