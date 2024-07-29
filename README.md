# VSell - Vegetable Grocery Store

VSell is a modern, responsive web application for a vegetable grocery store built with React. This project showcases a range of frontend skills and best practices, including lazy loading, dynamic routing, state management, and more.

## Table of Contents

- [Features](#features)
- [Design](#design)
- [Responsiveness](#responsiveness)
- [Optimization](#optimization)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- **Dynamic Routing**: The application uses React Router for seamless navigation between pages, including Home, Shop, Cart, Favorite, and Account.
- **Lazy Loading**: Components are loaded on demand using React's `lazy` and `Suspense`, improving initial load performance.
- **Local Storage**: Items can be added to the cart and favorites, with persistent storage using local storage.
- **Search Functionality**: Users can search for products in the shop using a dynamic search bar.
- **Error Handling**: A custom error page is displayed for invalid routes, providing a friendly user experience.

## Design

- **Header and Footer**: Consistent navigation and branding are maintained across the application with a responsive header and footer.
- **Card Component**: Product cards feature an image, name, price, and description, with options to add items to the cart or favorites.
- **Error Page**: A visually appealing 404 error page guides users back to the homepage if they encounter an invalid route.

## Responsiveness

- **Mobile-First Design**: The application is designed to be fully functional on mobile devices, with responsive components that adapt to various screen sizes.
- **Flexbox and Grid Layouts**: Utilizes Flexbox and CSS Grid for a fluid and adaptable layout that adjusts to different devices, ensuring a consistent user experience.
- **Media Queries**: Tailwind CSS utilities are used for responsive design without custom media queries, providing a clean and maintainable solution.

## Optimization

- **Lazy Loading**: Components and routes are lazily loaded to reduce initial page load times and improve performance.
- **Local Storage**: Efficient data management with local storage ensures that user actions (like adding to the cart or favorites) are preserved across sessions.
- **Toast Notifications**: React Toastify is used for user feedback on actions like adding items to the cart or favorites, improving usability.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
