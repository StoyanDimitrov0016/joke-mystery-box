export default function validateJsonData(jsonData) {
    if (!Array.isArray(jsonData) || jsonData.length < 1) {
        throw new Error('Invalid JSON data: It should be an array with at least one joke entries.');
    }
}