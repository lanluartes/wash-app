import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Fonts } from './src/utils/Fonts';


export default class linis extends React.Component {
  

  static navigationOptions = { 
    headerRight: (<View><Image style={{width: 40, height: 40, marginRight: 10, alignSelf: 'center'}} source={require('./assets/Icons/info.png')}/></View>),
      headerTitle:<Text style={{
        flex: 1,
        color:'black',
        alignSelf:'center',
        textAlign: 'center',
        fontFamily: Fonts.Quicksand,
        fontSize:25,
        marginBottom: 5
       }}>
        Comics
    </Text>
}

    render() {
      return (
        <View>
          <Text>
            Comic:
          </Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create ({
    
    container: {
      
    },

    tileFeature: {

    },

    infoDesign: {
      width: 30,
      height: 30
    }


  })