import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

export default function Home({navigation}){
  return(
     <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.navTouch} onPress={() => navigation.navigate('Single')}>
            <Text style={styles.navText}>Contador</Text>
            <Text style={styles.navText}>único</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.navTouch} onPress={() => navigation.navigate('Double')}>
            <Text style={styles.navText}>Contador</Text>
            <Text style={styles.navText}>duplo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.navTouch} onPress={() => navigation.navigate('Quadruple')}>
            <Text style={styles.navText}>Contador</Text>
            <Text style={styles.navText}>quádruplo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navTouch} onPress={() => navigation.navigate('Sextuple')}>
            <Text style={styles.navText}>Contador</Text>
            <Text style={styles.navText}>sextuplo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 7,
  },
  navTouch: {
    flex: 1,
    width: '10%',
    aspectRatio: 1,
    borderWidth: 3,
    borderColor: '#363366',
    borderRadius: 23,
    justifyContent: 'center',
    margin: 10,
    padding: 6
  },
  navText: {
    color: '#363366',
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})