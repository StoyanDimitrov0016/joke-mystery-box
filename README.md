# Jokes Mystery Box

Jokes Mystery Box is a simple web application that provides users with a collection of jokes in both English and Bulgarian languages.

- [Jokes Mystery Box](#jokes-mystery-box)
  - [Supported Languages](#supported-languages)
  - [Features](#features)
- [Screenshots](#screenshots)
  - [Starting screen (English as default)](#starting-screen-english-as-default)
  - [Joke screen](#joke-screen)
    - [English:](#joke-screen-in-english)
    - [Bulgarian:](#joke-screen-in-bulgarian)
  - [No Jokes for displaying:](#no-jokes-for-displaying)
    - [English:](#no-joke-screen-in-english)
    - [Bulgarian:](#no-joke-screen-in-bulgarian)
- [Features in Depth](#features-in-depth)
  - [Jokes storage](#jokes-storage)
  - [Non-consecutive occurrences of the same joke](#non-consecutive-occurrences-of-the-same-joke)
  - [Themes](#themes)
  - [Language localization](#language-localization)
- [Limitations](#limitations)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [Contributions](#contributions)
- [Acknowledgements](#acknowledgements)

## Supported Languages

The application supports jokes in two languages: English and Bulgarian. Users can switch between languages to view jokes in their preferred language.

## Features

- Themes - Dark and light theme options for improved user experience.
- Two languages - Support for jokes in English and Bulgarian languages.
- non-consecutive occurrences of the same joke - Prevents the display of the same joke consecutively to ensure variety.

## Screenshots

### Starting screen (English as default)

![Starting Screen English](/screenshots/starting-screen-en.png)

### Joke screen

#### Joke Screen in English:

![Joke Screen English](/screenshots/joke-displayed-en.png)

#### Joke Screen in Bulgarian:

![Joke Screen Bulgarian](/screenshots/joke-displayed-en.png)

### No Jokes for displaying:

#### No Joke Screen in English:

![No Joke Screen English](/screenshots/no-jokes-en.png)

#### No Joke Screen in Bulgarian:

![No Joke Screen Bulgarian](/screenshots/no-jokes-bg.png)

## Features in Depth

### Jokes storage

Jokes are retrieved from a local JSON file (`jokes.json`) rather than through a real API. This approach was adopted due to limitations with available free APIs, which often impose restrictions on the number of requests per month. Additionally, finding a dedicated Bulgarian jokes API proved to be challenging and may quickly deplete the available requests.

As a result, utilizing a local JSON file provides a more sustainable solution, ensuring an uninterrupted supply of jokes for users. The fetching process closely resembles that of a real API request, mimicking the behavior of fetching data from an external source.

The `fetchJoke` function in the codebase is responsible for fetching jokes. It takes the selected language as an argument and returns an array of jokes in the specified language. The function simulates the behavior of making a real API request, allowing for easy integration with the application's functionality.

### Non-consecutive occurrences of the same joke

To ensure variety in joke selection, the application keeps track of the last displayed joke index. By doing so, it guarantees that the next joke displayed will always be different from the previous one.

### Themes

### Language localization

To facilitate language localization, the application utilizes an object that stores the strings for every text displayed on the page, along with their English and Bulgarian alternatives. Depending on the user's language preference, all text contents are dynamically updated to reflect the chosen language.

This localization mechanism ensures a seamless experience for users regardless of their language preference. Upon language selection, the application resets all text contents and appends new ones in the chosen language. This approach allows for easy maintenance and scalability, as additional languages can be added to the localization object in the future without requiring significant code changes.

By centralizing text management in a single object, the application streamlines the localization process and enhances overall user accessibility and experience.

## Limitations

As with any software application, there are some limitations to consider:

- Limited number of jokes available in the initial dataset.
- Lack of real-time joke updates without manually modifying the JSON file.
- Dependency on local storage for joke storage and retrieval.

## License

Jokes Mystery Box is licensed under the MIT License.

## Installation

To install and run the application locally, follow these steps:

1. Clone this repository to your local machine.
2. Open the project directory in your code editor.
3. Run `npm install` to install the necessary dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and navigate to `http://localhost:5500` to view the application.

## Usage

Once the application is running, you can:

- Toggle between dark and light themes using the theme switch.
- Switch between English and Bulgarian languages using the language switch.
- Click the "Unveil a Joke" button to display a random joke in the selected language.

## Troubleshooting

If you encounter any issues while running the application, try the following troubleshooting steps:

- Ensure that all dependencies are correctly installed by running `npm install` again.
- Check the browser console for any error messages and investigate accordingly.
- Verify that the JSON file (`jokes.json`) is correctly formatted and contains the necessary joke data.

## Contributions

Contributions to Jokes Mystery Box are welcome! If you'd like to contribute to the project, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Submit a pull request with a clear description of your changes and why they are needed.

## Acknowledgements

Special thanks to "JavaScript King" YouTube channel and his JavaScript tutorial called "HTML CSS JavaScript projects for beginners 2024 - 12 js projects with source code" for the idea and foundation for this application.

Link to the tutorial: https://www.youtube.com/watch?v=-7JSF_aATJg&list=PLXE1zWKpPQ6rzD6WrZKmo1fea0O6jpi__
