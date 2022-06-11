import path from 'path'
import serve from 'koa-static'

export const statics = (root: string) => serve(root, {
  setHeaders: (res, fullpath) => {
    const isHtml = path.extname(fullpath).toLowerCase() === '.html'
    if (isHtml)
      res.setHeader('Cache-Control', 'no-cache')
    else res.setHeader('Cache-Control', 'max-age=31536000')
  },
})
