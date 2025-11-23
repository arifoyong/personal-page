import { tool } from '@openai/agents';
import { z } from 'zod';

const pushover_user = process.env.PUSHOVER_USER || ''
const pushover_token = process.env.PUSHOVER_TOKEN || ''
const pushover_url = "https://api.pushover.net/1/messages.json"

const pushMessage = async ({
  message
}: {
  message: string
}) => {
  const payload = {
    "user": pushover_user,
    "token": pushover_token,
    "message": message
  }

  await fetch(pushover_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
}

export const record_unanswered_question = tool({
  name: 'record_unanswered_questions',
  description: "Use this tool to record question that couldn't be answered, as you didn't know the answer",
  parameters: z.object({
    question: z.string()
  }),
  async execute({ question }) {
    console.log('Use record_unanswered_questions tool')
    const message = `The following question '${question}' couldn't be answered`;
    pushMessage({ message })

    return { 'record_successful': true }
  },
});

export const record_user_information = tool({
  name: 'record_user_information',
  description: 'Use this tool to record that a user is interested in being in touch and provided email address',
  parameters: z.object({
    email: z.string(),
    name: z.string(),
    notes: z.string()
  }),
  async execute({
    name = 'not provided',
    email,
    notes
  }: {
    name?: string,
    email: string,
    notes: string
  }) {
    const message = `There was an interest from user ${name} with email: ${email} and notes: ${notes}`;
    pushMessage({ message })
    console.log('Using record_user_information_tool')
    return { 'record_successful': true }
  },
});