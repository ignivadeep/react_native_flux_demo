
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import AnotherView from './AnotherView'

export default class YourApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.gotoView = this.gotoView.bind(this);
  }  

  gotoView(i){
    this.setState({count : i});
  }

  render() {
    const {count} = this.state;
    return (
      <View style={styles.container}>
        {
          count==0 ? 
           <TouchableHighlight onPress={()=>this.gotoView(1)} underlayColor={'transparent'}>
              <Text style={styles.welcome}>Goto Another View</Text>
            </TouchableHighlight>
          :
          <AnotherView gotoView={this.gotoView}/>
        }
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
    margin: 8,
  },
});

AppRegistry.registerComponent('YourApp', () => YourApp);
