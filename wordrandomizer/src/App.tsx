import axios from 'axios'
import Button from '@mui/material/Button'
import { Word } from './components/Word'
import { useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const App = () => {
  const css = `
  @font-face {
    font-family: 'uni_sansheavy_caps';
    src: url('unisansheavy-webfont.woff2') format('woff2'),
         url('unisansheavy-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
  html {background-color: black;
  }
  
  h3 {
    margin-top: 30px;
    text-decoration: underline;
    color: BurlyWood;
  }

  li {
    margin-top: 10px;
    margin-bottom: -5px;
  }

  ol {
    list-style-type: none;
    padding-left: 0;
  }

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
    margin-top: 15px;
    margin-bottom: 30px;
  }`

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
      <div className="content-div">
        <style>{css}</style>
        <Word word={word} />
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
      <ReactQueryDevtools />
    </>
  )
}
