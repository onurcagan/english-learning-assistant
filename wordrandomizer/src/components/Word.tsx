export const Word = (props: any) => {
  if (props.wordsToShow.length === 0) return <></>

  const [word, definition, pronunciation]: Array<string> = Object.values(props.wordsToShow)

  return (
    <>
      <h3>Word</h3>
      <p>{word}</p>
      <h3>Definition</h3>
      <p>{definition}</p>
      <h3>Pronunciation</h3>
      <p>{pronunciation}</p>
    </>
  )
}
