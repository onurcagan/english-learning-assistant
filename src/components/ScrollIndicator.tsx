import React from 'react'
import { FaArrowDown } from 'react-icons/fa'

export const ScrollIndicator = () => {
  return (
    <div>
      <FaArrowDown
        color="white"
        style={{ animation: 'fade-out-down 1s infinite', marginLeft: '30', marginRight: '30' }}
      ></FaArrowDown>
    </div>
  )
}
