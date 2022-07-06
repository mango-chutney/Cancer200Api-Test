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
  NativeModules,
  Button,
} from 'react-native';

const {MapImagery} = NativeModules;

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button
            onPress={() => {
              MapImagery.openMap();
            }}
            title="Open Map"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
