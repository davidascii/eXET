import React from 'react';
import useAuth from '../features/auth/hooks/useAuth';
import {Button, Text, View} from 'react-native';

function ShowContextName(): React.ReactElement {
    // @ts-ignore
    const {name} = useAuth();

    return (
        <View>
            <Text>Hello World! {name}</Text>
        </View>
    );
}

export default ShowContextName;
