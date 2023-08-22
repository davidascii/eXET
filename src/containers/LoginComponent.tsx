import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import AuthTextInput from '../components/inputs/AuthTextInput';

function LoginComponent(): React.ReactElement {
    const [userName, setUserName] = useState('');

    console.log(userName);

    return (
        <View>
            {/*<AuthTextInput*/}
            {/*    label={'Nome de usuário'}*/}
            {/*    placeholderText={'Insira seu nome de usuário aqui'}*/}
            {/*    value={userName}*/}
            {/*    onChangeText={setUserName}*/}
            {/*/>*/}
            {/*<Text className='text-3xl font-bold underline'>Teste</Text>*/}
            <AuthTextInput label={'Testando'} />
        </View>
    );
}

export default LoginComponent;
