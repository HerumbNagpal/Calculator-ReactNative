
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Provider } from 'react-redux';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Calulator from './src/components/Calulator';
import Store from './src/components/redux/Store';




function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: !isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <Provider store={Store} >
      <View>

        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={!isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
        </SafeAreaView>
        <Calulator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
