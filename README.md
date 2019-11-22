# **:triangular_flag_on_post: EXPO-STRIPE-CHECKOUT-SCA**

![project version](https://img.shields.io/badge/project-0.3.0-brightgreen.svg)

> A React Native Stripe Checkout WebView component compatible with Expo apps and SCA

Inspired by (https://github.com/briansztamfater/expo-stripe-checkout)

Since currently the only way to implement Stripe Checkout on an Expo app is by ejecting, I've built this lib that adds support for Stripe Checkout using a WebView.
This is compatible with Strong Customer Authentication (https://stripe.com/docs/strong-customer-authentication).

---


## **:wrench: Developer usage**

### **Set up project**

This project is based on:

- [**EXPO**](https://expo.io/) 
- [**NODE**](https://nodejs.org/)
- [**YARN**](https://yarnpkg.com/)
- [**NPM**](https://www.npmjs.com/)
- [**REACT-NATIVE**](https://facebook.github.io/react-native/)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder path `git clone git+https://github.com/christianascone/expo-stripe-checkout-sca.git`

---


### **Usage**

```
npm install expo-stripe-checkout-sca --save
```
or
```
yarn add expo-stripe-checkout-sca
```

#### API

| Prop                                                                       | Type       | defaultValue          |
| -------------------------------------------------------------------------- | ---------- | --------------------- |
| **publicKey** (required)                                                   | `string`   |                       |
| **sessionId** (required)                                                   | `string`   |                       |
| **onPaymentSuccess** (required)                                            | `function` |                       |
| **onClose** (required)                                                     | `function` |                       |
| **onNavigationStateChange** (required)                                     | `function` |                       |
| **modalVisible** (required)                                                | `boolean`  |                       |
| webViewStyle                                                               | `ViewStyle`|                       |
| closeButtonContainerStyle                                                  | `ViewStyle`|                       |
| closeButtonInnerStyle                                                      | `TextStyle`|                       |

```js
/**
* Logs when webview url changes
* @param e
*/
log(e) {
    let url: string = e.url;
    // Do your stuff
    // Check url. It may be the success or cancel url
    // Here you can set modal as no more visible
}

render() {
  return <StripeCheckoutSca modalVisible={true}
    onClose={null}
    onNavigationStateChange={(e) => this.log(e)}
    onPaymentSuccess={null}
    publicKey="pk_test_jr2LmM4cWdn3Q5vuFqgo5LMO"
    sessionId="cs_test_9pGYF9ZP3OBcOHVlKjDM0Bjw0k0wsqSQLxsagv3L05VImpbV1iZAzcG1"
  />
}
```

For more information please
[read their docs](https://stripe.com/docs/checkout)

---


## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b feature/my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin feature/my-new-feature`
- Submit a pull request

---



### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---

### **:scroll: Release history**

* 0.3.0
    * UPDATE: Webview style with explicit property name and no more required
* 0.2.0
    * ADD: Close button
* 0.1.0
    * Work in progress

---

### **:robot: Author**

_*Christian Ascone*_

> You can follow me on
[GitHub](https://github.com/christianascone)&nbsp;&middot;&nbsp;[GitLab](https://gitlab.com/christianascone)

---

Copyright © 2019 [Christian Ascone](https://github.com/christianascone).