import { capitalizeAndFormat } from '../utils/formatting'

export const Example = ({ definition, exampleIndex }) => {
  const example = definition?.def?.[0]?.sseq?.[exampleIndex]?.[0]?.[1]?.dt?.[1]?.[1]?.[0]?.t

  if (example === undefined || example === '') return <></>

  const getRidOfCurlyBrackets = (string: string) => {
    const regex = new RegExp('{[^}]*}', 'g')
    const exampleWithNoCurlyBrackets = string.replace(regex, '')
    return exampleWithNoCurlyBrackets
  }

  return (
    <>
      <p>
        <span style={{ color: 'burlywood' }}>Example: </span> {capitalizeAndFormat(getRidOfCurlyBrackets(example))}
      </p>
    </>
  )
}
