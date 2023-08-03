"use client"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import ChatBox from './chatbox'

const ChatWidget = () => {
  const [showWidget, setShowWidget] = useState(false)

  const ChatbotButton = () => {
    return (
      <button className="flex gap-4 items-center" 
          onClick={() => setShowWidget(true)}>
          <div className="bg-gray-100 shadow-lg p-4">
            Try Virtual Interview . . .
          </div>
          <div className="text-3xl text-red-600" >
            <FontAwesomeIcon icon={faComment} />
          </div>
        </button>
    )
  }
  return (
    <div className="fixed bottom-0 right-0 h-screen w-screen flex justify-end items-end p-6">
      { showWidget ? <ChatBox setShowWidget={setShowWidget}/> : <ChatbotButton />}
    </div>
  )
}

export default ChatWidget