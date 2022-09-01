import { capitalize } from '../utils/formatting'
import { Definition } from './Definition'

export const Word = ({ word }: any) => {
  if (word === undefined) return <p>Click The Generate Key!</p> // To show something when the site first loads without any words generated.

  const wordCapitalized = capitalize(word)

  return (
    <>
      <h3>Word</h3>
      <p>{wordCapitalized}</p>
      <h3>Definition(s)</h3>
      <Definition word={word} />
    </>
  )
}
