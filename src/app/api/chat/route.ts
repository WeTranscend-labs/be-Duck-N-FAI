import { prompt } from '@/lib/llm';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const model = new GoogleGenerativeAI(
  process.env.GOOGLE_GENERATIVE_AI_API_KEY as string
);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({
          error: 'No message provided',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const geminiModel = model.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });

    const result = await geminiModel.generateContent(
      prompt + `User Message: ${message}`
    );

    const response = result.response.text();

    return new Response(
      JSON.stringify({
        message: response,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Gemini API Error:', error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Unknown error',
        details: error,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export async function OPTIONS(request: Request) {
  const allowedOrigin = request.headers.get('origin');
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin || '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version',
      'Access-Control-Max-Age': '86400',
    },
  });

  return response;
}
