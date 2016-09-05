'use strict';
import React from 'React';
import { AppRegistry, StatusBar } from 'react-native'
import setup from './app'

StatusBar.setBarStyle('light-content');
AppRegistry.registerComponent('NativeStarterKit', setup);
