import React from 'react'

const Videos = () => {
  return (
    <div className="h-full w-full">
      <video className="h-full w-full object-cover" autoPlay loop muted>
        <source src="/videos/mp4.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Videos
