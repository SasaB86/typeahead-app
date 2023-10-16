# React Typeahead Component with Caching

This project is a React typeahead component that provides suggestions fetched from a simple RESTful API. It also includes a caching mechanism to reduce redundant API requests.

# Features

- Search and Select: Users can search for items and select multiple suggestions.
- Cards: Selected items are displayed as cards.
- Caching: Utilizes caching to improve performance by reducing API calls.
- Error Handling: Provides error handling for network requests.
- Testing: Includes test cases for components.
- Responsive UI: Designed to work on various screen sizes.

## Prerequisites

Before you begin, ensure you have the following prerequisites:

- Node.js and npm installed. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone the repository:

git clone https://github.com/SasaB86/typeahead-app.git

2. Navigate to the project directory:

cd typeahead-app

3. Install the required dependencies:

npm install

4. Start the development server:

npm start

5. This will start the development server, and you can access the application in your web browser at http://localhost:3000.

## Usage

- Enter a search term in the search input field.
- As you type, suggestions will appear in the dropdown.
- Select one or more suggestions by clicking on them.
- The selected suggestions will appear as cards below.
- Click the "Submit" button to create the selected item cards.

## Caching

The application utilizes caching to reduce the number of API requests made. Cached data is stored in the browser's session storage.

## Testing

To run tests for the application components, use the following command:

npm test

## Deployment
To deploy the application to a production environment, you'll need to build the project using:

npm run build

This will create an optimized production build in the build directory. You can then deploy this build to a web server or hosting service of your choice.

## Contributing

If you would like to contribute to this project or have suggestions for improvements, please feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
