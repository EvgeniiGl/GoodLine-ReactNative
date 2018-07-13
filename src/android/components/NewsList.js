import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

class NewsList extends React.Component {

    render() {
        if (this.props.loading) return <Text>Загрузка...</Text>
        const newsList = this.props.news_list.map((item, index) => {
            return (
                    <TouchableOpacity key={index}  style={styles.news}
                                      onPress={() => this.props.goToNews(index)}>
                        <View style={styles.title}>
                            <Text>{item.published}</Text>
                        </View>     
                        <View style={styles.title}>
                            <Text>{item.title}</Text>
                        </View>     
                        <View style={styles.title}>
                            <Text>{item.links.url}</Text>
                        </View>        
                    </TouchableOpacity>
                    )

        })

        return (
                <View>
                    {newsList}
                </View>
                )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    news: {
        borderBottomColor: "#000",
        borderBottomWidth: 1
    }
});

export default NewsList