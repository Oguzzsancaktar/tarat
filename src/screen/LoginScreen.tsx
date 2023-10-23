import React from 'react'
import { Dimensions, ImageBackground, Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'native-base'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import FormControl from '../components/Forms/FormControl'
import { Icon } from 'native-base'

const HomeScreen = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('../../assets/eq580.webp')}
        style={{
          height: Dimensions.get('window').height / 2.5,
        }}
        blurRadius={5}
      >
        <View style={styles.brandViews}>
          <Text style={styles.brandViewText}>QR Mobile</Text>
        </View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}></View>
        <Text style={{ color: 'black', fontSize: 34 }}>Hoşgeldiniz</Text>
        <Text>
          Henüz hesabın yok mu?
          <Text style={{ color: 'red ', fontStyle: 'italic' }}> Kayıt ol!</Text>
        </Text>
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  brandViews: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowRadius: 5,
    textShadowOffset: { height: 1, width: 1 },
    textTransform: 'uppercase',
  },
  bottomView: {
    flex: 1,
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    backgroundColor: 'white',
  },
})
