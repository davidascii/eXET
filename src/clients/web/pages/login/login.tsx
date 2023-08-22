// window.global ||= window -> movido para vite.config define global window
import React from "react";
import {AuthProvider} from "../../../../features/auth/adapters/AuthProvider";
import {Animated, Button, Text} from "react-native";
import View = Animated.View;
import LoginComponent from "../../../../containers/LoginComponent";
import {styled} from "nativewind";
import {TextInput as TextInputPaper} from "react-native-paper";
import ReactDOM from "react-dom/client";
import AuthTextInput from "../../../../components/inputs/AuthTextInput";

const StyledTextComponent = styled(Text)
const StyledTextInputPaper = styled(TextInputPaper)
const StyledView = styled(View)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <View>
            <LoginComponent/>
            <h1 className="text-3xl text-blue-700">Testing</h1>
            {/*<ChangeContextName/>*/}
            {/*<StyledTextComponent className="text-3xl text-blue-700">Testing2</StyledTextComponent>*/}
            {/*<Button title={"Teste"}/>*/}
            {/*<AuthTextInput label={'Testando'} placeholderText={'Teste...'} />*/}
        </View>
    </AuthProvider>
);
