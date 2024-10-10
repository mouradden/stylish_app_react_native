## Table of Contents
- [Installation](#Installation)
- [Usage](#usage)
- [Documentation](#Documentation)


## Installation

1. Clone the repo:
   ```bash
   git clone git@github.com:mouradden/stylish_app_react_native.git

2. Enter the directory

   ```bash
   cd stylish_app_react_native
   ```
3. Install dependencies

   ```bash
   npm install
   ```

4. Start the app

   ```bash
    npx expo start
   ```

## Usage
* In the output, you'll find options to open the app in a

- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

   * At this stage, make sure a simulator is runing

5. run the app on a simulator

   * For ios, press i
   ```bash
    i
   ```
   * For android, press a
   ```bash
    a
   ```

   * And every time you can reload the app, press r
   ```bash
    r
   ```

## Documentation

- [The screens](#The-screens)
- [SplashScreen](#SplashScreen)
- [LoginScreen](#LoginScreen)
- [SignUpScreen](#SignUpScreen)

### The screens
The app consists of several screens that allow users to navigate through various features. Below is a detailed explanation of each screen:

1. SplashScreen: The initial screen displayed when the app starts.
2. LoginScreen: Where users can log into their account.
3. SignUpScreen: Where users can register for a new account.
4. Additional Screens: Describe other key screens like Home, Profile, or Settings.

### SplashScreen
The `SplashScreen` is the first screen users see when they open the app. It serves as a loading screen while the app initializes. The splash screen might display a logo or animation before navigating to the `LoginScreen`.

Key Features:
- Displays app logo.
- Have three pages with prev and next scroll bottons
- Have Skip button to surpass all pages at any time


### 3. [LoginScreen](#LoginScreen)

### LoginScreen

The `LoginScreen` allows users to log into their account. It provides also a way to directly navigate to the Signup screen


### 4. [SignUpScreen](#SignUpScreen)

### SignUpScreen

The `SignUpScreen` allows new users to create an account. It contains a form for entering details like username, email, password, and confirm password.
