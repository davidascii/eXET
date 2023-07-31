import react from 'react';
import {Platform, SafeAreaView, Text, View} from 'react-native';

function MySuperComponent(): JSX.Element {
  return (
    <Text> Olá mundo! {Platform.OS}</Text>
  )
}

export default MySuperComponent;
