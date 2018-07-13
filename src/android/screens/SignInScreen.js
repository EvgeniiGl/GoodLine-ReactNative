import React from 'react';
import {
        StyleSheet,
        View,
        Text
            } from 'react-native';
import { reduxForm } from 'redux-form';
import { bindActionCreators} from 'redux';

import Menu from '../components/Menu';
import SignInForm from '../components/SignInForm';
import {signIn} from '../../actions/sign_in';
import {connect} from 'react-redux';

class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Вход',
    };
    onSubmitForm = (values) => {
        this.props.signIn(values, this.props.navigation)
    }
    render() {
        return (
                <View style={styles.container}>
                    <SignInForm  handleSubmit = {() => this.props.handleSubmit(this.onSubmitForm)}
                      errorMessage={this.props.errorMessage}  />
                    <Menu navigation={this.props.navigation}/>
                </View>
                );
    }

}

function mapStateToProps(state) {
    return {
        errorMessage: state.sign_in.error
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({signIn}, dispatch)
}

const reduxFormSignIn = reduxForm({form: 'signIn'})(SignInScreen)

export default connect(mapStateToProps, mapDispatchToProps)(reduxFormSignIn)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    formContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        width: 300,
        backgroundColor: '#000',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    }
});
