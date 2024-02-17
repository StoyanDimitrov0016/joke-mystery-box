export default function getRandomNumber(upperLimit) {
    const randomNumber = Math.floor(Math.random() * (upperLimit + 1));
    return randomNumber;
}