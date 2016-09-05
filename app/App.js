'use strict';

import React,{ Component } from 'react';
import { StyleSheet, AppState, Dimensions, Image } from 'react-native';
import CodePush from 'react-native-code-push';

import { Container, Content, Text, View } from 'native-base';
import Modal from 'react-native-modalbox';

import AppNavigator from './AppNavigator';

import theme from './themes/base-theme';

var height = Dimensions.get('window').height;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDownloadingModal: false,
            showInstalling: false,
            downloadProgress: 0
        }
    }

    componentDidMount() {
        // TODO: 热更新操作
    }

    render() {
        // TODO: 热更新UI
        return <AppNavigator store={this.props.store} />;
    }
}

export default App
