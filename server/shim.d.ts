declare module '@alicloud/sts-sdk'{
  export default class StsClient {
    constructor(option: {
      endpoint: string
      accessKeyId: string
      accessKeySecret: string
    })

    public assumeRole(arn: string, name: string): void
  }
}
