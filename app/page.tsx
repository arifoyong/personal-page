import Chat from '@/components/chat-component/chat'
import { generateConvId } from '@/app/action/conv.action'
import { Suspense } from "react";

export default async function Home() {
  const conv = await generateConvId()

  return (
    <main className="flex flex-col container w-3/4 mx-auto max-h-screen">
      <p>test {process.env.OPENAI_API_KEY}</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Chat conversationId={conv.conversationId} />
      </Suspense>
    </main>
  );
}
