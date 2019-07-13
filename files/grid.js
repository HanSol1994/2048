import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View,FlatList } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(251,248,241)'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(251,248,241)'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(251,248,241)'
  },
  text: {
    color: 'rgb(245,183,63)',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop:5,
  }
})

const data = [{key:'A'},{key:'B'}]
class MyGrid extends Component {
  render(){
    return (

        <FlatList data=data />

    )
  }
}

export default MyGrid;
