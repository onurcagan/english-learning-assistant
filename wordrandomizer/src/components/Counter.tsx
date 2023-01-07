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
      <div style={{ textAlign: 'center', fontSize: '1.5rem', color: counterColor() }}>{count}</div>
    </div>
  )
}
