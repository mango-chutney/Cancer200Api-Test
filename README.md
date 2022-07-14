# Cancer 200 Map Framework Test

Test repository for integrating [andrewmapimagery/Cancer200Api](https://github.com/andrewmapimagery/Cancer200Api) into a React Native app.

This version currently only support iOS, Android to come at a later date.

---

## Getting started

You will need Requires `node`, `yarn`, `watchman`, `Xcode`, and `Cocoapods`.

See more information at https://reactnative.dev/docs/environment-setup

### Install dependencies

`yarn install`

`bundle exec pod install`

### Running the app

Open Xcode, select an iOS Simulator, followed by **Product > Run**.

## Framework Bindings

The core files that setup communication between React Native and MapImagery can be see in [`MapImagery.swift`](ios/Cancer200Map/MapImagery.swift) and [`MapImagery.m`](ios/Cancer200Map/MapImagery.m)

This is then consumed in [`MapImagery.js`](MapImagery.js) and [`App.js`](App.js)
