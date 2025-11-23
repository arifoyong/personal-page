export const MsgBubble = ({
  role,
  text
}: {
  role: string,
  text: string
}) => {
  if (role === 'system') return
  if (text === '') return

  return (
    <div className={`${role === 'user' ? "justify-end" : "justify-start"} flex whitespace-pre-wrap w-full`}>
      <div className={`${role === 'user' ? "bg-blue-100" : "bg-green-100"} p-2 rounded-md flex`}>
        {text}
      </div>
    </div>
  )
}