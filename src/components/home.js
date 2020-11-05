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
import {store} from '../store'

class HomePage extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount = () =>{
        store.dispatch(SharedActions.setcurrentSelectedPage("myAccountPage"))
    }

    componentWillUnmount = () =>{
        store.dispatch(SharedActions.setcurrentSelectedPage(""))
    }

    goBack = () => {
        this.props.history.push(`/`);
    }

    render() {
        return (
            <Router>
                <BrowserView>
                    <div className="container-fluid mt-3 mb-3">
                        <div className="row">
                            <div className="col-12 col-sm-3 col-md-3 col-lg-2 bg-white">
                                <Sidenav params={this.props.match.params} />
                            </div>
                            <div className="col-12 col-sm-9 col-md-9 col-lg-10">
                                <div className="container">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <Switch>
                                            <Route path='/shop/:id/account/profile' component={Profile} />
                                            <Route path='/account/profile' component={Profile} />
                                            <Route path='/shop/:id/orders' component={MyOrders} />
                                            <Route path='/account/orders' component={MyOrders} />
                                            <Route path="/account/order/:orderId/orderDetail" component={OrderDetailPage}></Route>
                                            <Route path="/">
                                                {(GlobalTypes.SYSTEM_CONFIG.isSingleVendor && this.props.match.params?.id) ?
                                                    <Redirect to={`/shop/${this.props.match.params.id}/account/profile`} />
                                                    :
                                                    <Redirect to={`account/profile`} />
                                                }
                                            </Route>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <Header headingName={"My Account"} goBack={this.goBack} />
                    <div className="container mt-3 mb-3">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <Profile propsHistory={this.props}/>
                            </div>
                        </div>
                    </div>
                </MobileView>
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