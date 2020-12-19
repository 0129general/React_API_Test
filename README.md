# Project 15, Sprint 15: Around The US - Full Stack (Front End + Back End)
* Part of the [Practicum by Yandex](https://practicum.yandex.com/) Web Development Bootcamp Curriculum.

# react-around-api-full
The API of "Around the U.S." with authorization and registration handled by the back-end server.

This repository contains the full API of "Around the U.S." project that features user authorization and user registration and handles cards and users. 

### Server
- Api hosted on Microsoft Azure Cloud
- Server IP: 13.90.58.253
- Front-end: https://lindakovacs.students.nomoreparties.site/
- Back-end/Api: https://api.lindakovacs.students.nomoreparties.site/

# Links TBD
* Link to repository with the complete React application which uses this API;
* Link to the website that hosts the API.

# Project 15: Around the U.S. Front End + Back End

- Part of the [Practicum by Yandex](https://practicum.yandex.com/) Web Development Bootcamp Curriculum.

The project takes [the last](https://github.com/lindakovacs/around-react) from React using the Create React App to Express NodeJs implementing the API in the backend.

The previous project takes [the one before](https://lindakovacs.github.io/web_project_4/) from vanilla JS to React using the Create React App.

A responsive website using HTML5, CSS3 (flexbox, grid, BEM), JavaScript, built following the design mokup in Figma.
This adaptive page includes form validation, interactive popups, fade-in and fade-out animations, functional like and delete buttons, modular JavaScript, and Object Oriented JS design.

The React Framework is used to add functionality to Form Fields in a Popup Box and save the edited values. Used BEM methodology with a nested file structure.

The server-side web framework Express.js is used to help deploy our own back-end server faster, work with databases, set up security and testing, as well as deploying the back end on a remote machine. The goal of all this is to create a server with an API and user authentication.

The project interactivity includes:

- Popup modals for: Updating profile info and avatar image, Adding new cards and Deleting user's owncards only
- Liking and unliking cards
- Sign up and Sign in

The current version is responsive gets profile information and images via API, and has functioning modal popups.
The project adapts to the width of various devices (from 320px to 1280px). The project is based on dynamically editing the profile information on popup modals and adding cards of places and image popups. Everything is rendering responsively adapting to different screen sizes.

**Features**

- Form Popup Modal: editing profile information, adding/deleting cards with images and titles unsing a link to photo and Forms are validated using javascript. Image popup for each card with Delete and Like button.

**Technologies**

Stack: HTML5, CSS3, flexbox, grid layout, BEM, Media queries, transition, JavaScript/JSX, DOM, Debugging Git, Git/Github, Figma, Form validation, OOP, Webpack, NPM, React, React components, React hooks, Node.js, Express.js, Database, MongoDB, Mongoose, Microsoft Azure

**Figma**

The website was made up according to the Figma layout requirements:

* [Link to the project in Figma - 1](
   https://www.figma.com/file/mUgu8OSHWE0M6p6vfwmdu9/Sprint-4-Around-The-U.S.-desktop-mobile?node-id=0%3A1)
* [Link to the project in Figma - 2](
   https://www.figma.com/file/avLHzpJw2dmU2NaDATZ6CX/Sprint-5%3A-Around-The-U.S.-%2F-desktop-%2B-mobile?node-id=0%3A1)
* [Link to the project in Figma - 3](
   https://www.figma.com/file/KUbYgXnYElfzxCbcrlsOCE/Sprint-6%3A-Around-The-U.S.?node-id=0%3A1)
* [Link to the project in Figma - 4](https://www.figma.com/file/PJbelNQkbotPz2M1Lth55j/Sprint-14-EN?node-id=0%3A1)

* Export images directly from Figma and optimize them [here](https://tinypng.com/), so your project loads faster. 

**Images**

All the images and profile info are pulled from the shared server.

[Demo link](https://lindakovacs.github.io) TBD

## Directories

`/models` — database schemas and models

`/controllers` — communication with database

`/routes` — routing files HTTP requests

`/middleware` — middleware authentication and logging

`/errors` - errors application

`/public` — static files from the build of the React front-end app.

All other directories are optional and may be created by the developer if necessary.

## Running the Project

`npm run start` — to launch the server.
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

`npm run dev` — to launch the server with the hot reload feature.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
