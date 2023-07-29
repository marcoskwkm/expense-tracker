import { getServerSession } from 'next-auth'

import { options } from './api/auth/[...nextauth]/options'
import TestClient from './test-client'

export default async function Home() {
  const session = await getServerSession(options)
  console.log(session)
  return <TestClient />
}
