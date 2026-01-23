//npx prisma studio to  see the users
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

module.exports = prisma