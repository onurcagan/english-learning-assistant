import { useDefinitionQuery } from '../hooks/useDefinitionQuery'
import { RootObject } from '../types/dictionaryApi'
import { capitalize } from '../utils/formatting'
// import { Example } from './Example'

export const Definition = ({ word }: { word: string }) => {
  const { isLoading, error, data: dictResponse } = useDefinitionQuery(word)

  if (word === undefined) return <></>

  if (isLoading) return <p>Loading...</p>

  if (error && dictResponse === undefined) {
    if (error.response?.status === 404) return <p>This word doesn't exist in the dictionary.</p>

    return <p>An error ocured: {error.message}.</p>
  }

  /**
   *  Checks whether there is an exact match with the word and the definition of the word received from the dictionary.
   */
  const testDictResponse = (string: string) => {
    const regex = new RegExp('^' + word + ':?\\d?$', 'g')
    // console.log(regex.test(string), string, word)
    return regex.test(string)
  }

  const returnDefinitionIfNotEmpty = (string: string) => {
    if (string === undefined || string === '') return <>This word doesn't exist in the dictionary.</>
    return capitalize(string) + '.'
  }

  const returnWordNotFound = (index, innerIndex) => {
    if (index === 0 && innerIndex === 0) return <>This word doesn't exist in the dictionary.</>
    return <></>
  }

  console.log(dictResponse, 'whole response')
  console.log(dictResponse[0].shortdef, 'shortdefs')

  return (
    <>
      {dictResponse.map((definitions: RootObject, index: number) => {
        return definitions.shortdef.map((shortDef, innerIndex: number) => (
          <ol key={innerIndex}>
            {(index === 0 && innerIndex === 0) || !testDictResponse(definitions.meta.id) ? <></> : <hr />}
            <li key={innerIndex}>
              {testDictResponse(definitions.meta.id)
                ? returnDefinitionIfNotEmpty(shortDef)
                : returnWordNotFound(index, innerIndex)}
            </li>
            {/* <Example dictResponse={dictResponse} /> */}
          </ol>
        ))
      })}
    </>
  )
}
