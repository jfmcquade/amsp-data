# AmspData

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
In order to build the app and start the [Firebase Local Emulator Suite](https://firebase.google.com/docs/emulator-suite), run
```
$ npm run serve
```
This will start emulators for Firebase Hosting (which hosts the app), Firebase Authentication (which handles authenticating users), Firestore (a realtime NoSQL database). The emulator UI should be available at http://localhost:4000/.

Navigate to http://localhost:4200/ to view the app. Whilst Firebase Hosting does not support hot-reloading, files will be watched while `npm run serve` is running, and any changes should be reflected in your browser after you refresh the page.
