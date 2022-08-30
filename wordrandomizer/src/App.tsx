import { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import { Word } from './components/Word'

export const App = () => {
  const [wordToShow, setNewWordToShow] = useState([])

  const css = `
  html {background-color: black;}

  .content-div {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
  }
  .button {
    margin-top: 20px;
  }
  h3 {
    text-decoration: underline;
  }`

  const handleButtonClick = () => {
    axios.get('https://random-words-api.vercel.app/word').then((response) => {
      setNewWordToShow(response.data[0])
    })
  }

  return (
    <>
      <div className="content-div">
        <style>{css}</style>
        <Word wordsToShow={wordToShow} />
        <Button
          className="button"
          variant="contained"
          size="medium"
          onClick={handleButtonClick}
          sx={{
            color: 'black',
            backgroundColor: 'lightgray',
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
