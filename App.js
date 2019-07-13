import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import MyGrid from './files/grid'
import Swiper from 'react-native-swiper'

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

export default class SwiperComponent extends Component {
  render(){
    return (
      <Swiper style={styles.wrapper}
      dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3}} />}
      activeDot={<View style={{backgroundColor: 'rgb(230,154,111)', width: 8, height: 8, borderRadius: 4, marginLeft: 5, marginRight: 5, marginTop: 3, marginBottom: 3}} />}
      >
        <View style={styles.slide1}>
          <Text style={styles.text}>SWIPE TO MOVE ALL TILES</Text>

        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent);
