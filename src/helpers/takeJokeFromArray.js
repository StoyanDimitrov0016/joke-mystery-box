import getRandomNumber from "./randomNumberGenerator.js";

export default function takeJokeFromArray(jokes, lastJokeIndex) {
    let jokeIndex = getRandomNumber(jokes.length - 1);

    while (lastJokeIndex === jokeIndex) {
        jokeIndex = getRandomNumber(jokes.length - 1);
    }

    return [jokeIndex, jokes[jokeIndex]];
}