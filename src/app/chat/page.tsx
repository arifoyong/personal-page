"use client"
import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

type ChatBubble = {
    text: string,
    AI: boolean
  }

type ReplyFromAPI = {
    response: string;
    error: string
}

const initialQuestion: ChatBubble = {
    text: '',
    AI: true
}

const renderBubble = (msg: ChatBubble) => {
    const styleAI = 'bg-green-300 px-4 py-2 rounded-tl-lg rounded-br-lg shadow-lg'
    const styleHuman = 'bg-red-200 px-4 py-2 rounded-tr-lg rounded-bl-lg shadow-lg'
    return (
      <div 
        className={msg.AI ?  "flex justify-end" : "flex justify-start"}>
        <div className={msg.AI ? styleAI : styleHuman}>
          {msg.text}
        </div>
      </div>
    )
  }

const API_URL = process.env.NEXT_PUBLIC_API_URL || "API not found"

export default function Home() {
    const bottomEl = useRef<null | HTMLDivElement>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [question, setQuestion] = useState<ChatBubble>(initialQuestion)
    const [messages, setMessages] = useState<ChatBubble[]>([])
    const scrollToBottom = () => bottomEl?.current?.scrollIntoView({ behavior: 'smooth' })
    
    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleChange = (e:React. ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setQuestion({   text: e.target.value,
                        AI: false
                    })
    }   

    const sendQuestion = () => {
        setIsLoading(true)
        if (question) {
            setMessages(prevChats => [...prevChats, question])
        }

        fetch(`${API_URL}`, {
            method: 'POST',
            headers: {  'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
            body: JSON.stringify({question: question.text})
        })
        .then(res => res.json())
        .then((data: ReplyFromAPI) => {
            const reply =  { text:data.response, AI: true }
            setMessages(prevChats => [...prevChats, reply])
            setIsLoading(false)
        })

        setQuestion(initialQuestion)
    }

    const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        sendQuestion()
    }

    const handleKeyDown =  (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            sendQuestion()
        }
    }

    const LoadingSign = () => (
        <div className="flex gap-2 p-2 items-center">
            <div>Loading</div>
            <div className="bg-blue-600 w-2 h-2 rounded-full animate-bounce blue-circle"></div>
            <div className="bg-blue-600 w-2 h-2 rounded-full animate-bounce green-circle"></div>
            <div className="bg-blue-600 w-2 h-2 rounded-full animate-bounce red-circle"></div>
        </div>
    )

    return (
        <div className="flex max-w-screen-xl h-screen mx-auto flex-col justify-between bg-blue-100">
            {/* Chat history */}
            <div className="flex flex-col gap-4 py-4 px-6 mt-6 overflow-y-auto">
                {messages.map((msg, i) => {
                    return (
                        <div key={i}>
                            { renderBubble(msg) }
                        </div>
                    )
                })}
                <div className="" ref={bottomEl}></div>
            </div>
            
            {/* Input box */}
            <div className="flex flex-col p-4">
                { isLoading && <LoadingSign /> }
                <div className="flex gap-2">
                    <input className="w-full px-4 py-2 rounded-lg" 
                        type="text"
                        value={question?.text}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder="input your question here"/>
                    <button className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-lg"
                            onClick={handleClick}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
            </div>
        </div>
    )
}
