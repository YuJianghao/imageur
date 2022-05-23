import './boot'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import { auth } from '@server/middlewares/auth'

const app = new Koa()

app.use(logger())
app.use(bodyParser())
app.use(auth.router.routes())

app.use(auth.auth)
app.use((ctx) => {
  ctx.body = 'hi from server'
})

app.listen(3000)
