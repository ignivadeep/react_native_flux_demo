
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';


import CartStore  from './js/stores/CartStore';
import ProductStore  from './js/stores/ProductStore';

import action  from './js/actions/FluxCartActions';


export default class YourApp extends Component {
  onclick(){
    action.receiveProduct([name:'deep'])
  }

  componentDidMount () {
    ProductStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
  }

  // Remove change listeners from stores
  componentWillUnmount () {
    ProductStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    console.log('4')
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={()=>this.onclick()}>
        <Text style={styles.welcome}>
          click
        </Text>
        </TouchableHighlight>
        <Text style={styles.instructions}>
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('YourApp', () => YourApp);
