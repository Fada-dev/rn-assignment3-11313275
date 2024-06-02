## rn-assignment3-11313275
# Implementation Overview for UI Mockup Recreation

To-Do List App is a mobile application built with React Native that allows users to manage their daily tasks and activities. The app provides an intuitive interface for users to create, view, and manage their ongoing tasks across various categories.

## Components Usage

### `App.js`
The `App.js` component is the entry point of the application. It sets up the navigation and renders the main components of the app.

### `TaskList.js`
The `TaskList.js` component is responsible for rendering the list of tasks. It uses either a `FlatList` or `SectionList` to display the tasks.

### `TaskItem.js`
The `TaskItem.js` component represents a single task item in the task list. It displays the task's title, description, and other relevant information.

### `Categories.js`
The `Categories.js` component renders the list of categories (e.g., Exercise, Study, Code, Cook) that users can use to organize their tasks.

### `CategoryItem.js`
The `CategoryItem.js` component represents a single category item in the categories list. It displays the category's name and icon.

### `Header.js`
The `Header.js` component is responsible for rendering the application's header, which includes the search bar and any other UI elements in the header.

### `TextInput.js`
The `TextInput.js` component is a custom `TextInput` component that inherits from the built-in `TextInput` component and applies the application's styles.

### `Button.js`
The `Button.js` component is a custom `Button` component that inherits from the built-in `Button` component and applies the application's styles.

### `Image.js`
The `Image.js` component is a custom `Image` component that inherits from the built-in `Image` component and applies the application's styles.

## Screenshot

#### *Completed Tasks Screen*![alt text](my-app/pictures/screenshot.jpg)
