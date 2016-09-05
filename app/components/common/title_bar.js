'use strict';

import React, {PropTypes, Component} from 'react';
import { Container, View, Header, Button, Title, Icon } from 'native-base';
import theme from '../../themes/base-theme';

function defaultCallback() {};

class TitleBar extends React.Component {
    static propTypes = {
      onBack: PropTypes.func,
      onMenu: PropTypes.func,
      showBack: PropTypes.bool,
      showMenu: PropTypes.bool
    };
    static defaultProps = {
      onBack: defaultCallback,
      onMenu: defaultCallback,
      showBack: true,
      showMenu: true
    };
    static defaultState = {};

    constructor(props) {
        super(props);
        this.state = TitleBar.defaultState;
    }

    render() {
        return (
          <Header style={{flexDirection: 'row'}}>
            { this.props.showBack ? (
                <Button transparent onPress={this.props.onBack}>
                    <Icon name='ios-arrow-back' />
                </Button>
              ): null
            }

            <Title>{this.props.children}</Title>

            { this.props.showMenu ? (
                <Button transparent onPress={this.props.onMenu}>
                    <Icon name='ios-menu' />
                </Button>
              ): null
            }

          </Header>
        );
    }
}

module.exports = TitleBar;
