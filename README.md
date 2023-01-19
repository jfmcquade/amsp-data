# Amsp Data Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.3.

## Prequisites

1. Download and install [Git](https://git-scm.com/downloads)  
   This will be used to download the repository

2. Download and install [Node](https://nodejs.org/en/download/)  
   This is the programming lanugage required to run the project

## Installation

### Download the repo
```
git clone https://github.com/jfmcquade/amsp-data.git
```

### Install required dependencies

If using VSCode, go to `File > Open Folder...` and open the `amsp-data` folder. Otherwise, run
```
cd amsp-data
```

Then run 
```
npm install
```

### Firebase Authentication

Ask the dev team for the required config files to connect to Firebase.

## Running locally

### Install Firebase CLI
In order to run the project locally, you need to install the Firebase CLI.
```
$ npm install -g firebase-tools
```
To log in with your Google account, run
```
$ firebase login
```
If required, you can request access to the Firebase project for this app from the dev team.

### Running the local emulators
In order to start the [Firebase Local Emulator Suite](https://firebase.google.com/docs/emulator-suite), run
```
$ npm run build
$ firebase emulators:start
```
This will start emulators for Firebase's Authentication (which handles authenticating users) and Firestore (a realtime NoSQL database). The emulator UI should be available at http://localhost:4000/.

The emulated main app should be available at http://localhost:4200/.


## General Angular Instructions

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
