'use strict';

import React, {Component, PropTypes} from 'React';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './configureStore'

function setup():React.Component {
  class AppRoot extends Component {

      constructor(props) {
          super(props);
          this.state = {
              isLoading: false,
              store: configureStore(() => this.setState({
                  isLoading: false
              })),
          };
      }

      render() {
          return (
            <Provider store={this.state.store}>
              <App store = {this.state.store}/>
            </Provider>
          );
      }
  };

  return AppRoot
}

export default setup;
