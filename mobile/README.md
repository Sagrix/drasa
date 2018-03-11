## Setup:
* Clone this repository.
* Go into `android/local.properties` and change `$USER` to your username or change the value of `sdk.dir` to where the Android SDK is installed.

## Install:

* Install project dependencies using`npm install`.
* Open a second terminal and run `testrpc` or `ganache-cli` to start a local test Ethereum client.
* Return to the first terminal and run `truffle compile && truffle migrate --reset` to compile and migrate the smart contracts.
* (Optional, but recommended) Still in the first terminal, run `npm start` to start the React Native packager.
* In a third terminal, install the project on your Android/iOS device by running either `react-native run-android` or `react-native run-ios`.
