
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';


import AddStore  from './js/stores/AddStore';
import ProductStore  from './js/stores/ProductStore';

import action  from './js/actions/Actions';


export default class YourApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      res:1
    };
    this._onChange = this._onChange.bind(this);
  }  

  componentDidMount () {
    ProductStore.addChangeListener(this._onChange);
    AddStore.addChangeListener(this._onChange);
  }

  componentWillUnmount () {
    ProductStore.removeChangeListener(this._onChange);
    AddStore.removeChangeListener(this._onChange);
  }

  gotoView(){
    
  }

  onIncclick(){
    action.incCount();
  }

  ondecclick(){
    action.decCount();
  }

  _onChange() {
    this.setState({count : AddStore.getCount()});
    this.setState({res : ProductStore.getProductData()});
  }

  render() {
    const {count,res} = this.state;
    return (
      <View style={styles.container}>

        <View style={{flexDirection:'row'}}> 
          <Text style={styles.instructions}>5 ^ {count}</Text>
          <Text style={styles.instructions}> -> </Text>
          <Text style={styles.instructions}>{res}</Text>
        </View>

        <View style={{flexDirection:'row'}}> 
          <TouchableHighlight onPress={()=>this.onIncclick()} underlayColor={'transparent'}>
            <Text style={styles.welcome}>Inc</Text>
            </TouchableHighlight>
        
          <TouchableHighlight onPress={()=>this.ondecclick()} underlayColor={'transparent'}>
            <Text style={styles.welcome}>Dec</Text>
          </TouchableHighlight>
        </View>
         <TouchableHighlight onPress={()=>this.gotoView()} underlayColor={'transparent'}>
            <Text style={styles.welcome}>Goto Another View</Text>
          </TouchableHighlight>
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
