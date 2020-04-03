import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

var pnt = 0

export default class Single extends React.Component{

    constructor(){
        super()
        this.state = {
            pnt: pnt
        }
    }

    add(){
        pnt  += 1
        this.setState({
            pnt
        })
    }

    take(){
        pnt -= 1
        this.setState({
            pnt
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.pntView}>
                    <Text style={styles.pntText}>{this.state.pnt}</Text>
                </View>
                <View style={styles.touchView}>
                    <TouchableOpacity style={[styles.touch, {backgroundColor: '#262447'}]} onPress={() => this.add()}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.touch, {backgroundColor: '#7a2a2a'}]} onPress={() => this.take()}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        //alignItems: 'center',
        backgroundColor: '#FFF'
    },
    pntView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchView: {
        flex: 5,
        justifyContent: 'space-around'
    },
    touch: {
        flex: 1,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    pntText: {
        color: '#555',
        fontSize: 65,
        fontWeight: 'bold'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 50,
        fontWeight: 'bold'
    }
})