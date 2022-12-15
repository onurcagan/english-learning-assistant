import { Skeleton } from '@mui/material'
import { useDefinitionQuery } from '../hooks/useDefinitionQuery'
import { RootObject } from '../types/dictionaryApi'
import { capitalizeAndFormat } from '../utils/formatting'
import { Example } from './Example'
import { Pronunciation } from './Pronunciation'
import { Synonyms } from './Synonyms'

export const Definitions = ({ word }: { word: string }) => {
  const { isFetching: isDefinitionFetching, error, data: dictResponse } = useDefinitionQuery(word)

  if (error && dictResponse === undefined) {
    if (error.response?.status === 404) return <p>This word doesn't exist in the dictionary.</p>

    return <p>An error occurred: {error.message}.</p>
  }

  /**
   * @description Checks whether there is an exact match with the word and the definition for the word received from the dictionary.
   * @returns true if there is a match, false otherwise.
   */
  const isExactMatchFound = (string: string) => {
    const regex = new RegExp('^' + word.toLowerCase() + '?:?\\d?$', 'g') // Regex that matches word, words, word:1, word:2, words:1, words:2 and so on.

    return regex.test(string)
  }

  const definitionsArray = dictResponse?.flatMap((definitions) =>
    isExactMatchFound(definitions?.meta?.id) ? definitions?.shortdef : [],
  )

  if (isDefinitionFetching)
    return (
      <>
        <h3>Definitions</h3>{' '}
        {/* Not checking definitionsArraylength while fetching as its always 0. And more often that not you get multiple Definitions so I default to Definitions. */}
        <div style={{ width: '50%', margin: '0 auto' }}>
          <Skeleton variant="rounded" animation="pulse" sx={{ bgcolor: 'grey.400' }}></Skeleton>
          <hr />
          <Skeleton variant="rounded" animation="pulse" sx={{ bgcolor: 'grey.400' }}></Skeleton>
          <hr />
          <Skeleton variant="rounded" animation="pulse" sx={{ bgcolor: 'grey.400' }}></Skeleton>
        </div>
      </>
    )

  return (
    <>
      {(dictResponse?.[0]?.hwi?.prs?.[0]?.sound?.audio !== undefined || !isExactMatchFound(dictResponse?.[0]?.meta?.id)) && (
        <Pronunciation dictResponse={dictResponse} />
      )}

      <Synonyms word={word} />

      <h3>Definition{definitionsArray?.length > 1 && 's'}</h3>

      {dictResponse?.map((definitions: RootObject, index: number) => {
        const metaId = definitions?.meta?.id
        const shortDefs = definitions?.shortdef

        // For cases where the word exists in the dictionary but has no shortDefinition
        if (isExactMatchFound(metaId) && definitionsArray === undefined && index === 0) {
          return <div key={index}>This word doesn't exist in the dictionary.</div>
        }

        return (
          <ol key={index}>
            {shortDefs?.map((shortDefinition, innerIndex: number) => {
              // TODO; early returns here instead of ternary ifs
              return (
                <li key={innerIndex}>
                  {(index === 0 && innerIndex === 0) || !isExactMatchFound(metaId) ? <></> : <hr />}

                  <div>
                    {isExactMatchFound(metaId) ? (
                      shortDefinition ? (
                        capitalizeAndFormat(shortDefinition)
                      ) : (
                        <>This word doesn't exist in the dictionary.</>
                      )
                    ) : (
                      index === 0 && innerIndex === 0 && <>This word doesn't exist in the dictionary.</>
                    )}
                  </div>
                  {isExactMatchFound(metaId) && <Example definition={definitions} exampleIndex={innerIndex} />}
                </li>
              )
            })}
          </ol>
        )
      })}
    </>
  )
}
