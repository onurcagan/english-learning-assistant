import { Definition } from '../types/api'
import { capitalize } from '../utils/formatting'

export const Example = ({ singleDefinition }: { singleDefinition: Definition }) => {
  if (singleDefinition.example === undefined) return <></>

  return (
    <>
      {singleDefinition.example === '' ? (
        <></>
      ) : (
        <p>
          <span style={{ color: 'burlywood' }}>Example: </span> {capitalize(singleDefinition.example)}
        </p>
      )}
    </>
  )
}
