import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

var r = 0
var b = 0

export default class App extends React.Component{

  constructor(){
    super()
    this.state = {
      pntsRed: r,
      pntsBlue: b,
    }
  }

  addPoint(color) {
    switch(color){
      case 'red':
        r += 1
        this.setState({
          pntsRed: r
        })
        break
      case 'blue':
        b += 1
        this.setState({
          pntsBlue: b
        })
        break
    }
  }

  takePoint(color){
    switch(color){
      case 'red':
        r -= 1
        this.setState({
          pntsRed: r
        })
        break
      case 'blue':
        b -= 1
        this.setState({
          pntsBlue: b
        })
        break
    }
  }
  

  render() {
    return(
      <View style={styles.container}>
        <View style={[styles.areas, {borderColor: '#262447'}]}>
          <TouchableOpacity style={[styles.touch, styles.touchTop, {backgroundColor: '#262447'}]} onPress={() => this.addPoint('red')}>
            <Text style={styles.touchText}>+</Text>
          </TouchableOpacity>
          <View style={styles.pnts}>
            <Text style={styles.pntsText}>{this.state.pntsRed}</Text>
          </View>
          <TouchableOpacity style={[styles.touch, styles.touchBottom, {backgroundColor: '#262447'}]} onPress={() => this.takePoint('red')}>
            <Text style={styles.touchText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.areas, {borderColor: '#7a2a2a'}]}>
         <TouchableOpacity style={[styles.touch, styles.touchTop, {backgroundColor: '#7a2a2a'}]} onPress={() => this.addPoint('blue')}>
            <Text style={styles.touchText}>+</Text>
          </TouchableOpacity>
          <View style={styles.pnts}>
            <Text style={styles.pntsText}>{this.state.pntsBlue}</Text>
          </View>
          <TouchableOpacity style={[styles.touch, styles.touchBottom, {backgroundColor: '#7a2a2a'}]} onPress={() => this.takePoint('blue')}>
            <Text style={styles.touchText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  areas: {
    borderWidth: 4,
    borderRadius: 40,
    margin: 12,
    flex: 1,
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchText: {
    color: 'white',
    fontSize: 50,
  },
  touchBottom: {
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  touchTop: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  pnts: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pntsText: {
    fontSize: 50,
    fontWeight: 'bold'
  }
})