import { objectType, extendType } from '@nexus/schema'

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.image()
    t.model.role()
    t.model.emailVerified()
    t.model.createdAt()
  },
})

const Query = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('allUsers', {
      type: 'User',
      resolve: async (_root, args, ctx) => {
        if (!(await ctx.prisma.user.findFirst({ where: { id: ctx.user.id, role: 'ADMIN' } }))) return null
        return ctx.prisma.user.findMany()
      },
    })
    t.crud.user()
  },
})

export default [User, Query]
