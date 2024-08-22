/* 
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});
 
// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
 
export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();
 
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGINGFACE_TOKEN!);

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Request body:', body);
    const { messages } = body;
    const question = messages[messages.length - 1].content;

    const response = await hf.textGeneration({
      model: 'gpt2',
      inputs: question,
    });

    console.log('API response:', response); 

    return NextResponse.json({ answer: response.generated_text });
  } catch (error) {
    console.error('Error:', error); 
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
