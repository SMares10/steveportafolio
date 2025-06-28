import { prisma } from '../../../lib/prisma'

export default async function HomePage() {
  const projects = await prisma.projects.findMany()


  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name}
          </li>
        ))}
      </ul>
    </main>
  )
}




