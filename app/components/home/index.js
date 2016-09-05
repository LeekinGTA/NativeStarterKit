
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';
import { replaceOrPushRoute } from '../../actions/route';
import { Container, Header, Title, Content, View, Text, Button, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import TitleBar from '../common/title_bar';
import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

    render() {
        return (
            <Container theme={theme} >
              <View>
                <TitleBar
                  onBack={()=>this.props.replaceOrPushRoute('home')}
                  onMenu={this.props.openDrawer}>
                  Home Page
                </TitleBar>
                <Content>
                </Content>
              </View>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(Home);
