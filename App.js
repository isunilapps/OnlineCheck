import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';


const isOnline = require('is-online');

export default class App extends Component {

    componentDidMount() {
        /**
         * Uncomment the below line, for timer, run to check internet connectivity
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

              style={{backgroundColor:"rgba(0,0,0,0.4)", borderRadius:5}}
              activeOpacity={0.6}

              onPress={() => {

              console.log('Checking online status')

              this.checkConnectivity()

          }}>
              <Text style={{color:'white'}}> Tap to check internet connection </Text>
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
