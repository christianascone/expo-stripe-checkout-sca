/*
 * Copyright (C) Christian Ascone - All Rights Reserved
 *
 * @project    expo-stripe-checkout-sca
 * @file       StripeCheckoutSca.tsx
 * @author     Christian Ascone
 * @date       11/21/19 12:20 PM
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle
} from 'react-native';
import Import from './import';

interface StripeCheckoutScaProps {
    publicKey: string,
    webViewStyle?: StyleProp<ViewStyle>,
    sessionId: string,
    onClose: () => void,
    onNavigationStateChange: (any) => void,
    modalVisible: boolean,
    closeButtonContainerStyle?: StyleProp<ViewStyle>,
    closeButtonInnerStyle?: StyleProp<TextStyle>,
}

class StripeCheckoutSca extends Component<StripeCheckoutScaProps, any> {
    render() {
        const {
            publicKey,
            webViewStyle,
            onClose,
            sessionId,
            onNavigationStateChange,
            modalVisible,
            closeButtonContainerStyle,
            closeButtonInnerStyle,
        } = this.props;


        return (
            <Import.Modal
                animationType={'slide'}
                visible={modalVisible}
                transparent={false}
                onRequestClose={() => {
                    console.log('close modal')
                }}>
                <TouchableOpacity onPress={() => onClose()}
                                  style={[styles.closeButtonOpacity, closeButtonContainerStyle]}>
                    <Text
                        style={[styles.closeButtonText, closeButtonInnerStyle]}>X</Text>
                </TouchableOpacity>
                <Import.WebView
                    javaScriptEnabled={true}
                    scrollEnabled={false}
                    bounces={false}
                    onNavigationStateChange={(e) => onNavigationStateChange(e)}
                    source={{
                        html:
                            `<script src="https://js.stripe.com/v3"></script>
                            <script>
                            var stripe = Stripe('${publicKey}');
                            window.onload = function() {
                                stripe.redirectToCheckout({
                                      // Define the sessionId you get server side
                                      sessionId: '${sessionId}'
                                  }).then(function (result) {
                                  // If \`redirectToCheckout\` fails due to a browser or network
                                  // error, display the localized error message to your customer
                                  // using \`result.error.message\`.
                                  window.postMessage("WINDOW_CLOSED", "*");
                                });
                            };
                            </script>`,
                        baseUrl: ''
                    }}
                    onMessage={event => event.nativeEvent.data === 'WINDOW_CLOSED' ? onClose() : console.log('Event: ' + event.nativeEvent.data)}
                    style={[{flex: 1}, webViewStyle]}
                    scalesPageToFit={Platform.OS === 'android'}
                />
            </Import.Modal>
        );
    }
}

const styles = StyleSheet.create({
    closeButtonOpacity: {
        width: 30, height: 30, backgroundColor: '#a1a1a1', shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        marginTop: 5,
        marginLeft: 5,
    },
    closeButtonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
});

export default StripeCheckoutSca;
