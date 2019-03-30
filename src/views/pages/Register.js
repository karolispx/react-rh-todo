import React from 'react'

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {Link} from "react-router-dom";

import Authentication from '../../helpers/Authentication';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
    showLoader,
    hideLoader,
} from '../../modules/loader'

import {
    showAlert,
    hideAlert,
} from '../../modules/alert'

const authentication = new Authentication();

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            password2: '',
            showForm: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.showLoader();
        this.props.hideAlert();

        authentication.register(this.state.email, this.state.password, this.state.password2).then( response => {
            this.props.hideLoader();

            this.setState({showForm: false});

            this.props.showAlert('success', response);

            setTimeout(() => {
                window.location.href = '/tasks';

                setTimeout(() => {
                    this.props.hideAlert();
                }, 500)
            }, 3000)

        }, error => {
            this.props.hideLoader();

            this.props.showAlert('error', error);
        });

        event.preventDefault();
    }


    render() {
        return (
            <div className="page-content container">

                <div className={ this.state.showForm ? 'page-content-form-show' : 'page-content-form-hide' }>
                    <form className="page-content-form" onSubmit={this.handleSubmit}>
                        <div className="page-content-form-header">
                            <h1>Register for a new account!</h1>
                        </div>

                        <div className="page-content-form-body">
                            <p className="align-center">Register below to get started!</p>

                            <hr />

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Enter Your Email Address</InputLabel>
                                <Input id="email" name="email" type="email" placeholder="Enter Your Email Address" autoFocus onChange={this.handleChange}/>
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Enter Your Password</InputLabel>
                                <Input name="password" type="password" id="password" placeholder="Enter Your Password" onChange={this.handleChange}/>
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password2">Repeat Your Password</InputLabel>
                                <Input name="password2" type="password" id="password2" placeholder="Repeat Your Password" onChange={this.handleChange}/>
                            </FormControl>
                        </div>

                        <div className="page-content-form-footer">
                            <Button type="submit" variant="contained" color="primary">
                                Register
                            </Button>
                        </div>
                    </form>

                    <p className="page-content-form-underlink">
                        <Link to='/login'>Already have an account?</Link>
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ loader, alert }) => ({
    loaderShow: loader.loaderShow,
    showAlert: alert.showAlert,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            showLoader,
            hideLoader,
            showAlert,
            hideAlert
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)