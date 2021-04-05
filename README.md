# electron-react-template
A simple base environment to get an Electron app ready with React.

This template uses [Electron](https://www.electronjs.org/), [React](https://reactjs.org/), [Webpack](https://webpack.js.org/) and [electron-webpack](https://webpack.electron.build/)

## Project Structure
```
├── package.json
├── src
│   ├── index.ejs
│   ├── main
│   │   └── index.js
│   └── renderer
│       ├── components
│       │   └── App
│       │       └── App.js
│       └── index.js
└── webpack.renderer.additions.js
```

## Getting Started
Simply clone the repository and install dependencies
```
git clone https://github.com/Armster15/electron-react-template my-new-project
cd my-new-project
npm install
```

## Running in Development Mode
To start your application in development mode
```
npm run start
```

## Building for Production
To build your application for the local platform
```
npm run dist
```