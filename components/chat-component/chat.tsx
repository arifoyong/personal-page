'use client';

import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';

import AboutMe from './about-me';
import { Disclaimer } from './disclaimer';
import { MsgBubble } from './message-bubble';
import LoadingDots from '../ui/loading_dots';

type TMessage = {
  role: 'system' | 'user' | 'assistant',
  content: string
}

export default function Chat({
  conversationId
}: {
  conversationId: string
}) {
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<TMessage[]>([])
  const bottomEl = useRef<null | HTMLDivElement>(null)
  const scrollToBottom = () => bottomEl?.current?.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newMsg: TMessage[] = [
      {
        role: 'user',
        content: input
      },
      {
        role: 'assistant',
        content: ''
      }
    ]
    setMessages(prevMessages => [...prevMessages, ...newMsg])
    setInput('')

    try {
      setLoading(true)

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input, conversationId }),
      })
      if (!res.body) {
        return
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {

        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        const chunk = decoder.decode(value, { stream: true });
        setMessages(prevMessages => {
          const lastMsg = prevMessages[prevMessages.length - 1]
          const newMsgs: TMessage[] = [...prevMessages.slice(0, prevMessages.length - 1),
          {
            role: 'assistant',
            content: lastMsg.content + chunk
          }
          ];
          return newMsgs
        })
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col justify-between py-4 h-[calc(100vh-100px)] gap-2'>
      {messages.length > 0 ? (
        <div className="flex flex-col gap-4 overflow-y-auto">
          {messages.map((message, i) => (
            <MsgBubble key={i}
              text={message.content}
              role={message.role} />
          ))}

          <div className="" ref={bottomEl}></div>
        </div>
      ) : (
        <AboutMe />
      )}

      <div className='relative'>
        <div className='absolute -top-4 left-0'>
          {loading && <LoadingDots />}
        </div>
        <form onSubmit={sendMessage} >
          <Input className='px-4 pt-4 pb-8 rounded-lg'
            value={input}
            disabled={loading}
            placeholder="Ask about me . . ."
            onChange={e => setInput(e.currentTarget.value)}
          />
        </form>
        <Disclaimer />
      </div>
      {/* <button onClick={async () => {
        const res = await fetch('/api/push', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const js = await res.json()
        console.log(res)
      }}>
        test
      </button> */}
    </div>
  );
}