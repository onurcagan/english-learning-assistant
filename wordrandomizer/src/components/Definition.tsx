import { useDefinitionQuery } from '../hooks/useDefinitionQuery'
import { RootObject } from '../types/dictionaryApi'
import { capitalizeAndFormat } from '../utils/formatting'
import { Example } from './Example'

export const Definition = ({ word }: { word: string }) => {
  const { isLoading, error, data: dictResponse } = useDefinitionQuery(word)
  if (word === undefined) return <></>

  if (isLoading) return <p>Loading...</p>

  if (error && dictResponse === undefined) {
    if (error.response?.status === 404) return <p>This word doesn't exist in the dictionary.</p>

    return <p>An error occurred: {error.message}.</p>
  }

  /**
   * @description Checks whether there is an exact match with the word and the definition for the word received from the dictionary.
   * @returns true or false depending on the match.
   */
  const testDictResponse = (string: string) => {
    const regex = new RegExp('^' + word + '?:?:?\\d?$', 'g') // Regex that matches word, word:1, word:2, word:3 and so on.
    return regex.test(string)
  }

  /**
   * @description Returns definition if it's not empty.
   * @returns definition or a preset word doesn't exist msg.
   */
  const returnDefinitionIfNotEmpty = (string: string) => {
    if (string === undefined || string === '') return <>This word doesn't exist in the dictionary.</>

    return capitalizeAndFormat(string)
  }

  const returnWordNotFound = (index1: number, index2: number) => {
    if (index1 === 0 && index2 === 0) return <>This word doesn't exist in the dictionary.</>
    return <></>
  }

  console.log(dictResponse)

  return (
    <>
      {dictResponse.map((definitions: RootObject, index: number) => {
        // For cases where the word exists in the dictionary but has no shortDefinition
        if (testDictResponse(definitions.meta.id) && definitions.shortdef[0] === undefined)
          return <div key={index}>This word doesn't exist in the dictionary.{index}</div>
        return definitions.shortdef.map((shortDefinition, innerIndex: number) => {
          return (
            <ol key={innerIndex}>
              {(index === 0 && innerIndex === 0) || !testDictResponse(definitions.meta.id) ? <></> : <hr />}
              <li key={innerIndex}>
                {testDictResponse(definitions.meta.id)
                  ? returnDefinitionIfNotEmpty(shortDefinition)
                  : returnWordNotFound(index, innerIndex)}
              </li>
              {testDictResponse(definitions.meta.id) ? <Example definition={definitions} exampleIndex={innerIndex} /> : <></>}
            </ol>
          )
        })
      })}
    </>
  )
}
