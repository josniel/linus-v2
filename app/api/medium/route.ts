import { NextResponse, NextRequest } from 'next/server';
import { BASE_URL, USER_MEDIUM, MEDIUM_TOKEN } from '@/config';

// Headers comunes
const HEADERS = {
  'x-rapidapi-host': 'medium2.p.rapidapi.com',
  'x-rapidapi-key': MEDIUM_TOKEN,
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');
  const articleId = searchParams.get('articleId');
  let data;

  try {
    if (action === 'userArticles') {
      const response = await fetch(`${BASE_URL}/user/${USER_MEDIUM}/articles`, {
        headers: HEADERS,
      });
      if (!response.ok) throw new Error('Failed to fetch user articles');
      data = await response.json();
      return NextResponse.json(data, { status: 200 });
    } else if (action === 'articleDetails') {
      if (!articleId) {
        return NextResponse.json(
          { message: 'Missing articleId' },
          { status: 400 }
        );
      }
      const response = await fetch(`${BASE_URL}/article/${articleId}`, {
        headers: HEADERS,
      });
      if (!response.ok) throw new Error(`Failed to fetch article ${articleId}`);
      data = await response.json();
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Invalid action' }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
