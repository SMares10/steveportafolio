import { prisma } from '../../../lib/prisma'

export default async function HomePage() {
  const users = await prisma.user.findMany()
  console.log ('users', users)

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </main>
  )
}
