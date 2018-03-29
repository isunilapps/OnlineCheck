import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';


const isOnline = require('is-online');

export default class App extends Component {

    componentDidMount() {
        /**
         * Uncomment the below line to for timer running for internet check
         */

        // setInterval(this.checkConnectivity, 5000)
    }

    checkConnectivity() {
        isOnline().then(online => {

            if (!online) {
                Alert.alert('Lost Connectivity', 'Please check with your internet connection')
            }
            else {
                console.log('is in ONLINE: ',online);
            }
        })
    }

  render() {
    return (
      <View style={styles.container}>

          <TouchableOpacity

              activeOpacity={0.75}

              onPress={() => {

              console.log('Checking online status')

              this.checkConnectivity()

          }}>
              <Text> Tap to check internet connection </Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
