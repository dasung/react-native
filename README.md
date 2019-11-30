## react-native-hello

* package.json

  * npm init
* npm install lite-server --save-dev
* npm start


## create-react-native-app (Expo CLI)

- A new tool that makes it significantly easier to get started with a React Native project.
  -  Create React Native App has been merged with Expo CLI
- npm install -g expo-cli
- expo init awesome-app
- cd awesome-app
- npm start

## How to run awsome-app

- Install Expo client 
  - Create login
- Open the project awesome-app in mobile

## react-native-elements

- npm install --save react-native-elements
  - ListItem
  - CARD

## react navigation

- npm install --save react-navigation



## Migration to the latest node v12.11.0

- Fixed a bug 
  - awesome-app\node_modules\metro-config\src\defaults\blacklist.js

FROM

var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
];

TO

var sharedBlacklist = [
 /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
];

