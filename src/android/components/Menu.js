import React, { Component} from "react";
import PropTypes from 'prop-types';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class Menu extends Component {
    render() {
        const {navigate} = this.props.navigation
        return (
                <View style={styles.menu}>
                    <View style={styles.buttonContainer}>
                        <Button title="Главная"
                                onPress={() => this.props.navigation.popToTop()}
                                />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Новости"
                                onPress={() => navigate("News")}
                                />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Профиль"
                                onPress={() => navigate('Profile')}
                                />
                    </View>
                </View>
                )
    }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});

