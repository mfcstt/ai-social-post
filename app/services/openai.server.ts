import OpenAI from 'openai';
import type { ChatMessage } from '~/features/campaigns/types';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

export async function getChatCompletions(messages: ChatMessage[]) {
  const completion = await client.chat.completions.create({
    model: 'gpt-4o-mini',
    messages,
  });

  return completion.choices[0].message.content;
}
