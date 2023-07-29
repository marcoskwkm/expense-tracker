'use client'

import { useSession } from 'next-auth/react'

export default function TestClient() {
  const { data, status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'unauthenticated') {
    return <div>Unauthenticated</div>
  }

  return (
    <div>
      <p>Authenticated!</p>
      <p>User: {data?.user?.name}</p>
      <p>Email: {data?.user?.email}</p>
    </div>
  )
}
