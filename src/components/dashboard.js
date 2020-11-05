import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { store } from "../../store";
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';
import '../scss/common.scss'
import Operation from '../duck/operation'

const mapStateToProps = (state) => {
    // return {
    //     profile: state.profile,
    //     resWithoutLogin: state.regShopWithoutLogin
    // }
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            email: '',
            password: '',
            showErrorMsg: false,
            formValid: false
        }
        this.state = this.initialState;

    }
    onValueChange = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            this.login();
        }
        this.setState({ formValid: true, showErrorMsg: false })
    };

    login = async () => {
        let loginPayload = {
            "username": this.state.email,
            "password": this.state.password
        }
        let res = await Operation.loginUser(loginPayload);
        if (res.status === "success") {
            this.props.history.push(`/dashboard`);
        } else {
            this.setState({ showErrorMsg: true })
        }
    }

    goToDashboard = () => {

    }

    render() {
        return (
            <div>
                <h4>this is dashboard</h4>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(Dashboard);