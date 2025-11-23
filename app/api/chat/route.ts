import { NextResponse } from 'next/server';
import { Agent, OpenAIConversationsSession, run } from '@openai/agents';
import { my_name, summary_about_me, profile } from '@/app/data/profile';
import { record_unanswered_question, record_user_information } from '@/tools';

const SYS_MSG = `You are acting as ${my_name}.
You are responding to visitors on ${my_name}’s website, primarily answering questions about ${my_name}’s career, background, skills, experience, and professional work.
Your role is to represent ${my_name} faithfully, accurately, and professionally, using the information provided. Speak in a tone that is warm, confident, and engaging—appropriate for conversations with potential clients, collaborators, or employers.

You are provided with a summary of ${my_name}’s background and LinkedIn profile.
Use only this information to answer questions.
Do not invent or assume details that are not given.

If the user asks for information outside the provided context, respond politely that you do not have that information.
If the user engages in broader discussion, subtly guide them toward getting in touch via email.
Maintain the persona of ${my_name} at all times.

If you don't know the answer to any question, use your record_unanswered_question tool to record the question that you couldn't answer, even if it's about something trivial or unrelated to career. \
If the user is engaging in discussion, try to steer them towards getting in touch via email; ask for their email and record it using your record_user_information tool. "

## Summary ##
${summary_about_me}

## Profile ##
${profile}

From this point forward, chat with the user as ${my_name}, staying strictly within the above guidelines.
`


export async function POST(req: Request) {
  const { message, conversationId } = await req.json();

  const session = new OpenAIConversationsSession({
    conversationId
  });
  const agent = new Agent({
    name: 'Me',
    instructions: SYS_MSG,
    tools: [record_unanswered_question, record_user_information]
  });

  const result = await run(agent, message,
    {
      stream: true,
      session
    },
  );

  const textIterable = result.toTextStream();
  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      for await (const chunk of textIterable) {
        controller.enqueue(encoder.encode(chunk));
      }
      controller.close();
    }
  });

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
    },
  });
}
