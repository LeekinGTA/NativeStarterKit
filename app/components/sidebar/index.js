
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';

import {Content, Text, List, ListItem } from 'native-base';

import styles from './style';

class SideBar extends Component {

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceOrPushRoute(route);
    }

    render(){
        return (
            <Content style={styles.sidebar} >
                <List foregroundColor={'white'}>
                    <ListItem onPress={() => this.navigateTo('home')} >
                        <Text>Home</Text>
                    </ListItem>
                    <ListItem onPress={() => this.navigateTo('page1')} >
                        <Text>Page1</Text>
                    </ListItem>
                    <ListItem onPress={() => this.navigateTo('page2')} >
                        <Text>Page2</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(SideBar);
