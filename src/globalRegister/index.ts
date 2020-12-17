/* 注册全局变量 */
interface AppProp {
  [propName: string]: any;
}

const globalRegister = (app: AppProp) => {
  app.config.globalProperties.$global = 10
}

export default globalRegister
