import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    showLoader,
    hideLoader
} from '../../modules/loader'

const Loader = props => (
    <div className={ props.loaderShow ? 'full-page-loader full-page-loader-show' : 'full-page-loader full-page-loader-hide' }>
        <div className="full-page-loader-center">
            <div className="full-page-loader-center-inner">
                <CircularProgress className="full-page-loader-center-inner-spinner" /> Loading...
            </div>
        </div>
    </div>
);

const mapStateToProps = ({ loader }) => ({
    loaderShow: loader.loaderShow
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            showLoader,
            hideLoader
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Loader)
