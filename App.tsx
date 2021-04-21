/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import * as VIcons from '@expo/vector-icons';

import {Asset, FileSystem} from 'react-native-unimodules';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const cc = console.log;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : 'cyan',
  };

  cc('r03, L4L');
  let _docsDir = FileSystem.documentDirectory;
  let _message = 'Docs dir: "' + _docsDir + '"';
  cc(_message);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View style={styles.container}>
          <VIcons.Ionicons name="md-woman-sharp" size={32} color="green" />
          <VIcons.MaterialIcons name="radio" size={32} color="green" />
          <VIcons.AntDesign name="calculator" size={32} color="green" />
          <VIcons.Entypo name="map" size={32} color="green" />
          <VIcons.Feather name="cloud" size={32} color="green" />
          <VIcons.Zocial name="android" size={32} color="green" />
          <VIcons.SimpleLineIcons name="camera" size={32} color="green" />
          <VIcons.Ionicons name="md-checkmark-circle" size={32} color="green" />
        </View>
        <View style={styles.container}>
          <VIcons.Ionicons name="md-woman-sharp" size={32} color="blue" />
          <VIcons.MaterialIcons name="radio" size={32} color="black" />
          <VIcons.AntDesign name="calculator" size={32} color="red" />
          <VIcons.Entypo name="map" size={32} color="white" />
          <VIcons.Feather name="cloud" size={32} color="transparent" />
          <VIcons.Zocial name="android" size={32} color="yellow" />
          <VIcons.SimpleLineIcons name="camera" size={32} color="green" />
          <VIcons.Ionicons
            name="md-checkmark-circle"
            size={32}
            color="lightgreen"
          />
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="r05, L4L. Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <Text>{_message}</Text>
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
