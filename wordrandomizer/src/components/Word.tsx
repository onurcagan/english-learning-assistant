import { capitalize } from '../utils/formatting'
import { Definition } from './Definition'

export const Word = ({ word }: { word: string }) => {
  if (word === undefined)
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <h2>Click The Generate Button!</h2> {/*To show something when the site first loads without any words generated.*/}
            <p></p>
          </div>
        </div>
      </div>
    )

  const wordCapitalized = capitalize(word)

  return (
    <>
      <div className="innerHorizontal">
        <h3>Word</h3>
        <p>{wordCapitalized}</p>
        <h3>Definition(s)</h3>
        <Definition word={word} />
      </div>
    </>
  )
}
