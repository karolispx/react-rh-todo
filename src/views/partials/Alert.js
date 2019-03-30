import React from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    showAlert,
    hideAlert
} from '../../modules/alert'


const Alert = props => (
    <div className={ props.alertShow ? 'page-alert-' + props.style + ' page-alert page-alert-show' : 'page-alert page-alert-hide' }>
        <p>{props.message}</p>
    </div>
);


const mapStateToProps = ({ alert }) => ({
    alertShow: alert.alertShow,
    style: alert.style,
    message: alert.message
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            showAlert,
            hideAlert
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Alert)
