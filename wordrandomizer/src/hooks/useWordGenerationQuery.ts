import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

export const useWordGenerationQuery = () => {
  const fetchWord = async () => {
    const wordGeneratorUrl = 'https://gfdib-cors-anywhere.herokuapp.com/https://tools.atatus.com/tools/random-word-generator'
    const body = { wordLength: '1' }

    const response = await axios.post(wordGeneratorUrl, body)

    return response.data[0]
  }

  return useQuery<any, AxiosError>(['word'], fetchWord, {
    refetchOnWindowFocus: false,
    enabled: false,
  })
}
