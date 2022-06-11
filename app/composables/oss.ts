import OSS from 'ali-oss'
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import { refreshSTSToken } from '~/api/oss'

export const useOss = () => {
  const client = ref<OSS | null>(null)
  const refresh = () => refreshSTSToken().then((data) => {
    client.value = new OSS({
      region: data.region,
      accessKeyId: data.accessKeyId,
      accessKeySecret: data.accessKeySecret,
      stsToken: data.stsToken,
      bucket: data.bucket,
      refreshSTSToken,
    })
  })
  const createFileName = () => `share/${nanoid()}`
  const upload = (file: File) => {
    return client.value!.put(createFileName(), file)
  }
  refresh()
  return { upload, refresh }
}
