import {BackHandler, Platform, Alert} from 'react-native';

const isWEB = Platform.OS === 'web';

export const exitApp = () => {
  switch (Platform.OS) {
    case 'android':
      BackHandler.exitApp();
      break;
    case 'web':
      //window.close();
      break;
    default:
      Alert.alert("Exit isn't supported.");
  }
};

export const AlertMx = (message: string) => {
  if (isWEB) {
    //alert(message);
  } else {
    Alert.alert(message);
  }
};

// callback stub for tests
export const cbStub = () => {};
