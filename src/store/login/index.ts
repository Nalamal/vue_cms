import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const LOGIN_TOKEN = 'login/token'

export const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1. 帐号登录，获取token等信息
      const loginResult = await accountLoginRequest(account)
      this.id = loginResult.data.id
      this.name = loginResult.data.name
      this.token = loginResult.data.token

      // 2. 进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)
    }
  }
})

export default useLoginStore
