import { request } from '~/api/request'
const app = document.getElementById('app')
if (app)
  app.textContent = 'hi from app'

setTimeout(() => {
  request.get('/auth/login')
}, 1000)
