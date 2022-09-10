import { useDefinitionQuery } from '../hooks/useDefinitionQuery'
import { capitalizeAndFormat } from '../utils/formatting'
import { Definitions } from './Definition'
import { Loading } from './Loading'
import { Synonyms } from './Synonyms'

export const Word = ({ word }: { word: string }) => {
  const { isLoading: isDefinitionLoading, error, data: dictResponse } = useDefinitionQuery(word)

  if (word === undefined)
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <h2>Click The Generate Button!</h2> {/*To show something when the site first loads without any words generated.*/}
          </div>
        </div>
      </div>
    )

  const wordCapitalized = capitalizeAndFormat(word)?.substring(0, word.length) // Substring is used to get rid of the dot at the end.

  return (
    <>
      <>
        <h3>Word</h3>
        <p>{wordCapitalized}</p>
        <Synonyms word={word} dictResponse={dictResponse} />
        <Definitions word={word} isLoading={isDefinitionLoading} error={error} dictResponse={dictResponse} />
      </>
    </>
  )
}
