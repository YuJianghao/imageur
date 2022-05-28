import { request } from './request'
import { cookies } from '~/composables/cookies'

export async function signIn(username: string, password: string) {
  return request.post('/auth/login', { username, password })
}

export async function signOut() {
  cookies.remove('token')
}
