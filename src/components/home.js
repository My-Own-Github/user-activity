import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Sidenav from './sideNav';
import {
    BrowserView, MobileView
} from "react-device-detect";
import { store } from '../store'
import Dashboard from './dashboard'
import UserLogs from './userLogs'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    goBack = () => {
        this.props.history.push(`/`);
    }
    sigout = () => {
        store.dispatch({ type: 'CLEAR_SESSION' });    // Clear redux store from root reducer.
        window.localStorage.clear();
        this.props.history.push(`/login`);
    }

    render() {
        return (
            <Router>
                <BrowserView>
                    <div className="container-fluid mt-3 mb-3">
                        <div className="text-right mr-3 mb-2">
                            <button className="btn btn-warning" onClick={() => this.sigout()}> Signout </button>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-3 col-md-3 col-lg-2 text-white" style={{ backgroundColor: "#935A36" }}>
                                <Sidenav />
                            </div>
                            <div className="col-12 col-sm-9 col-md-9 col-lg-10">
                                <div className="container">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <Switch>
                                            <Route path='/home/dashboard' component={Dashboard} />
                                            <Route path='/home/userLogs' component={UserLogs} />
                                            <Route path="/">
                                                <Redirect to={`/home/dashboard`} />
                                            </Route>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserView>
                {/* <MobileView>
                    <div className="container mt-3 mb-3">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <Profile propsHistory={this.props}/>
                            </div>
                        </div>
                    </div>
                </MobileView> */}
            </Router >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps)(HomePage);