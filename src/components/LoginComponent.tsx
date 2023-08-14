import React, {useState} from 'react';
import {View} from 'react-native';
import AuthTextInput from './AuthTextInput';

function LoginComponent(): React.ReactElement {
    const [userName, setUserName] = useState('');

    console.log(userName);

    return (
        <View>
            <AuthTextInput
                label={'Nome de usuário'}
                placeholderText={'Insira seu nome de usuário aqui'}
                value={userName}
                onChangeText={setUserName}
            />
        </View>
    );
}

export default LoginComponent;
