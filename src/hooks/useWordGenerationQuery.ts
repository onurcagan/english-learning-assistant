import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

export const useWordGenerationQuery = () => {
  const fetchWord = async (): Promise<string> => {
      const res = await axios.get('https://random-word-generator.onurcagann.workers.dev/')
      console.log('res.data', res.data)
    return res.data
  }

  return useQuery<string, AxiosError>(['word'], fetchWord, {
    refetchOnWindowFocus: false,
    enabled: false,
  })
}
