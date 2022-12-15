import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

export const useWordGenerationQuery = () => {
  const fetchWord = async () => {
    //const wordGeneratorUrl = 'https://tools.atatus.com/tools/random-word-generator'
    const wordGeneratorUrl = 'https://random-words-api.vercel.app/word/noun'
    // const body = { wordLength: '1' }

    // const response = await axios.post(wordGeneratorUrl, body)
    const response = await axios.get(wordGeneratorUrl)
    return response.data[0].word
  }

  return useQuery<any, AxiosError>(['word'], fetchWord, {
    refetchOnWindowFocus: false,
    enabled: false,
  })
}
