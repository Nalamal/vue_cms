// 1. 区分开发环境和生产环境
export const BASE_URL = 'http://coderwhy.dev:8000'
// export const BASE_URL = 'http://coderwhy.prod:8000'

// 2. 代码逻辑判断，判断当前环境
// vite 默认提供的环境变量
// console.log(import.meta.env.MODE) // 当前环境
// console.log(import.meta.env.DEV) // 是否开发环境
// console.log(import.meta.env.PROD) //是否生产环境
// console.log(import.meta.env.SSR) // 是否是服务器端渲染 (server side render)

// let BASE_URL = ''
// if (import.meta.env.DEV) {
//   BASE_URL = 'http://coderwhy.dev:8000'
// } else {
//   BASE_URL = 'http://coderwhy.dev:8000'
// }

// 最大限制时间
export const TIME_OUT = 10000
// export { BASE_URL }
