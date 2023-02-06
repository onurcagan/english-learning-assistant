import { useState } from 'react'
import { Counter } from '../src/components/Counter'
import { GenerateButton } from '../src/components/GenerateButton'
import { Word } from '../src/components/Word'
import { YesNoButton } from '../src/components/YesNoButton'
import { useWordGenerationQuery } from '../src/hooks/useWordGenerationQuery'

export default function Index() {
  const { refetch: getWord, data: word } = useWordGenerationQuery()
  const [streakCount, setStreakCount] = useState(0)
  const handleButtonClick = () => {
    getWord()
  }

  return (
    <>
      {word && <Counter count={streakCount} />}
      <div
        className="wordContainer"
        style={{
          margin: '0 auto',
          width: '100%',
          height: 'calc(100vh - 210px)',
          overflowY: 'auto',
          textAlign: 'center',
          color: 'lightGray',
        }}
      >
        <div className="wordContainerInner">
          <Word />
        </div>
      </div>

      {/* Yes No / Bottom Buttons Div */}
      <div
        style={{
          position: 'fixed',
          bottom: '0',
          left: '50%',
          transform: 'translate(-50%, 0)',
          paddingTop: '10px',
          paddingBottom: '15px',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          background: 'black',
          width: '100%',
          height: '90px',
        }}
      >
        {word ? (
          <YesNoButton onClick={handleButtonClick} setStreak={setStreakCount} />
        ) : (
          <GenerateButton onClick={handleButtonClick} />
        )}
      </div>
    </>
  )
}
