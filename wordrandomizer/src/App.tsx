import Button from '@mui/material/Button'
import { Word } from './components/Word'
import { useWordGenerationQuery } from './hooks/useWordGenerationQuery'

export const App = () => {
  const { refetch: getWord } = useWordGenerationQuery()

  const handleButtonClick = () => {
    getWord()
  }

  return (
    <>
      <div
        style={{
          margin: '0 auto',
          width: '100%',
          height: 'calc(100% - 60px)',
          overflowY: 'auto',
          textAlign: 'center',
          color: 'lightGray',
        }}
      >
        <div className="innerHorizontal">
          <Word />
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: '0',
          left: '50%',
          transform: 'translate(-50%, 0)',
          paddingTop: '50px',
          paddingBottom: '15px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <Button
          variant="contained"
          size="medium"
          onClick={handleButtonClick}
          sx={{
            color: 'black',
            backgroundColor: 'lightgray',
            fontFamily: 'UniSansHeavy',
            ':hover': {
              bgcolor: 'gray',
            },
          }}
        >
          Generate
        </Button>
      </div>
    </>
  )
}
