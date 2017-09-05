# react + redux todo list 项目示例

## 如何运行示例？
1. 安装 yarn： `npm i -g yarn`
2. 安装依赖包，启动项目：`yarn && yarn start`
3. 打开 <cite>http://localhost:3000</cite>

## 项目结构说明
- src
  - components 业务 react 组件
  - js
    - reducer reducer 目录
    - action.js actionCreator 文件
    - actionTypes.js 略
    - bindActions.js actionCreator 与 dispatch 的绑定文件
    - container.js 容器组件（与 Redux store 通信的唯一组件）
    - model.js 接口请求文件
    - param.js store 数据／actionCreator 分发文件
    - selector.js 数据拼装文件
    - store.js Redux store 创建文件
  - App.js 应用顶层组件／渲染文件
  - index.js 入口文件