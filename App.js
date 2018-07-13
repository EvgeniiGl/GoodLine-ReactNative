import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import ProfileScreen from './src/android/screens/ProfileScreen';
import HomeScreen from './src/android/screens/HomeScreen';
import SignInScreen from './src/android/screens/SignInScreen';
import NewsScreen from './src/android/screens/NewsScreen';
import configureStore from './src/store/configureStore';
import requireAuth from './src/android/hoc/require_auth';

const store = configureStore();

const RootStack = createStackNavigator(
        {
            Home: HomeScreen,
            SignIn: SignInScreen,
            News: NewsScreen,
            Profile: requireAuth(ProfileScreen)
        },
        {
            initialRouteName: 'Home',
        }
);

export default class App extends React.Component {
    render() {
        return (
                <Provider store={store}> 
                    <RootStack />
                </Provider>
                )
    }
}



