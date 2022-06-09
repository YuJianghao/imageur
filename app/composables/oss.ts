import axios from 'axios'
import OSS from 'ali-oss'
import { ref } from 'vue'
import { nanoid } from 'nanoid'

export const useOss = () => {
  const client = ref<OSS | null>(null)
  async function refreshSTSToken() {
    const res = await axios.post('/api/sts')
    const data = res.data
    return {
      accessKeyId: data.AccessKeyId as string,
      accessKeySecret: data.AccessKeySecret as string,
      stsToken: data.SecurityToken as string,
    }
  }
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
