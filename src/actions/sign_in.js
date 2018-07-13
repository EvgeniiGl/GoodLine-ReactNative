import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR, LOGIN_REQUEST } from '../constants/actionTypes';
import { USERNAME, PASSWORD } from '../constants/properties';

import { AsyncStorage} from 'react-native';

export const  signIn = (values, navigation) => {
    if (USERNAME === values.login && PASSWORD === values.pass) {
        AsyncStorage.setItem('login', 'true');
        navigation.navigate('Profile');
        return {type: AUTHENTICATED};
    } else {
        return {type: AUTHENTICATION_ERROR,
            msg: "Имя пользователя или пароль введены не верно"
        };
    }
}

export const exit = (navigation) => {
    AsyncStorage.clear();
    navigation.navigate('SignIn');
    return {
        type: UNAUTHENTICATED
    };
}

export const checkAccess = () => dispatch => {
        dispatch({type: LOGIN_REQUEST})
        AsyncStorage.getItem('login').then((login) => {
            if (login) {
                dispatch({type: AUTHENTICATED})
            } else {
                dispatch({type: UNAUTHENTICATED})
            }
        })
    }