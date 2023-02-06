import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded'
import { useRef } from 'react'
import { RootObject } from '../types/dictionaryApi'

export const Pronunciation = ({ dictResponse }: { dictResponse: RootObject[] }) => {
  const languageCode = 'en'
  const countryCode = 'us'
  const soundFormat = 'mp3'
  const audioName = dictResponse?.[0]?.hwi?.prs?.[0]?.sound?.audio
  let subDirectory = ''

  const audioRef = useRef<HTMLAudioElement>(null)
  const playAudio = () => {
    if (audioRef.current === null) return
    audioRef.current.play()
  }

  /**
   * Sets subDirectory variable.
   */
  const setSubDirectory = () => {
    if (audioName.substring(0, 3) === 'bix') subDirectory = 'bix'
    else if (audioName.substring(0, 2) === 'gg') subDirectory = 'gg'
    else if (audioName.substring(0, 1) === '_') subDirectory = 'number'
    else subDirectory = audioName.substring(0, 1)
    return subDirectory
  }
  const pronunciationUrl = `https://media.merriam-webster.com/audio/prons/${languageCode}/${countryCode}/${soundFormat}/${setSubDirectory()}/${audioName}.${soundFormat}`

  return (
    <>
      <audio src={pronunciationUrl} ref={audioRef} />
      <PlayCircleRoundedIcon fontSize="inherit" sx={{ fontSize: '2.7rem' }} onClick={() => playAudio()} />
    </>
  )
}
