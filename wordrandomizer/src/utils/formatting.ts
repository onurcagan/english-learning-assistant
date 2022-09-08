/**
 * @description Changes the first letter of the string that gets fed to be uppercase.
 */
export const capitalizeAndFormat = (wordToCapitalize: string) => {
  if (wordToCapitalize === undefined) return

  if (wordToCapitalize.startsWith('—')) {
    wordToCapitalize = wordToCapitalize.substring(1) // Gets rid of sentences that starts with this character; —
  }

  if (wordToCapitalize.startsWith('…') && wordToCapitalize.endsWith('…')) {
    wordToCapitalize = wordToCapitalize.substring(2, wordToCapitalize.length - 2) + '.' // Gets rid of sentences that start and ends with this character; … (which looks like three dots but isn't, it's a single character.)
  }

  if (!wordToCapitalize.endsWith('.')) wordToCapitalize = wordToCapitalize + '.' // Add dot at the end of sentences without one.

  return wordToCapitalize.charAt(0).toUpperCase() + wordToCapitalize.slice(1)
}
