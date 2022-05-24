import { createAuth } from '@winwin/koa-authentication'
export const auth = createAuth({
  verify(username, password) {
    console.log({ username, password })
    return username === process.env.USERNAME
     && password === process.env.PASSWORD
  },
  secret() {
    return process.env.SECRET ?? 'secret'
  },
})
