const URL = 'http://127.0.0.1:5500/src/jokes.json';

export default async function fetchJoke(lang) {
    try {
        const response = await fetch(URL);
        const data = await response.json();

        return data[lang];
    } catch (error) {
        throw new Error('Fetching error: A problem while fetching the joke array occurred.');
    }
}