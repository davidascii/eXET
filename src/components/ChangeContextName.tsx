import React, {useState} from 'react';
import useAuth from '../features/auth/hooks/useAuth';
import {Button, Text, View} from 'react-native';

function ChangeContextName(): React.ReactElement {
    // @ts-ignore
    const {state, changeName} = useAuth();
    const [showUserName, setUserName] = useState(false);
    let counter = 0;

    return (
        <View>
            <Button title={'Change Name ' + state.name} onPress={() => {counter+=1; changeName(`Bla ${counter}`); setUserName(true)}}></Button>
            <Button title={'Cabron ' + state.name} onPress={() => {changeName(`Ble ${counter}`); counter-=1; setUserName(false)}}></Button>
            {showUserName ? <Text>Hello World! {state.testName}</Text> : <Text>...</Text>}
            {state.testName !== 'David2' ? <Text>Hello World 2! {state.testName}</Text> : <Text>...</Text>}
        </View>
    );
}

export default ChangeContextName;
