import Koa from 'koa'

const app = new Koa()

app.use((ctx) => {
  ctx.body = 'hi from server'
})

app.listen(3000)
