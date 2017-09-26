import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppRgister, Image } from 'react-native'

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Kayla World</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

// export default class Pics extends Component {
//   render() {
//     let pic = {
//       uri: 'https://i.pinimg.com/736x/b9/50/c8/b950c8af04a1d39d96697ffd348c9d48--jellyfish-drawing-jellyfish-sting.jpg'
//     }
//     return (
//       <Image source={pic} style={{width: 200, height: 110}}/>
//     )
//   }
