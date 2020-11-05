import React from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {store} from '../store'


class Sidenav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'dashboard'
        }
    }
    render() {
        return (
            <div>
                <Nav variant="nav flex-column p-0 text-white" activeKey={`/${this.state.activeTab}`}>
                    <h5 className="font-weight-bold mb-3 test-center mt-3 ml-3">Users</h5>
                    <Nav.Item>
                        <Nav.Link href="/dashboard" as={Link} onClick={() => this.setState({ activeTab: 'dashboard' })} to={'/home/dashboard'}>Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/userLogs" as={Link} onClick={() => this.setState({ activeTab: 'userLogs' })} to={'/home/userLogs'}>Logs</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}



export default connect(mapStateToProps, null)(withRouter(Sidenav));