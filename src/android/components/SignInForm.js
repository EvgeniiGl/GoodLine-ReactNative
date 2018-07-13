import React from 'react';
import { StyleSheet,
        View,
        Text,
        TextInput,
        Button } from 'react-native';
import { Field } from 'redux-form';

import ComponentTextInput from './ComponentTextInput';

function SignInForm(props) {
    return (
            <View style = {styles.formContainer} >
                <Text>{props.errorMessage}</Text>
                <Field style={styles.input}
                       name={'login'}
                       component={ComponentTextInput}
                       />
                <Field style={styles.input}
                       name={'pass'}
                       component={ComponentTextInput}
                       secureTextEntry={true}
                       />
            
                <Button title="Войти" onPress={props.handleSubmit()} />
            </View>
            );
}

export default SignInForm;
const styles = StyleSheet.create({
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
