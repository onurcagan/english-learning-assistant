import axios from 'axios'

export const fetchWord = async () => {
  const wordGeneratorUrl = 'https://gfdib-cors-anywhere.herokuapp.com/https://tools.atatus.com/tools/random-word-generator'
  const body = { wordLength: '1' }

  const response = await axios.post(wordGeneratorUrl, body)

  return response.data[0]
}
