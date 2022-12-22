import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

export const useWordGenerationQuery = () => {
  const fetchWord = async () => {
    const res = await axios.get('https://onurcagan.netlify.app/api/word')
    return res.data
  }

  return useQuery<any, AxiosError>(['word'], fetchWord, {
    refetchOnWindowFocus: false,
    enabled: false,
  })
}
