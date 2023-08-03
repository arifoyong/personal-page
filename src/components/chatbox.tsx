
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

type ChatBubble = {
  text: string,
  AI: boolean
}

type BotReply = {
  reply: string,
  elapsed: string
}

const ChatBox =  ({ setShowWidget } : { setShowWidget: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [inputQuestion, setInputQuestion] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [chats, setChats] = useState<ChatBubble[]>([])

  const submitQuestion =  (e: React.MouseEvent<HTMLElement>) => {
    setIsLoading(true)
    const question = { text:inputQuestion, AI: false }
    setChats(prevChats => [...prevChats, question])

    fetch(`http://localhost:8000/chat/${inputQuestion}`)
      .then(res => res.json())
      .then((data: BotReply) => {
          const reply =  { text:data.reply, AI: true }
          setChats(prevChats => [...prevChats, reply])
          setIsLoading(false)
          setInputQuestion('')
      })
  }

  const handleKeyDown =  (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsLoading(true)
      const question = { text:inputQuestion, AI: false }
      setChats(prevChats => [...prevChats, question])

      fetch(`http://localhost:8000/chat/${inputQuestion}`)
        .then(res => res.json())
        .then((data: BotReply) => {
            const reply =  { text:data.reply, AI: true }
            setChats(prevChats => [...prevChats, reply])
            setIsLoading(false)
            setInputQuestion('')
        })
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

  const renderBubble = (msg: ChatBubble) => {
    const styleAI = 'bg-green-400 px-2 py-1 text-sm'
    const styleHuman = 'bg-gray-200 px-2 py-1 text-sm'
    return (
      <div 
        className={msg.AI ?  "flex justify-end" : "flex justify-start"}>
        <div className={msg.AI ? styleAI : styleHuman}>
          {msg.text}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 h-4/5 justify-between border shadow-md bg-white">   
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b p-2">
          <div>
            Arif Oyong
          </div>
          <button className="cursor-pointer"
            onClick={() => setShowWidget(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* chat messages */}
        <div className="flex flex-1 flex-col p-2 gap-2">
          <div className="flex flex-col overflow-y-auto bg-blue-100">

          { chats.map( (chat,i) =>  (
            <div key={i}>
                { renderBubble(chat) }
              </div>
            )
            ) }
          </div>
        </div>

        {/* input  */}
        { isLoading && <LoadingSign /> }
        <div className="flex p-2">
          <input className="flex-1 px-2 py-1 rounded-l-lg "
            type="text"
            placeholder="input your question here" 
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            />
          <button className="px-2 rounded-r-lg"
            onClick={submitQuestion}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>

    </div>
  )
}

export default ChatBox