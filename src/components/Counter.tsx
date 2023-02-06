import { AiFillFire } from 'react-icons/ai'
import React from 'react'

export const Counter = ({ count }: { count: number }) => {
  const counterColor = (): string => {
    switch (true) {
      case count > 10:
        return 'red'
      case count > 5:
        return '#F55301'
      case count > 2:
        return 'orange'
      default:
        return 'white'
    }
  }

  return (
    <div
      style={{
        color: 'white',
        position: 'sticky',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '1',
        textAlign: 'center',
        paddingBottom: '10px',
      }}
    >
      {' '}
      <h3>Streak</h3>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AiFillFire
          size={'1.6rem'}
          style={{
            color: '#F55301',
            marginRight: '10px',
            transition: 'opacity 1s ease',
            opacity: `${count > 9 ? 1 : 0}`,
            animation: 'wiggle .15s infinite',
          }}
        />
        <div style={{ textAlign: 'center', fontSize: '1.5rem', color: counterColor() }}>{count}</div>
        <AiFillFire
          size={'1.6rem'}
          style={{
            color: '#F55301',
            marginLeft: '10px',
            transition: 'opacity 1s ease',
            opacity: `${count > 9 ? 1 : 0}`,
            animation: 'wiggle .15s infinite',
          }}
        />
      </div>
    </div>
  )
}
