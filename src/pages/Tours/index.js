import React from 'react'
import {
  View,
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity
 }from 'react-native'

 import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Tours(){
  const navigation = useNavigation()
  return(
    <View style={styles.container} >
        <View style={styles.containerLogo}>
        <Animatable.Image
          animation='flipInY'
          source={require('../../assets/signature.png')}
          style= {{ width: '100%' }}
          resizeMode='contain'
        />
      </View> 

      <Animatable.View delay={600} Animatable='fadeInUp'
      style={styles.containerForm}>
        <Text style={styles.title}> Sua primeira turnê foi a do 2º album, Fearless. E a de maior sucesso foi a "Reputation Stadium Tour" onde taylor lotou estadios americanos depois de mais de um ano longe das cameras.</Text>
        <Text style={styles.text}>Próximo</Text>

        <TouchableOpacity
        style={styles.button}
        onPress={ () => navigation.navigate('TheEras')}
        >
          <Text style={styles.buttonText}> Acessar</Text>
          
        </TouchableOpacity>

      </Animatable.View>
  
</View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#38A69D'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#38A69D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#38A69D',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})

    
