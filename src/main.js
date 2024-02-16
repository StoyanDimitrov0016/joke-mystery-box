import validateJsonData from "./helpers/JSONValidator.js";
import fetchJoke from "./api.js";
import { langs } from "./languages/languages.js";
import takeJokeFromArray from "./helpers/takeJokeFromArray.js";

const DELAY_IN_MILLISECONDS = 1000;
let currentLanguage = 'en';
let lastJokeIndex = null;

const bodyElement = document.body;

const themeToggleSwitch = document.querySelector('.theme-switch');
const themeCheckboxElement = document.querySelector('#theme-btn');
const themeSwitchParagraph = document.querySelector('.theme-switch-heading');
const langOptions = [...document.querySelectorAll('.lang-box .text-box span:nth-child(odd)')];

const langToggleSwitch = document.querySelector('.lang-switch');
const langCheckboxElement = document.querySelector('#lang-btn');
const langSwitchParagraph = document.querySelector('.lang-switch-heading');
const themeOptions = [...document.querySelectorAll('.theme-box .text-box span:nth-child(odd)')];

const heading = document.querySelector('.heading');

const errorMessageParagraph = document.querySelector('.error-message');
const loadingMessageParagraph = document.querySelector('.loading-message');

const jokeQuestionParagraph = document.querySelector('.joke-question');
const jokeAnswerParagraph = document.querySelector('.joke-answer');

const getJokeButton = document.getElementById('button');

async function displayRandomJoke() {
    try {
        const jokes = await fetchJoke(currentLanguage);
        validateJsonData(jokes);
        clearElementsTextContent(errorMessageParagraph, loadingMessageParagraph, jokeQuestionParagraph, jokeAnswerParagraph);
        setLoadingMessage(loadingMessageParagraph);

        setTimeout(() => {
            const [jokeIndex, currentJoke] = takeJokeFromArray(jokes, lastJokeIndex);
            lastJokeIndex = jokeIndex;

            displayJoke(currentJoke);
            clearElementsTextContent(loadingMessageParagraph);
            getJokeButton.disabled = false;
        }, DELAY_IN_MILLISECONDS);
    } catch (error) {
        handleJokeError(error);
    }
}

function setLoadingMessage(loadingMessageParagraph) {
    getJokeButton.disabled = true;
    loadingMessageParagraph.textContent = langs.loadingMessage[currentLanguage];
}

function displayJoke(joke) {

    jokeQuestionParagraph.textContent = `${langs.jokeQuestion[currentLanguage]} ${joke.question}`;
    jokeAnswerParagraph.textContent = `${langs.jokeAnswer[currentLanguage]} ${joke.answer}`;
}

function handleJokeError(error) {
    errorMessageParagraph.textContent = langs.errorMessage[currentLanguage];
    console.log(error);
}

function clearElementsTextContent(...elements) {
    elements.forEach(element => element.textContent = '');
}

function setTheme() {
    if (themeCheckboxElement.checked) {
        bodyElement.classList.add('dark-theme');
    } else {
        bodyElement.classList.remove('dark-theme');
    }
}

async function setLang() {
    if (langCheckboxElement.checked) {
        currentLanguage = 'bg';
    } else {
        currentLanguage = 'en';
    }

    translateElements(currentLanguage);
    await displayRandomJoke();
}

function translateElements(currentLanguage) {
    clearElementsTextContent(langSwitchParagraph,
        themeSwitchParagraph,
        heading,
        errorMessageParagraph,
        loadingMessageParagraph,
        getJokeButton,
        langOptions[0], langOptions[1],
        themeOptions[0], themeOptions[1]);

    langSwitchParagraph.textContent = langs.langSwitch[currentLanguage];
    themeSwitchParagraph.textContent = langs.themeSwitch[currentLanguage];
    heading.textContent = langs.heading[currentLanguage];
    getJokeButton.textContent = langs.getAJoke[currentLanguage];

    translateOptions(langOptions, themeOptions, currentLanguage);
}

function translateOptions(langOptions, themeOptions, currentLanguage) {
    langOptions[0].textContent = langs.langOptions[currentLanguage].english;
    langOptions[1].textContent = langs.langOptions[currentLanguage].bulgarian;

    themeOptions[0].textContent = langs.themeOptions[currentLanguage].light;
    themeOptions[1].textContent = langs.themeOptions[currentLanguage].dark;
}

getJokeButton.addEventListener('click', displayRandomJoke);

langToggleSwitch.addEventListener('click', setLang);
themeToggleSwitch.addEventListener('click', setTheme);