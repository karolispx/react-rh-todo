import React from 'react';
// import { Route, Link } from 'react-router-dom'

import PropTypes from 'prop-types';

import Loader from './partials/Loader'
import Alert from './partials/Alert'

import Header from './partials/Header'
import Footer from './partials/Footer'

import Router from '../helpers/Router'

import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({});

const App = () => (
    <div>
        <Loader />

        <Header />

        <Alert />

        <Router />

        <Footer />
    </div>
);

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));