'use server'
import OpenAI from "openai";

export async function generateConvId() {
  const client = new OpenAI()
  const conversation = await client.conversations.create()
  return {
    conversationId: conversation.id
  }
}