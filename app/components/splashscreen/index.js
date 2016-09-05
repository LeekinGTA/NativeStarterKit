'use strict';

import React, { Component , PropTypes} from 'react';
import { connect } from 'react-redux';
import { Container, Content, View, Text, Button} from 'native-base';

export default class SplashPage extends Component {

    static propTypes = {
      navigator: PropTypes.object.isRequired,
      minDuration: PropTypes.number
    };
    static defaultProps = {
      minDuration: 3000
    };
    static defaultState = {};

    componentWillMount () {
      // TODO: 在此加载所需数据，完成后自动跳转到其他页面
      setTimeout(()=>{
        this.props.navigator.replace('index');
      }, this.props.minDuration);
    }

    render () {
        return (
            <Container>
              <View>
                <Content>
                  <Button large block success >
                    Splash Page
                  </Button>
                </Content>
              </View>
            </Container>
        );
    }
}
