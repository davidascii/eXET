/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//--GUN
// import 'gun/lib/mobile';
// import 'react-native-get-random-values';
// import 'react-native-webview-crypto';
// import WebviewCrypto from 'react-native-webview-crypto';
import PolyfillCrypto from 'react-native-webview-crypto';
// import useGun from './useGun';
//--GUN
import React from 'react';
import {authUser, createUser, logoutUser, testGun, startEvent, _createUser} from './contexts';
import Section from '../../components/App';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    useColorScheme,
} from 'react-native';



function MyApp(): React.ReactElement {
    // const { user, SEA } = useGun();
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? '#1A1A33' : '#E8F0FE',
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <PolyfillCrypto />
            <Button onPress={() => _createUser()} title='Create user' />
            <Button onPress={() => authUser()} title='Login user' />
            <Button onPress={() => logoutUser()} title='Logout user' />
            <Button onPress={() => testGun()} title='testGun GunJS' />
            <Button onPress={() => startEvent()} title='startEvent GunJS' />

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}
            >
                <Text>Header</Text>
                <View
                    style={{
                        backgroundColor: isDarkMode ? '#0a0a0a' : '#FFFFFF',
                    }}
                >
                    <Section title="Step One">
                        Edit Testandooo{' '}
                        <Text style={styles.highlight}>App.tsx</Text> to change
                        this screen and then come back to see your edits.
                    </Section>
                    <Section title="See Your Changes">
                        <Text>Reload instructions</Text>
                    </Section>
                    <Section title="Debug">
                        <Text>Debug options</Text>
                    </Section>
                    <Section title="Learn More">
                        Read the docs to discover what to do next:
                    </Section>
                    <Text>Learn More</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});


export default MyApp;
