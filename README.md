# drasa
Drasa is an anonymous messaging platform that connects patients to healthcare professionals in situations where they would have been limited by stigma surrounding their health issues.

> **drasa** is a mnemonic for _**Dr**. **A**meyo **S**tella **A**dadevoh_, a Nigerian physician who paid the ultimate price while curbing the 2014 ebola epidemic in West Africa. This project is named in memory of her legacy.

##

## Setup:
* Clone this repository.
* Go into `android/local.properties` and change $USER to your username or change the value of `sdk.dir` to where the Android SDK is installed.

## Install:

* Install project dependencies using`npm install`.
* Open a second terminal and run `testrpc` or `ganache-cli` to start a local test Ethereum client.
* Return to the first terminal and run `truffle compile && truffle migrate --reset` to compile and migrate the smart contracts.
* Still in the first terminal, run `npm start` to start the React Native packager.
* In the second terminal, install the project on your Android/iOS device by running either `react-native run-android` or `react-native run-ios`.
