import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
 await prisma.projects.createMany({
  data: [
   { 
    name: 'Introduction',
    description: 'using Next.js'
},
   { 
    name: 'My Portfolio',
    description: 'using Prisma + Neon',
},
  ],
 })
}



main().catch((e) => {
 console.error(e)
 process.exit(1)
}).finally(() => prisma.$disconnect())
