// components/no-ssr.tsx
"use client";
import dynamic from 'next/dynamic';

const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false });

export default function Page() {
  return (
    <div>
      {/* This component will only be rendered on the client-side */}
      <NoSSR />
    </div>
  );
}
