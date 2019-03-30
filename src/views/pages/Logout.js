import React from 'react'

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

class Logout extends React.Component {
    render() {
        authentication.logout();

        this.props.showAlert('success', 'You have logged out successfully!');

        setTimeout(() => {
            window.location.href = '/login';

            setTimeout(() => {
                this.props.hideAlert();
            }, 100);
        }, 2000);

        return (
            <div className="page-content container"></div>
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
)(Logout)
