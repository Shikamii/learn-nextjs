import { useRouter } from 'next/router';
import React from 'react';

export interface  PostDetailPageProps {
}

export default function PostDetailPage (props:  PostDetailPageProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Post Detail Page</h1>
      
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}
