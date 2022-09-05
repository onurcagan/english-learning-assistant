import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

export const useDefinitionQuery = (word: string) => {
  async function fetchDictResponse() {
    const dictionaryRequestUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word

    const response = await axios.request({
      method: 'GET',
      url: dictionaryRequestUrl,
    })

    return response.data[0]
  }

  return useQuery<any, AxiosError>(['dictResponse', word], fetchDictResponse, {
    refetchOnWindowFocus: false,
    enabled: !!word,
  })
}
