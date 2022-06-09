import OSS from 'ali-oss'
import { ref } from 'vue'
import { nanoid } from 'nanoid'
import { refreshSTSToken } from '~/api/oss'

export const useOss = () => {
  const client = ref<OSS | null>(null)
  const refresh = () => refreshSTSToken().then((data) => {
    client.value = new OSS({
      region: 'oss-cn-beijing',
      accessKeyId: data.accessKeyId,
      accessKeySecret: data.accessKeySecret,
      stsToken: data.stsToken,
      bucket: 'winwincdn',
      refreshSTSToken,
    })
  })
  const createFileName = () => `share/${nanoid()}`
  const upload = (files: FileList) => {
    return client.value!.put(createFileName(), files[0])
  }
  refresh()
  return { upload, refresh }
}
