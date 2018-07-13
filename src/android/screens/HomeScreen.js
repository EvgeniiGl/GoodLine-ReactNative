import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Menu from '../components/Menu';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Главная',
    };
    render() {
        return (
                <View  style={styles.container}>
                    <View style={styles.home}>
                        <Text>Главная страница</Text>
                    </View>
                    <Menu navigation={this.props.navigation}/>
                </View>
                );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    home: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default HomeScreen;