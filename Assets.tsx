/* eslint-disable @typescript-eslint/no-unused-vars */
//import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  Button,
} from 'react-native';
import {useAssets, Asset} from 'expo-asset';
import * as FS from 'expo-file-system';

import * as Lib from './MainLib';
import {cc, ccc, LL, J, QQ} from './libs/mxcon';
const isWEB = Platform.OS === 'web';

const FILE1 = require('./data/maick.jpg');
const FILE2 = require('./data/comp.jpg');
/*
const FILE3 = require('./data/cat.png');
const FILE4 = require('./data/comp2.jpg');
const FILE5 = require('./data/gar.png');
const FILE6 = require('./data/t.txt');
*/
const FILE7 = require('./data/t2.txt');

const RUN_INFO = 'r03 /txt, L4Q /RN';
const FILE_T = FILE7;

const AppLoading = () => {
  return <Text>INFO: Loading some assets...</Text>;
};

const _fs = async (
  path: string,
  cbOfHook: (t: string) => void,
  assets: Asset,
) => {
  //Lib.AlertMx('In _fs().');
  cc(RUN_INFO + '. In _fs().');
  /*
  let _dir = FS.documentDirectory;
  cc(RUN_INFO + '. In _fs(). DDir: ' + _dir);
  //cc('assets', assets)
  */
  if (isWEB) {
    return;
  }
  try {
    //let _DIR = FS.cacheDirectory || 'No cache here';
    cc('assets => "' + assets.localUri + QQ);
    let _f: string = assets.localUri || '';
    let isFile = await FS.getInfoAsync(_f);
    let msg = ' SIZE ==> ' + isFile.size;
    cc(msg);
    //cbOfHook(msg);
    let _content = await FS.readAsStringAsync(_f);
    //cc(_content);
    cbOfHook(msg + LL + _content);
    //cbOfHook('++');
  } catch (err) {
    let msg = 'ERR in _fs()\n' + err;
    Lib.AlertMx(msg);
  }
};

export default function App() {
  const [dataText, setDataText] = React.useState('Now no text');
  //const [ASSETS] = useAssets([FILE1, FILE2, FILE3, FILE4, FILE5, FILE6, FILE7]);
  const [ASSETS] = useAssets([FILE1, FILE_T]);
  if (!ASSETS) {
    return <AppLoading />;
  }

  const _txtFile: Asset = ASSETS[1];
  isWEB ? _fetch(FILE_T, setDataText) : _fs(FILE_T, setDataText, _txtFile);

  return (
    <View style={styles.container}>
      <Text> </Text>
      <Text> </Text>
      {Platform.OS === 'ios' ? null : (
        <Button title="Exit" onPress={Lib.exitApp} />
      )}
      <Text> </Text>
      <Text>{RUN_INFO}</Text>
      <Image style={styles.image} source={FILE1} />
      <Text> </Text>
      <View style={styles.hr} />
      <Text> </Text>
      <Text>Some assets text</Text>
      <Text>TEST FILE: "{FILE_T}"</Text>
      <ScrollView style={styles.scroll}>
        <Text>{dataText}</Text>
      </ScrollView>
    </View>
  );
}
/*
      <Text>{dataText}</Text>
      <Text>0: maick.jpg: "{ASSETS[0].uri}"</Text>
      <Text>5: t.txt: "{ASSETS[5].uri}"</Text>
      <Text>FILE6: t.txt: "{FILE6}"</Text>

*/

const _fetch = async (path: string, cbOfHook: (t: string) => void) => {
  //Lib.AlertMx('In _fetch().');
  if (isWEB) {
    try {
      const _content = await (await fetch(path)).text();
      //cc(_content);
      const _size = 'SIZE ==> ' + _content.length + LL;
      cbOfHook(_size + _content);
    } catch (err) {
      cc('ERR ==>\n', err);
      Lib.AlertMx('ERROR in _fetch()!');
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hr: {
    width: '50%',
    borderColor: 'red',
    borderWidth: 1,
  },
  image: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderColor: 'black',
    borderWidth: 1,
  },
  scroll: {
    flex: 1,
    width: '90%',
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'lightgreen',
    borderColor: 'red',
    borderWidth: 1,
  },
});
