import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';
import '../scss/common.scss'
import Operation from '../duck/operation'

class Login extends React.Component {
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
        this.setState({ [name]: value, showErrorMsg: false });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            this.login();
        }
        this.setState({ formValid: true })
    };

    login = async () => {
        let loginPayload = {
            "username": this.state.email,
            "password": this.state.password
        }
        let res = await Operation.loginUser(loginPayload);
        if (res.status === "success") {
            toast.notify(`Login Successfully`, {
                position: 'top',
                duration: 2000
            })
            this.props.history.push(`/home`);
        } else {
            this.setState({ showErrorMsg: true })
        }
    }

    render() {
        return (
            <div className="container mt-5 mb-3">
                <div className="card  shadow-lg  bg-white rounded-lg h-100">
                    <div className="row justify-content-center">
                        <div className="col-6 loginbgPic">
                            <Card.Body className="mb-0">
                                <h5 className="card-title text-center text-white"><strong>Welcome Back!</strong></h5>
                            </Card.Body>
                        </div>
                        <div className="col-6">
                            <Card.Body className="mb-0">
                                <Card.Title className="text-center" style={{ color: "#935A36" }}><strong>Let's Get Started</strong></Card.Title>
                                <Form noValidate validated={this.state.formValid} onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="email">
                                        <Form.Control type="text" placeholder="Email" style={{ borderRadius: '20px' }} value={this.state.email} onChange={this.onValueChange} name="email" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a email.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Control type="text" placeholder="Password" style={{ borderRadius: '20px' }} value={this.state.password} onChange={this.onValueChange} name="password" required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a registered password.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <div className="row mt-3 justify-content-center" hidden={!this.state.showErrorMsg}>
                                        <p className="text-danger">Incorrect Email or Password</p>
                                    </div>
                                    <div className="row mt-3 justify-content-center">
                                        <div className="col-6 text-center">
                                            <Button type="submit" className="button btn btn-secondary btn-block text-white" onClick={this.goToDashboard}>SIGN IN</Button>
                                        </div>
                                    </div>
                                </Form>
                            </Card.Body>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;