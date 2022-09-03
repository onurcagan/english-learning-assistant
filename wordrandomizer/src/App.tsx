import axios from 'axios'
import Button from '@mui/material/Button'
import { Word } from './components/Word'
import { useQuery } from '@tanstack/react-query'

export const App = () => {
  const wordGeneratorUrl = 'https://tools.atatus.com/tools/random-word-generator'
  const body = { wordLength: '1' }

  async function fetchWord() {
    const response = await axios.post(wordGeneratorUrl, body)
    return response.data[0]
  }

  const { data: word, refetch: getWord } = useQuery(['word'], fetchWord, {
    refetchOnWindowFocus: false,
    enabled: false,
  })

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
          color: 'white',
        }}
      >
        <Word word={word} />
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
