import Chat from '@/components/chat-component/chat'
import { generateConvId } from '@/app/action/conv.action'
import { Suspense } from "react";
import { connection } from 'next/server'

export default async function Home() {
  await connection()
  const conv = await generateConvId()

  return (
    <main className="flex flex-col container w-3/4 mx-auto max-h-screen">
      <Suspense fallback={<p>Loading...</p>}>
        <Chat conversationId={conv.conversationId} />
      </Suspense>
    </main>
  );
}
