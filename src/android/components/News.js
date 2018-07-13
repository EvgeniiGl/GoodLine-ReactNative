import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class News extends React.Component {
    render() {
        let news = this.props.news
        return (
                <View>
                    <View style={styles.back}>
                        <Button title="К списку новостей"
                                onPress={() => this.props.fetchNews()} />
                    </View>
                    <View style={styles.news}>
                        <View style={styles.title}>
                            <Text>{news.published}</Text>
                        </View>     
                        <View style={styles.title}>
                            <Text>{news.title}</Text>
                        </View>     
                        <View style={styles.title}>
                            <Text>{news.links.url}</Text>
                        </View>        
                        <View style={styles.title}>
                            <Text>{news.description}</Text>
                        </View>        
                    </View>
                </View>
                );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    news: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        flex: 1,
        flexDirection: 'row',
//        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});

export default News