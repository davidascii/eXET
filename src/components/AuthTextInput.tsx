import React, {Component, PropsWithChildren} from 'react';
import {Platform, StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface AuthTextInputProps extends TextInputProps {
    label: string,
    placeholderText: string
}

type AuthTextInputState = PropsWithChildren<{
    componentStyle: string
    showPlaceholder: boolean
}>

class AuthTextInput extends Component<AuthTextInputProps, AuthTextInputState> {
    // constructor({label}: SectionProps) {
    //     super(label);
    //
    //     this.state = {componentStyle: ''};
    // }

    state: AuthTextInputState = {
        componentStyle: '',
        showPlaceholder: true,
    };

    getCurrentStyle() {
        switch (this.state.componentStyle) {
        case 'FOCUSED':
            return StyleSheet.flatten([styles.input, styles.inputFocus]);
        default:
            return styles.input;
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.label}>{this.props.label}</Text>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    placeholderTextColor={'#aba4a4'}
                    {...this.props}
                    onFocus={() => this.onFocus()}
                    onBlur={() => this.onBlur()}
                    placeholder={this.state.showPlaceholder ? this.props.placeholderText : ''}
                    style={this.getCurrentStyle()}/>
            </View>
        );
    }

    onFocus() {
        this.setState({
            componentStyle: 'FOCUSED',
            showPlaceholder: false,
        });
    }

    onBlur() {
        this.setState({
            componentStyle: 'DEFAULT',
            showPlaceholder: true,
        });
    }
}

const styles = StyleSheet.create({
    input: {
        ...(Platform.OS === 'web' && {outlineStyle: 'none'}),
        backgroundColor: '#EEEEEE',
        borderColor: '#000000',
        textAlign: 'left',
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 2,
        // lineHeight: 24,
        padding: 10,
    },
    inputFocus: {
        borderColor: '#000000',
    },
    label: {
        marginBottom: 8,
        fontSize: 12,
        textAlign: 'left',
        textTransform: 'uppercase',
        color: '#000000',
        letterSpacing: 1,
    },
});

export default AuthTextInput;
