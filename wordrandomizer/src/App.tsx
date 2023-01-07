import { GenerateButton } from './components/GenerateButton'
import { Word } from './components/Word'
import { YesNoButton } from './components/YesNoButton'
import { useWordGenerationQuery } from './hooks/useWordGenerationQuery'

export const App = () => {
  const { refetch: getWord, data: word } = useWordGenerationQuery()

  const handleButtonClick = () => {
    getWord()
  }

  return (
    <>
      <div
        style={{
          margin: '0 auto',
          width: '100%',
          height: 'calc(100% - 60px)',
          overflowY: 'auto',
          textAlign: 'center',
          color: 'lightGray',
        }}
      >
        <div className="innerHorizontal">
          <Word />
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          bottom: '0',
          left: '50%',
          transform: 'translate(-50%, 0)',
          paddingTop: '30px',
          paddingBottom: '15px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          background: 'black',
          width: '100%',
        }}
      >
        {word ? <YesNoButton onClick={handleButtonClick} /> : <GenerateButton onClick={handleButtonClick} />}
      </div>
    </>
  )
}
