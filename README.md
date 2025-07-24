# kodekloud App

A React Native application that allows users to browse courses, view modules and lessons, enroll in courses, and watch videos using Vimeo embeds.

## 🚀 Features

- 📘 Browse courses and their modules
- 🎥 Play lesson videos (via Vimeo)
- ✅ Enroll/unenroll functionality
- 💾 Asyncstorage local state persistence
- 🧠 Global state management using Redux Toolkit

---

## 📦 Tech Stack

- **React Native CLI**
- **Redux Toolkit + React Redux**
- **Asyncstorage Storage** (`@react-native-asyncstorage`)
- **Vimeo Playback** via `react-native-video`
- **React Navigation v6**
- **TypeScript**
- **ESLint + Prettier**

---

## 🔧 Installation & Setup

> Ensure you have the React Native CLI development environment set up.
> See: [React Native CLI Setup Guide](https://reactnative.dev/docs/environment-setup)

### 1. Clone the Repository

````bash
git clone https://github.com/your-username/my-course-app.git
cd kodekloud

## Run dependecies

npm install
# or
yarn install

```sh
# Using npm
npm start

# OR using Yarn
yarn start
````

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Issues which we faced

https://vimeo.com/1089696717
getting this url from api which is not playable, due to this video player is not working.
