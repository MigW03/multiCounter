import React, { Component } from 'react';

import {StyleSheet, View , Text, TouchableOpacity, } from 'react-native';

var blue = 0
var purple = 0
var grey = 0
var green = 0
var red = 0
var yellow = 0

export default class Sextuple extends React.Component {

  constructor(){
    super()
    this.state = {
      pntBlue: blue,
      pntPurple: purple,
      pntGrey: grey,
      pntGreen: green,
      pntRed: red,
      pntYellow: yellow
    }
  }

  add(colorName){
    switch(colorName){
      case 'blue':
        blue += 1
        this.setState({
          pntBlue: blue
        })
        break
      case 'purple':
        purple += 1
        this.setState({
          pntPurple: purple
        })
        break
      case 'grey':
        grey += 1
        this.setState({
          pntGrey: grey
        })
        break
      case 'green':
        green += 1
        this.setState({
          pntGreen: green
        })
        break
      case 'red':
        red += 1
        this.setState({
          pntRed: red
        })
        break
      case 'yellow':
        yellow += 1
        this.setState({
          pntYellow: yellow
        })
        break
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
      case 'purple':
        purple -= 1
        this.setState({
          pntPurple: purple
        })
        break
      case 'grey':
        grey -= 1
        this.setState({
          pntGrey: grey
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
      case 'yellow':
        yellow -= 1
        this.setState({
          pntYellow: yellow
        })
        break
    }
  }

  render() {
    return(
        <View style={styles.container}>
            <View style={styles.columns}>
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
              <View style={[styles.area, {borderColor: '#737373'}]}>
                <TouchableOpacity style={[styles.touch, styles.touchTop, {backgroundColor: '#737373'}]} onPress={() => this.add('grey')}>
                  <Text style={styles.touchText}>+</Text>
                </TouchableOpacity>
                <View style={styles.pntsView}>
                  <Text style={styles.pntsText}>{this.state.pntGrey}</Text>
                </View>
                <TouchableOpacity style={[styles.touch, styles.touchBottom, {backgroundColor: '#737373'}]} onPress={() => this.take('grey')}>
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
            <View style={styles.columns}>
              <View style={[styles.area, {borderColor: '#862d86'}]}>
                <TouchableOpacity style={[styles.touch, styles.touchTop, {backgroundColor: '#862d86'}]} onPress={() => this.add('purple')}>
                  <Text style={styles.touchText}>+</Text>
                </TouchableOpacity>
                <View style={styles.pntsView}>
                  <Text style={styles.pntsText}>{this.state.pntPurple}</Text>
                </View>
                <TouchableOpacity style={[styles.touch, styles.touchBottom, {backgroundColor: '#862d86'}]} onPress={() => this.take('purple')}>
                  <Text style={styles.touchText}>-</Text>
                </TouchableOpacity>
              </View>
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
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row'
  },
  columns: {
    flex: 1,
    justifyContent: 'space-around'
  },
  area: {
    flex: 1,
    margin: 8,
    justifyContent: 'space-around',
    borderWidth: 3,
    //borderColor: 'black',
    borderRadius: 20
  },
  touch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchTop: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16
  },
  touchBottom: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16
  },
  touchText: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold'
  },
  pntsView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pntsText: {
    fontSize: 40,
    color: '#666666',
    fontWeight: 'bold'
  }
})
