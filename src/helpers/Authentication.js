import {config, requestHeader} from "./Config";

import axios from 'axios';

const user = localStorage.getItem('user');

let initialState = {
    authenticated: false
};

if ( user ) {
    initialState['authenticated'] = true;
}

export default class Authentication {
    state = initialState;

    login( email, password ) {
        return new Promise((resolve, reject) => {
            axios({
                url: config.apiUrl + '/auth/login',
                method: 'POST',
                headers: requestHeader(),
                data: {
                    email: email,
                    password: password
                }
            }).then(response => {
                let responseData = response.data;

                let responseJWT = responseData.data.token;

                if ( responseJWT ) {
                    localStorage.setItem('user', responseJWT);
                }

                this.state.authenticated = true;

                resolve(config.defaultMessages.success_login);
            }).catch(error => {
                let errorMessage = config.defaultMessages.error;

                if ( error.response && error.response.data.message ) {
                    errorMessage = error.response.data.message;
                }

                this.state.authenticated = false;

                reject(errorMessage);
            });
        })
    };

    register( email, password , password2 ) {
        return new Promise((resolve, reject) => {
            axios({
                url: config.apiUrl + '/auth/register',
                method: 'POST',
                headers: requestHeader(),
                data: {
                    email: email,
                    password: password,
                    password2: password2,
                }
            }).then(response => {
                let responseData = response.data;

                let responseJWT = responseData.data.token;

                if ( responseJWT ) {
                    localStorage.setItem('user', responseJWT);
                }

                this.state.authenticated = true;

                resolve(config.defaultMessages.success_register);
            }).catch(error => {
                let errorMessage = config.defaultMessages.error;

                if ( error.response && error.response.data.message ) {
                    errorMessage = error.response.data.message;
                }

                this.state.authenticated = false;

                reject(errorMessage);
            });
        })
    };

    logout() {
        localStorage.removeItem('user');

        this.state.authenticated = false;
    };

    isAuthenticated() {
        return this.state.authenticated;
    };
}