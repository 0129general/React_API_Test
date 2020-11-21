# Project 6, Sprint 13:Around the U.S. Front End + Back End

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

The current version is responsive gets profile information and images via API, and has functioning modal popups.
The project adapts to the width of various devices (from 320px to 1280px). The project is based on dynamically editing the profile information on popup modals and adding cards of places and image popups. Everything is rendering responsively adapting to different screen sizes.

**Features**

- Form Popup Modal: editing profile information, adding/deleting cards with images and titles unsing a link to photo and Forms are validated using javascript. Image popup for each card with Delete and Like button.

**Technologies**

Stack: HTML5, CSS3, flexbox, grid layout, BEM, Media queries, transition, JavaScript/JSX, DOM, Debugging Git, Git/Github, Figma, Form validation, OOP, Webpack, NPM, React, React components, React hooks, Node.js, Express.js

**Figma**

The website was made up according to the Figma layout requirements:

- [Link to the project in Figma - 1](https://www.figma.com/file/mUgu8OSHWE0M6p6vfwmdu9/Sprint-4-Around-The-U.S.-desktop-mobile?node-id=0%3A1)
- [Link to the project in Figma - 2](https://www.figma.com/file/avLHzpJw2dmU2NaDATZ6CX/Sprint-5%3A-Around-The-U.S.-%2F-desktop-%2B-mobile?node-id=0%3A1)
- [Link to the project in Figma - 3](https://www.figma.com/file/KUbYgXnYElfzxCbcrlsOCE/Sprint-6%3A-Around-The-U.S.?node-id=0%3A1)
- Export images directly from Figma and optimize them [here](https://tinypng.com/), so your project loads faster.

**Images**

All the images and profile info are pulled from the shared server.

[Demo link](https://lindakovacs.github.io)

## Directories

`/public` — static files from the build of the React front-end app.

`/data` — JSON files to temporarily emulate database integration.

`/routes` — routing files.

All other directories are optional and may be created by the developer if necessary.

## Running the Project

`npm run start` — to launch the server.

`npm run dev` — to launch the server with the hot reload feature.
