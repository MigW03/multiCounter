import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

var blue = 0
var red = 0
var green = 0
var yellow = 0

export default class Quadruple extends Component {

  constructor(){
    super()
    this.state = {
      pntBlue: blue,
      pntRed: red,
      pntGreen: green,
      pntYellow: yellow
    }
  }

  add(colorName){
    switch(colorName){
      case 'red':
        red += 1
        this.setState({
          pntRed: red
        })
        break
      case 'blue':
        blue += 1
        this.setState({
          pntBlue: blue
        })
        break
      case 'green':
        green += 1
        this.setState({
          pntGreen: green
        })
        break
      case 'yellow':
        yellow += 1
        this.setState({
          pntYellow: yellow
        })
    }
  }

  take(colorName){
    switch(colorName){
      case 'blue':
        blue -= 1
        this.setState({
          pntBlue: blue
        })
        break
      case 'yellow':
        yellow -= 1
        this.setState({
          pntYellow: yellow
        })
        break
      case 'green':
        green -= 1
        this.setState({
          pntGreen: green
        })
        break
      case 'red':
        red -= 1
        this.setState({
          pntRed: red
        })
        break
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.area, {borderColor: '#262447'}]}>
            <TouchableOpacity style={[styles.touch, styles.touchTop, {backgroundColor: '#262447'}]} onPress={() => this.add('blue')}>
              <Text style={styles.touchText}>+</Text>
            </TouchableOpacity>
            <View style={styles.pntsView}>
              <Text style={styles.pntsText}>{this.state.pntBlue}</Text>
            </View>
            <TouchableOpacity style={[styles.touch, styles.touchBottom, {backgroundColor: '#262447'}]} onPress={() => this.take('blue')}>
              <Text style={styles.touchText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.area, {borderColor: '#cc7a00'}]}>
            <TouchableOpacity style={[styles.touch, styles.touchTop, {backgroundColor: '#cc7a00'}]} onPress={() => this.add('yellow')}>
              <Text style={styles.touchText}>+</Text>
            </TouchableOpacity>
            <View style={styles.pntsView}>
              <Text style={styles.pntsText}>{this.state.pntYellow}</Text>
            </View>
            <TouchableOpacity style={[styles.touch, styles.touchBottom, {backgroundColor: '#cc7a00'}]} onPress={() => this.take('yellow')}>
              <Text style={styles.touchText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.area, {borderColor: '#1f7a1f'}]}>
            <TouchableOpacity style={[styles.touch, styles.touchTop, {backgroundColor: '#1f7a1f'}]} onPress={() => this.add('green')}>
              <Text style={styles.touchText}>+</Text>
            </TouchableOpacity>
            <View style={styles.pntsView}>
              <Text style={styles.pntsText}>{this.state.pntGreen}</Text>
            </View>
            <TouchableOpacity style={[styles.touch, styles.touchBottom, {backgroundColor: '#1f7a1f'}]} onPress={() => this.take('green')}>
              <Text style={styles.touchText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.area, {borderColor: '#7a2a2a'}]}>
            <TouchableOpacity style={[styles.touch, styles.touchTop, {backgroundColor: '#7a2a2a'}]} onPress={() => this.add('red')}>
              <Text style={styles.touchText}>+</Text>
            </TouchableOpacity>
            <View style={styles.pntsView}>
              <Text style={styles.pntsText}>{this.state.pntRed}</Text>
            </View>
            <TouchableOpacity style={[styles.touch, styles.touchBottom, {backgroundColor: '#7a2a2a'}]} onPress={() => this.take('red')}>
              <Text style={styles.touchText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  area: {
    flex: 1,
    margin: 6,
    borderWidth: 4,
    borderRadius: 23
  },
  touch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pntsView: {
    flex: 1,
    justifyContent: 'center'
  },
  pntsText: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#666666'
  },
  touchTop: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  touchBottom: {
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  touchText: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold'
  }
})