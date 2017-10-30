/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import Button from 'apsl-react-native-button'
import SplashScreen from 'react-native-splash-screen'
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content"/>
        <Image resizeMode="contain" source={require('./images/launch_screen.png')}/>
        <LinearGradient
          start={{
          x: 0.0,
          y: 0.25
        }}
          end={{
          x: 0.5,
          y: 1.0
        }}
          locations={[0, 0.5, 0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}>
          <View>
            <Text style={styles.titleText}>Restaurants {"\n"}Near Me</Text>
            <Button
              style={styles.buttonBottom}
              textStyle={{
              color: '#FFFFFF'
            }}
              onPress={() => {}}
              color="#FFFFFF">Book a Table</Button>
          </View>
        </LinearGradient>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative'
  },

  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'relative',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  titleText: {
    fontSize: 24,
    marginLeft: 40
  },
  buttonBottom: {
    width: 200,
    marginLeft: 40,
    backgroundColor: '#674D56',
    borderStyle: 'solid',
    borderColor: '#674D56'
  }
});
