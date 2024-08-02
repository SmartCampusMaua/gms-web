import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl!, supabaseKey!);

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('_session')!.toString();

  if (!sessionCookie) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  try {
    // Verify and decode the session cookie using Supabase's auth API
    const { data, error } = await supabase.auth.getUser(sessionCookie);

    if (error || !data) {
      console.error('Error verifying session cookie:', error);
      return NextResponse.redirect(new URL('/', request.url));
    }

    // Attach the user data to the request
    (request as any).user = data;

    // Proceed with the request if the cookie is valid
    return NextResponse.next();
  } catch (e) {
    console.error('Unexpected error verifying session cookie:', e);
    return NextResponse.redirect(new URL('/', request.url));
  }
}
