"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

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

const initialAIMsg: ChatBubble = {
    text: 'Hi, I am Arif. This chat bot is used to simulate interview session with me.',
    AI: true
}

const renderBubble = (msg: ChatBubble) => {
    const styleAI = 'bg-green-200 px-4 py-2 rounded-tl-lg rounded-br-lg shadow-lg'
    const styleHuman = 'bg-blue-200 px-4 py-2 rounded-tr-lg rounded-bl-lg shadow-lg'
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
    const [showAbout, setShowAbout] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [question, setQuestion] = useState<ChatBubble>(initialQuestion)
    const [messages, setMessages] = useState<ChatBubble[]>([initialAIMsg])
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
        }).catch(e => {
            const errorMsg = `Sorry, there has been an error, Please try again. ${e}`
            const reply =  { text:errorMsg, AI: true }
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
            <div>typing</div>
            <div className="bg-blue-600 w-2 h-2 rounded-full animate-bounce circle-1"></div>
            <div className="bg-blue-600 w-2 h-2 rounded-full animate-bounce circle-2"></div>
            <div className="bg-blue-600 w-2 h-2 rounded-full animate-bounce circle-3"></div>
        </div>
    )

    const About = () => (
        <div className={`${showAbout ?  "block" : "hidden"} flex flex-col bg-stone-200 border-2 px-4 py-4 ml-4 text-sm gap-2`}>
            <div className="">
                This bot was created to emulate interview session with me.
            </div>
            <div className="">
                DO NOTE that I have taken pre-caution to prevent the bot from hallucinating. However, I'm not 100% certain about that. Please check the <Link className="text-blue-500 underline" href="/">resume page</Link> for the right information about me. 
            </div>
            <div className="">
                This bot was created with the open-source model: google/flan-T5-xxl. It is an open-source transformer-based architecture that uses a text-to-text approach for NLP released by Google. 
                This application is served with NextJS with python backend, served with AWS Lambda. 
            </div>
            
        </div>
    )

    return (
        <div className="flex max-w-screen-lg h-screen mx-auto flex-col bg-stone-100"> 
            {/* Header */}
            <div className="flex w-full bg-stone-200 justify-between">
                <div>
                    <button className="text-blue-800 py-2 px-4 font-medium text-sm hover:underline"
                            onClick={() => setShowAbout(!showAbout)}
                    >
                        {showAbout ? "Hide" : "About this bot"}
                    </button>
                </div>
                <Link href="/">
                    <button className="text-gray-800 py-2 px-4 font-medium text-sm underline hover:text-blue-800">
                        back to main
                    </button>
                </Link>
            </div>
            <About />

            <div className="flex flex-col flex-1 justify-between bg-stone-100">
                {/* Chat history */}
                <div className="flex flex-col gap-4 py-4 px-6 overflow-y-auto">
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
                        <button className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-700"
                                onClick={handleClick}>
                                send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
