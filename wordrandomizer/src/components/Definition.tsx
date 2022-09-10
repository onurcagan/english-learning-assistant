import { AxiosError } from 'axios'
import { RootObject } from '../types/dictionaryApi'
import { capitalizeAndFormat } from '../utils/formatting'
import { Example } from './Example'

export const Definitions = ({
  word,
  isLoading,
  error,
  dictResponse,
}: {
  word: string
  isLoading: any
  error: AxiosError<unknown, any> | null
  dictResponse: any
}) => {
  if (word === undefined) return <></>

  if (isLoading)
    return (
      <>
        <div className="outer">
          <div className="middle">
            <div className="inner">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </>
    )

  if (error && dictResponse === undefined) {
    if (error.response?.status === 404) return <p>This word doesn't exist in the dictionary.</p>

    return <p>An error occurred: {error.message}.</p>
  }

  /**
   * @description Checks whether there is an exact match with the word and the definition for the word received from the dictionary.
   * @returns true if there is a match, false otherwise.
   */
  const testDictResponse = (string: string) => {
    const regex = new RegExp('^' + word + '?:?:?\\d?$', 'g') // Regex that matches word, words, word:1, word:2, words:1, words:2 and so on.
    return regex.test(string)
  }

  const definitionsArray = dictResponse?.flatMap((x) => (testDictResponse(x?.meta?.id) ? x?.shortdef : []))

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

  return (
    <>
      <h3>{definitionsArray?.length > 1 ? 'Definitions' : 'Definition'}</h3>
      {dictResponse?.map((definitions: RootObject, index: number) => {
        const metaId = definitions?.meta?.id
        const shortDefs = definitions?.shortdef
        // For cases where the word exists in the dictionary but has no shortDefinition
        if (testDictResponse(metaId) && definitionsArray === undefined && index === 0)
          return <div key={index}>This word doesn't exist in the dictionary.</div>
        return shortDefs?.map((shortDefinition, innerIndex: number) => {
          return (
            <ol key={innerIndex}>
              {(index === 0 && innerIndex === 0) || !testDictResponse(metaId) ? <></> : <hr />}
              <li key={innerIndex}>
                {testDictResponse(metaId) ? returnDefinitionIfNotEmpty(shortDefinition) : returnWordNotFound(index, innerIndex)}
              </li>
              {testDictResponse(metaId) ? <Example definition={definitions} exampleIndex={innerIndex} /> : <></>}
            </ol>
          )
        })
      })}
    </>
  )
}
