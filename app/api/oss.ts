import { request } from './request'
export async function refreshSTSToken() {
  const res = await request.post('/sts')
  const data = res.data
  return {
    accessKeyId: data.AccessKeyId as string,
    accessKeySecret: data.AccessKeySecret as string,
    stsToken: data.SecurityToken as string,
    region: data.region as string,
    bucket: data.bucket as string,
  }
}
