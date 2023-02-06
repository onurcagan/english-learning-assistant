import { useQuery } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { RootObject as DictResponse } from '../types/dictionaryApi'

export const useDefinitionQuery = (word: string) => {
  const apiKey = process.env.NEXT_PUBLIC_DICT_API_KEY

  async function fetchDictResponse(): Promise<DictResponse[]> {
    const dictionaryRequestUrl = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/' + word + '?key=' + apiKey

    const response = await axios.request({
      method: 'GET',
      url: dictionaryRequestUrl,
    })
    return response.data
  }

  return useQuery<DictResponse[], AxiosError>(['dictResponse', word], fetchDictResponse, {
    refetchOnWindowFocus: false,
    enabled: !!word,
    staleTime: Infinity,
  })
}
