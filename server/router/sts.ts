import Router from '@koa/router'
import { STS } from 'ali-oss'
const router = new Router()
router.post('/sts', async (ctx) => {
  const sts = new STS({
    accessKeyId: process.env.ACCESS_KEY_ID as string,
    accessKeySecret: process.env.ACCESS_KEY_SECRET as string,
  })
  return sts.assumeRole(process.env.ARN as string, undefined, undefined, 'imageur').then((result) => {
    ctx.body = {
      AccessKeyId: result.credentials.AccessKeyId,
      AccessKeySecret: result.credentials.AccessKeySecret,
      SecurityToken: result.credentials.SecurityToken,
      Expiration: result.credentials.Expiration,
      region: process.env.REGION,
      bucket: process.env.BUCKET,
    }
  }).catch((err) => {
    ctx.status = 400
    ctx.body = err.message
  })
})
export default router
