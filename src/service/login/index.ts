import myRequest from '..'
import type { IAccount } from '@/types'

export const accountLoginRequest = (account: IAccount) => {
  return myRequest.post({
    url: '/login',
    data: account
  })
}
