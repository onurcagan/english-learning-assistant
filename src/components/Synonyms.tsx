import { useDefinitionQuery } from '../hooks/useDefinitionQuery'

export const Synonyms = ({ word }: { word: string }) => {
  const { data: dictResponse } = useDefinitionQuery(word)
  const synonymsInASentence = dictResponse?.[0]?.syns?.[0]?.pt?.[0]?.[1]

  /**
   * Takes the sentence including synonyms of a word, returns the synonyms.
   * @returns list of synonyms
   */
  const synonymListCreator = (string: string) => {
    const regex = new RegExp('{sc}(\\w+\\b)(?!.*\\1\\b){/sc}', 'g')
    const matches = (string?.match(regex) || []).map((e) => e.replace(regex, '$1'))
    return matches
  }

  const listOfSynonyms = synonymListCreator(synonymsInASentence).filter((s) => s !== word) // Removing the word from list of synonyms

  return (
    <>
      {Array.isArray(listOfSynonyms) && listOfSynonyms.length ? (
        <>
          {listOfSynonyms.length > 1 ? <h3>{listOfSynonyms.length > 1 ? 'Synonyms' : 'Synonym'}</h3> : <h3>Synonym</h3>}
          <div>{listOfSynonyms.join(', ')}</div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
