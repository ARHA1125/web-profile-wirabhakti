const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3005';

function buildTargetUrl(pathSegments: string[]): string | null {
  if (pathSegments.length < 2 || pathSegments[0] !== 'img') {
    return null;
  }

  const normalizedPath = pathSegments.map(encodeURIComponent).join('/');
  return `${API_URL}/${normalizedPath}`;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const targetUrl = buildTargetUrl(path);

  if (!targetUrl) {
    return new Response('Not Found', { status: 404 });
  }

  const upstream = await fetch(targetUrl, {
    next: { revalidate: 60 },
    redirect: 'follow',
  });

  if (!upstream.ok) {
    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        'content-type': upstream.headers.get('content-type') || 'text/plain; charset=utf-8',
        'cache-control': upstream.headers.get('cache-control') || 'public, max-age=60',
      },
    });
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'content-type': upstream.headers.get('content-type') || 'application/octet-stream',
      'cache-control': upstream.headers.get('cache-control') || 'public, max-age=300',
    },
  });
}
