import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { bindActionCreators } from 'redux';

import {checkAccess } from '../../actions/sign_in';
import SignInScreen from '../screens/SignInScreen';

export default function (ComposedComponent) {

    class Authentication extends Component {
        componentWillMount() {
            this.props.checkAccess()
        }
        PropTypes = {
            auth: PropTypes.bool.isRequired
        }
        render() {
            if (!this.props.isLoaded)
                return <Text>Загрузка...</Text>
            if (this.props.auth) {
                return <ComposedComponent {...this.props} />
            } else {
                return  <SignInScreen  {...this.props} />
            }
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.sign_in.auth,
            isLoaded: state.sign_in.isLoaded
        };
    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({checkAccess}, dispatch)
    }

    return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}