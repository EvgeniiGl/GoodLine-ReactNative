import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import Menu from '../components/Menu';
import {gotoNews, fetchNewsList} from '../../actions/news_screen';
import NewsList from '../components/NewsList';
import News from '../components/News';

class NewsScreen extends React.Component {
    static navigationOptions = {
        title: 'Новости',
    };
    
    constructor(props) {
        super(props);
        this.props.fetchNewsList()
    }
    
    onGoToNews = (index) => {
        this.props.gotoNews(index)
    }

    render() {
        let news = (this.props.index)
                ? <News news={this.props.news_list[this.props.index]}
                      fetchNews={this.props.fetchNewsList} />
                : <NewsList news_list={this.props.news_list}
                          loading={this.props.loading}
                          goToNews={this.onGoToNews}  />
        return (
                <View  style={styles.container}>
                    <View style={styles.news}>
                        <ScrollView>
                            {news}
                        </ScrollView>
                    </View>
                    <Menu navigation={this.props.navigation}/>
                </View>
                );
    }
}

function mapStateToProps(state) {
    return {
        news_list: state.newsListReducer.news_list,
        loading: state.newsListReducer.loading,
        index: state.newsListReducer.index
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({gotoNews, fetchNewsList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen)
    
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    news: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
