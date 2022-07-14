/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';
import {MapImagery} from './MapImagery';

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
  },
  contentContainer: {
    height: '100%',
  },
  view: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: 200,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const App = () => {
  const openMap = () => {
    MapImagery.openMap();
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.view}>
          <Pressable onPress={openMap} style={styles.button}>
            <Text style={styles.text}>Open Map</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
