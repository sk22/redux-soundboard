import React from 'react'

export default ({onClick}) => (
  <svg onClick={onClick} height="1rem" viewBox="0 0 18 12">
    <style>{`
      rect {
        fill: white;
      }
    `}</style>
    <rect width="18" height="2" />
    <rect y="5" width="18" height="2" />
    <rect y="10" width="18" height="2" />
  </svg>
)
