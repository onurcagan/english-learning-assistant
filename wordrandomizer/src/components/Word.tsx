import { Skeleton } from '@mui/material'
import { useWordGenerationQuery } from '../hooks/useWordGenerationQuery'
import { capitalizeAndFormat } from '../utils/formatting'
import { Definitions } from './Definition'

export const Word = () => {
  const { isFetching: isWordFetching, data: word } = useWordGenerationQuery()

  if (word === undefined && !isWordFetching)
    return (
      <div className="outer">
        <div className="middle">
          <div className="inner">
            <h2>Click The Generate Button!</h2> {/*To show something when the site first loads without any words generated.*/}
          </div>
        </div>
      </div>
    )

  if (isWordFetching)
    return (
      <>
        <h3>Word</h3>
        <div style={{ width: '15%', margin: '0 auto' }}>
          <Skeleton variant="rounded" animation="pulse" sx={{ bgcolor: 'grey.400' }}></Skeleton>
        </div>
      </>
    )

  if (word === undefined) return <p>Loading</p>

  return (
    <>
      <h3>Word</h3>
      <p>{word}</p>
      <Definitions word={word} />
    </>
  )
}
