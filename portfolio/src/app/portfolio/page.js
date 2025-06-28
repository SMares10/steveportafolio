import { prisma } from '../../../lib/prisma'

export default async function HomePage() {
  const projects = await prisma.projects.findMany()


  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="border p-4 rounded shadow">
             <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="text-sm text-gray-700">{project.description}</p>
              <a href={project.link} target="_blank" className="text-blue-600 underline">
              Visit
             </a>
          </li>
        ))}
      </ul>
    </main>
  )
}




