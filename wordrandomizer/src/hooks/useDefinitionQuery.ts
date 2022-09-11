import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

export const useDefinitionQuery = (word: string) => {
  const apiKey = process.env.REACT_APP_DICT_API_KEY

  async function fetchDictResponse() {
    const dictionaryRequestUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=' + apiKey

    const response = await axios.request({
      method: 'GET',
      url: dictionaryRequestUrl,
    })
    return response.data
  }

  return useQuery<any, AxiosError>(['dictResponse', word], fetchDictResponse, {
    refetchOnWindowFocus: false,
    enabled: !!word,
    staleTime: Infinity,
  })
}
