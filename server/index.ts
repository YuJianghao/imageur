import './boot'
import Koa from 'koa'

const app = new Koa()

app.use((ctx) => {
  ctx.body = 'hi from server'
  // FIXME test ci2
})

app.listen(3000)
