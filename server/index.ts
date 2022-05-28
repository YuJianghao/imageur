import './boot'
import { auth } from '@server/middlewares/auth'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'

const app = new Koa()

app.use(logger())
app.use(bodyParser())
app.use(auth.router.routes())

app.use(auth.auth)
app.use((ctx) => {
  ctx.body = 'hi from server'
})

app.listen(3000)
