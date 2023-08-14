import ReactDOM from "react-dom/client";
import React from "react";
import {AuthProvider} from "../../../../features/auth/adapters/AuthProvider";
import {Animated, Text} from "react-native";
import View = Animated.View;
import LoginComponent from "../../../../components/LoginComponent";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <View>
            <LoginComponent/>
            {/*<ChangeContextName/>*/}
            {/*<AuthTextInput placeholderText={'Teste'} label={"teste"} />*/}
        </View>
    </AuthProvider>
);
