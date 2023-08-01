import React, {Component, PropsWithChildren} from 'react';
import { Platform, SafeAreaView, Text, View } from 'react-native';

type MyComponentProps = PropsWithChildren<{
    title: string;
}>;

function MySuperComponent({title}: MyComponentProps): React.ReactElement {
    return (<Text> Olá mundo! {Platform.OS} {title}</Text>);
}

export default MySuperComponent;
