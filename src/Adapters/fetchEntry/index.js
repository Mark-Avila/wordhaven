/**
 * Fetch word entry from API
 * @param {string} word
 * @returns Word entry from in JSON
 */
export default async function fetchEntry(word) {
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  const response = await fetch(url);

  if (response.status === 404) return null;

  const entry = await response.json();
  return entry;
}
