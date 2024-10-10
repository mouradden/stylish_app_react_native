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

- [The Screens](#the-screens)
- [SplashScreen](#splashscreen)
- [LoginScreen](#login-screen)
- [SignUpScreen](#signup-screen)

### The Screens
The app consists of several screens that allow users to navigate through various features. Below is a detailed description of each screen:

1. **SplashScreen**: The initial screen displayed when the app starts.
2. **LoginScreen**: The screen where users can log into their account.
3. **SignUpScreen**: The screen where users can register for a new account.
4. **Additional Screens**: Other key screens, such as Home, Profile, or Settings, that will be described later.

### SplashScreen
The `SplashScreen` is the first screen users encounter when they open the app. It serves as a loading screen while the app initializes, potentially displaying a logo or animation before navigating to the `LoginScreen`.

**Key Features:**
- Displays the app logo.
- Contains three pages with "Prev" and "Next" scroll buttons.
- Includes a "Skip" button to bypass all pages at any time.

### LoginScreen
The `LoginScreen` allows users to log into their accounts. It also provides an option to directly navigate to the SignUp screen for new users.

### SignUpScreen
The `SignUpScreen` enables new users to create an account. It features a form for entering the following details:
- Username
- Email address
- Password
- Confirm password
