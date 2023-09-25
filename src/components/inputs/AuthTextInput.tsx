import React, {Component, PropsWithChildren, StrictMode} from 'react';
import {TextInputProps, View, StyleProp, ViewStyle, Platform, TextInput as NativeTextInput} from 'react-native';
// import {TextInput as TextInputPaper} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {TextInputProps as TextInputPropsPaper} from 'react-native-paper';
import {NativeWindStyleSheet, styled} from 'nativewind';
// const StyledView = styled(View);

// const StyledTextInputPaper = styled(TextInputPaper);
const StyledTextInputPaper = TextInput;

interface AuthTextInputProps extends TextInputPropsPaper {
    label: string,
}

type AuthTextInputState = PropsWithChildren<{
    componentStyle: string
}>

class AuthTextInput extends Component<AuthTextInputProps, AuthTextInputState> {
    // constructor({label}: SectionProps) {
    //     super(label);
    //
    //     this.state = {componentStyle: ''};
    // }

    state: AuthTextInputState = {
        componentStyle: '',
    };

    // getCurrentStyle() {
    //     switch (this.state.componentStyle) {
    //     case 'FOCUSED':
    //         return StyleSheet.flatten([styles.input, styles.inputFocus]);
    //     default:
    //         return styles.input;
    //     }
    // }

    render() {
        return (
            // <View style={{ backgroundColor: '#590505' }}>
            <StrictMode>
                <StyledTextInputPaper
                    // className="background-color-dark"
                    mode="outlined"
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    // outlineStyle={{...(Platform.OS === 'web' && {marginTop: '2px'})}} // https://github.com/callstack/react-native-paper/issues/3825 https://github.com/callstack/react-native-paper/issues/4041
                    // activeOutlineColor={"#ff0000"}
                    {...this.props}
                    label={'Outlined input'}
                />
            </StrictMode>
        );
    }
}


NativeWindStyleSheet.create({
    styles: {
        'background-color-light': {
            backgroundColor: '#590505',
        },
        'background-color-dark': {
            backgroundColor: '#590505',
            borderRadius: 8,
        },
    },
});

// const styles = StyleSheet.create({
//     input: {
//         ...(Platform.OS === 'web' && {outlineStyle: 'none'}),
//         backgroundColor: '#EEEEEE',
//         borderColor: '#000000',
//         textAlign: 'left',
//         fontSize: 16,
//         borderRadius: 8,
//         borderWidth: 2,
//         // lineHeight: 24,
//         padding: 10,
//     },
//     inputFocus: {
//         borderColor: '#000000',
//     },
//     label: {
//         marginBottom: 8,
//         fontSize: 12,
//         textAlign: 'left',
//         textTransform: 'uppercase',
//         color: '#000000',
//         letterSpacing: 1,
//     },
// });

export default AuthTextInput;
