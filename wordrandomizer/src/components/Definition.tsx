import { useDefinitionQuery } from '../hooks/useDefinitionQuery'
import { Meaning } from '../types/api'
import { Example } from './Example'

export const Definition = ({ word }: { word: string }) => {
  const { isLoading, error, data: dictResponse } = useDefinitionQuery(word)

  if (word === undefined || word === 'undefined') return <></>

  if (isLoading) return <p>Loading...</p>

  if (error) {
    if (error.response?.status === 404) return <p>This word doesn't exist in the dictionary.</p>

    return <p>An error ocured, here's the error message: {error.message}.</p>
  }

  console.log(dictResponse)

  return (
    <>
      {dictResponse?.meanings.map((def: Meaning, i: number) => {
        return (
          <div key={i}>
            {def.definitions?.map((singleDefinition, index: number) => {
              return (
                <ol key={index}>
                  {index === 0 && i === 0 ? <></> : <hr className="hr" />}
                  <li key={index}>{singleDefinition.definition}</li>
                  <Example singleDefinition={singleDefinition} />
                </ol>
              )
            })}
          </div>
        )
      })}
    </>
  )
}
