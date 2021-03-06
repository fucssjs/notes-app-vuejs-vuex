# Firebase + Vuex 构建 Notes App

之前翻译了基于博客 [coligo](http://coligo.io/learn-vuex-by-building-notes-app/) 的文章:[用 Vuex 构建一个笔记应用](https://segmentfault.com/a/1190000005015164)，这次在此基础上做了一点更新：

* 把数据放在 Firebase 上，不会每次关掉浏览器就丢失数据
* 添加了笔记检索功能
* 为了保证代码整洁，加上了 eslint
* more...

在运行之前，记得把 store.js 里面的数据引用改成你自己账号的链接。

```js
// 改一下数据应用
let notesRef = new Firebase('https://crackling-inferno-296.firebaseio.com/notes')
```

### Install the dependencies

```bash
npm install
```

### Run the dev server with hot reload at localhost:8080

```bash
npm run dev
```

### Build the app for production

```bash
npm run build
```
