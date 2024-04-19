# WhosPaying
react native tutorial with some tweaks

# Setup
- use at least node 18.18.2
```
nvm use 18.18.2
```
- install dependencies
```
npm install
```

# Android
## To start emulator
- open Android Studio
- go to 'Virtual Device Manager' under 'More Actions'
- add or select existing device from list
- press the triangle play button for that device

## To run app
- ensure you have (or create) a `local.properties` file in the `android/` folder with the following line
```
sdk.dir = /Users/[YOUR_LOCAL_USERNAME]/Library/Android/sdk
```
- to build the app
```
npm run android
```
- if app does not open automatically, press `a`
- to reload app, click on the emulator screen and press `r` twice

