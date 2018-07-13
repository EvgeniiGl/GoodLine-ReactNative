import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Menu from '../components/Menu';
import {exit} from '../../actions/sign_in';

class ProfileScreen extends React.Component { 
    static navigationOptions = {
        title: 'Профиль',
    };
    render() {
        return (
                <View  style={styles.container}>
                        <View style={styles.exit}>
                         <Button title="Выход"
                                onPress={() => { this.props.signOut(this.props.navigation)}}
                                />
                        </View>
                    <View style={styles.profile}>
                    <View>
                        <Text h2>Профиль</Text>
                        </View>
                        <Text>Глечиков Евгений Александрович</Text>
                        <Text>
                            Мужчина, 34 года, родился 17 декабря 1983
                            Новокузнецк, готов к переезду, готов к редким командировкам
                        </Text>
                        <Text>+7 (951) 164-00-57</Text>
                        <Text>geka_nkz@mail.ru</Text>
                        <Text>Разработчик (ВЕБ-ПРОГРАММИСТ) - 75 000 руб.</Text>
                        <Text>
                            График работы: гибкий график, полный день, удаленная работа
                        </Text>
                        <Text>
                            6 лет самостоятельно изучаю PHP, Zend Framework 2, JAVA SCRIPT, JQUERY,
                            VUEJS, Git, React, что говорит об искренней увлеченности профессией и желании развиваться. 
                            В данный момент разрабатываю свой проект для организации бизнес процессов
                            испытательной лаборатории (CRM, документооборот, регистрация журналов,
                            формирование готовых документов и т. д.) на базе ZF2. 
                        </Text>
                    </View>
                    <Menu navigation={this.props.navigation}/>
                </View>
                );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signOut: bindActionCreators(exit, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    exit:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
}
);