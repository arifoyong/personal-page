import React from 'react'

const LoadingDots = ({
  size = '2'
}: {
  size?: string
}) => {
  return (
    <div className='flex space-x-2 justify-start items-center dark:invert'>
      <span className='sr-only'>Loading...</span>
      <div className={`w-${size} h-${size} bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.45s]`}></div>
      <div className={`w-${size} h-${size} bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]`}></div>
      <div className={`w-${size} h-${size} bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]`}></div>
      <div className={`w-${size} h-${size} bg-muted-foreground rounded-full animate-bounce`}></div>
    </div>
  )
}

export default LoadingDots