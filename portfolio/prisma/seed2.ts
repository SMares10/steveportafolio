import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
 await prisma.projects.createMany({
  data: [
   { name: 'Ania'},
   { name: 'Ana'},
  ],
 })
}



main().catch((e) => {
 console.error(e)
 process.exit(1)
}).finally(() => prisma.$disconnect())
