import React from 'react'
import { connect } from 'react-redux';
import {FaUserAlt, FaUserAltSlash} from 'react-icons/fa'
import UserLogs from './userLogs'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.activeUesrLS = JSON.parse(localStorage.getItem('activeUsers')) 
        this.inactiveUesrLS = JSON.parse(localStorage.getItem('inactiveUsers')) 
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center justify-content-center">
                    <div className="col-12 border-bottom mb-3 bg-light p-3">
                        <h6 className="text-dark mb-0">User Activity</h6>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4  card-deck">
                        <div className="card mb-3 dashboard-card-1 shadow">
                            <div className="card-body">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-7 col-md-7 col-lg-7">
                                        <h1 className="dashboard-icon-size" style={{ "fontSize": '80px' }}><FaUserAlt /></h1>
                                    </div>
                                    <div className="col-5 col-md-5 col-lg-5">
                                        <h2 className="mb-0  text-center font-weight-bolder" style={{ "fontSize": '40px' }}>{this.props.activieUser? this.props.activieUser : this.activeUesrLS}</h2>
                                    </div>
                                    {this.props.activieUser}
                                </div>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h6 className="mb-0"><strong>Active Users</strong></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4  card-deck">
                        <div className="card mb-3 dashboard-card-1 shadow">
                            <div className="card-body">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-7 col-md-7 col-lg-7">
                                        <h1 className=" dashboard-icon-size" style={{ "fontSize": '80px' }}><FaUserAltSlash /></h1>
                                    </div>
                                    <div className="col-5 col-md-5 col-lg-5">
                                        <h2 className="mb-0 text-center font-weight-bolder" style={{ "fontSize": '40px' }}>{this.props.inactivieUser? this.props.inactivieUser : this.inactiveUesrLS}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-white border-0 text-center">
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <h6 className="mb-0"><strong>In Active Users</strong></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 border-bottom mb-3 bg-light p-3 mt-5">
                        <h6 className="text-dark mb-0">User Logs</h6>
                    </div>
                    <UserLogs />
                    {/* <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4  card-deck">
                        <UserLogs />
                    </div> */}
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activieUser: state.activity?.activeUser,
        inactivieUser: state.activity?.inactiveUser
    }
}

export default connect(mapStateToProps)(Dashboard);