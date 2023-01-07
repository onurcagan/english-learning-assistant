import { Button } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'

export const YesNoButton = ({ onClick, setStreak }: { onClick: () => void; setStreak: Dispatch<SetStateAction<number>> }) => {
  const addToStreak = () => {
    setStreak((previous) => previous + 1)
  }

  const resetStreak = () => {
    setStreak(0)
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          color: 'lightgray',
          width: '200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <h3 style={{ marginBottom: '20px', fontSize: '1rem', marginLeft: 'auto', marginRight: 'auto' }}>Knew this word?</h3>
        <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center' }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              onClick()
              resetStreak()
            }}
            sx={{
              color: 'white',
              backgroundColor: 'darkred',
              fontFamily: 'UniSansHeavy',
              ':hover': {
                bgcolor: 'red',
              },
            }}
          >
            No :(
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              onClick()
              addToStreak()
            }}
            sx={{
              color: 'white',
              backgroundColor: 'darkgreen',
              fontFamily: 'UniSansHeavy',
              ':hover': {
                bgcolor: 'green',
              },
            }}
          >
            Yes!
          </Button>
        </div>
      </div>
    </>
  )
}
