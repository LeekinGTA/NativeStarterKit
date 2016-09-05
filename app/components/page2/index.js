
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, View, Content, Text} from 'native-base';

import theme from '../../themes/base-theme';
import TitleBar from '../common/title_bar'
class Page2 extends Component {

    render() {
        return (
            <Container theme={theme}>
              <View>
                <TitleBar
                  onMenu={this.props.openDrawer}
                  onBack={this.props.popRoute}>
                  Page2
                </TitleBar>
                  <Content padder>
                      <Text>
                          Create Something Awesome . . .
                      </Text>
                  </Content>
              </View>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(Page2);
