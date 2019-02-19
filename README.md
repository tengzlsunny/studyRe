# 学习react
### 推荐地址：[点击前往可学习的github地址](https://github.com/carlleton/reactjs101)
### 路由api: [http://react-guide.github.io/react-router-cn/docs/API.html](http://react-guide.github.io/react-router-cn/docs/API.html)


### 简单的react构建
1. 安装node和npm
2. 初始化package.json

    > npm init
3. 安装webpcak

    > npm install --save-dev babel-core babel-eslint babel-loader@7 babel-preset-es2015 babel-preset-react html-webpack-plugin webpack webpack-dev-server webpack-cli
4. 在根目录设定 webpack.config.js
    > 设定 webpack 的相关配置
    ```js
        // 这边使用 HtmlWebpackPlugin，将 bundle 好的 <script> 插入到 body。${__dirname} 为 ES6 语法对应到 __dirname  
        const HtmlWebpackPlugin = require('html-webpack-plugin');

        const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
            template: `${__dirname}/app/index.html`,
            filename: 'index.html',
            inject: 'body',
        });

        module.exports = {
        // 档案起始点从 entry 进入，因为是阵列所以也可以是多个档案
        entry: [
            './app/index.js',
        ],
        // output 是放入产生出来的结果的相关参数
        output: {
            path: `${__dirname}/dist`,
            filename: 'index_bundle.js',
        },
        module: {
            // loaders 则是放欲使用的 loaders，在这边是使用 babel-loader 将所有 .js（这边用到正则式）相关档案（排除了 npm 安装的套件位置 node_modules）转译成浏览器可以阅读的 JavaScript。preset 则是使用的 babel 转译规则，这边使用 react、es2015。若是已经单独使用 .babelrc 作为 presets 设定的话，则可以省略 query
            loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                presets: ['es2015', 'react'],
                },
            },
            ],
        },
        // devServer 则是 webpack-dev-server 设定
        devServer: {
            inline: true,
            port: 8088,
        },
        // plugins 放置所使用的外挂
        plugins: [HTMLWebpackPluginConfig],
        };
    ```
5. 在根目录设置babelrc
    ```js
        {
            "presets": [
                "es2015",
                "react",
            ],
            "plugins": []
        }
    ```
6. 安装 react 和 react-dom

    > npm install --save react react-dom

7. 撰写 pages（记得把 index.html 以及 index.js 放到 app 资料夹底下喔！)
8. 在终端机使用 webpack 进行成果展示，webpack 相关指令：
   > 如果不想每次都打一长串的指令码的话可以使用 package.json 中的 scripts 设定
    ```js
    "scripts": {
        "dev": "webpack-dev-server --devtool eval --progress --colors --content-base", // 运行项目
        "build": "webpack --progress --hide-modules --mode production" // 打包项目
    }
    ```
9. 运行命令 
    > npm run dev
    > 在地址栏输入：localhost:8088

*** *以上简单的react完成*

### 做一个小小的移动端的webapp

1. 移动端适配
    > lib-flexible来解决移动端适配(设置根元素的font-size值)
    * npm install lib-flexible --save
    * 在项目的入口js文件中引入lib-flexible

        > import 'lib-flexible'

    * px2rem-loader自动将css中的px转成rem
        > npm install --save-dev px2rem-loader style-loader css-loader node-sass sass-loader
        > 配置px2rem-loader
        > 配置sass
        > webpack.config.js的rules中加入
           
    * 安装postcss和autoprefixer(给css3样式添加浏览器兼容)
        > npm install --save-dev postcss-loader autoprefixer postcss
         ```js
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader',
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUni: 75
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require("autoprefixer")("last 100 versions")]
                        }
                    }
                ]
            }
        ```

2. 了解react语法

    React Component 撰写的主要两种方式

    1. ```js
        //  注意组件开头第一个字母都要大写
        class MyComponent extends React.Component {
            // render 是 Class based 组件唯一必须的方法（method）
            render() {
                return (
                    <div>Hello, World!</div>
                );
            }
        }

        // 将 <MyComponent /> 组件插入 id 为 app 的 DOM 元素中
        ReactDOM.render(<MyComponent/>, document.getElementById('app'));
        ```
        
    2.  ```js
        // 单纯地 render UI 的 stateless components，没有内部状态、没有实作物件和 ref，没有生命周期函数。若非需要控制生命周期的话建议多使用 stateless components 获得比较好的效能
        // 使用 arrow function 来设计 Functional Component 让 UI 设计更单纯（f(D) => UI），减少副作用（side effect）
        const MyComponent = () => (
            <div>Hello, World!</div>
        );

        // 将 <MyComponent /> 组件插入 id 为 app 的 DOM 元素中
        ReactDOM.render(<MyComponent/>, document.getElementById('app'));
        ```

    > Component PropType 防呆机制
    * 在 React 设计时除了提供 props 预设值设定（Default Prop Values）外，也提供了 Prop 的验证（Validation）机制，让整个 Component 设计更加稳健：
    * 语法：
        ```js
            // PropTypes 验证，若传入的 props type 不符合将会显示错误
            MyComponent.propTypes = {
                todo: React.PropTypes.object,
                name: React.PropTypes.string,
            }

            // Prop 预设值，若对应 props 没传入值将会使用 default 值
            MyComponent.defaultProps = {
                todo: {}, 
                name: '', 
            }
        ```
    3. 在 JavaScript 里写 CSS：Inline Style
        ```js
           const divStyle = {
                color: 'red',
                backgroundImage: 'url(' + imgUrl + ')',
            };
        
            <div style={divStyle}>Hello World!</div>
        ```
    4. react路由
        > 安装react路由项：npm install --save-dev react-router
        * Router 是放置 Route 的容器，其本身不定义 routing ，真正 routing 规则由 Route 定义。
        * Route 负责 URL 和对应的组件关系，可以有多个 Route 规则也可以有嵌套（nested）Routing。像下面的例子就是每个页面都会先载入 App 组件再载入对应 URL 的组件。
        * history Router 中有一个属性 history 的规则，这边使用我们使用 hashHistory，使用 routing 将由 hash（#）变化决定。
            1. hashHistory 教学范例使用的，会通过 hash 进行对应。好处是简单易用，不用多余设定。
            2. browserHistory 适用于伺服器端渲染，但需要设定伺服器端避免处理错误，这部份我们会在后面的章节详细说明。注意的是若是使用 Webpack 开发用伺服器需加上 --history-api-fallback
            3. $ webpack-dev-server --inline --content-base . --history-api-fallback
            4. createMemoryHistory 主要用于伺服器渲染，使用上会建立一个存在记忆体的 history 物件，不会修改浏览器的网址位置。
            const history = createMemoryHistory(location)
        * path 是对应 URL 的规则,例如：/repos/torvalds 会对应到 /repos/:name 的位置，并将参数传入 Repos 组件中。由 this.props.params.name 取得参数。顺带一提，若为查询参数 /user?q=torvalds 则由 this.props.location.query.q 取得参数。
        * IndexRoute 由于 / 情况下 App 组件对应的 this.props.children 会是 undefinded，所以使用 IndexRoute 来解决对应问题。这样当 URL 为 / 时将会对应到 Home 组件。不过要注意的是 IndexRoute 没有 path 属性。

        > 路由的配置方式
        * 对象式
            创建一个route文件，index.js中配置路由
            例如：

                ```js
                    import React from 'react';
                    import Home from '../pages/home/home.js'
                    import Product from '../pages/product/product.js'
                    import Active from '../pages/active/active.js'
                    import Mine from '../pages/mine/mine.js'
                    const routes = [
                        {
                            path: '/',
                            component: Home,
                            exact: true
                        },
                        {
                            path: '/product',
                            component: Product
                        },
                        {
                            path: '/active',
                            component: Active
                        },
                        {
                            path: '/mine',
                            component: Mine
                        }
                        
                    ]
                    export {routes}
                ```
            引入路由：

                ```js
                    import React from 'react';
                    import ReactDOM from 'react-dom';
                    
                    import { routes } from '../route';
                    import { HashRouter } from 'react-router-dom';
                    import { renderRoutes } from 'react-router-config';
                
                    export default class Index extends React.Component{
                        render() {
                            return (
                                <div>
                                    <HashRouter>
                                        <div>
                                            {renderRoutes(routes)}
                                        </div>
                                    </HashRouter>
                                </div>
                                
                            )
                        }
                    }
                    ReactDOM.render(
                        (<Index />),
                        document.getElementById('app')
                    );
                ```

        5. 写公共底部components/footer.js

           传值到footer.js

        6. 引入https://github.com/Binaryify/NeteaseCloudMusicApi，网易云接口
            运行npm run app

        7. 设置接口端口号： 
            ```js
            export default {
                apiUrl : 'http://localhost:3000/'
            }
            ```

        8. react数据请求

           * React本身不包含发送Ajax的代码，一般使用第三方的库。如axios，这是专门用于ajax请求的库。其封装了XmlHttpRequest对象的ajax,且使用promise风格写法，在浏览器的客户端与服务端都能使用。

           * 你可能会想问为什么不用fetch()原生函数呢？因为考虑到对老版本浏览器的支持情况。 其次，fetch（）不使用XmlHttpRequest对象发生ajax请求。

            > fetch 请求
             导入：npm install whatwg-fetch 
             引入： import 'whatwg-fetch' 

            ```js
                // get请求
                fetch('url')
                .then(res=>res.json())
                .then(json=>this.setState({list: json}))
           
                // post 请求
                fetch('url',{
                    method:'post',//改成post
                    mode: 'cors',//跨域
                    headers: {//请求头
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body:"..."//向服务器发送的数据
                })
                .then(res=>res.json())
                .then(json=>{console.log(json)})
            ```

            > axios 依赖注入axios npm install --save axios
                api.js中加入axios，以对象的形式输出

        9. react生命周期

            - **初始化**

            *1、getDefaultProps()*

            > 设置默认的props，也可以用dufaultProps设置组件的默认属性.

            *2、getInitialState()*

            > 在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props

            *3、componentWillMount()*

            > 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。

            *4、 render()*

            > react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。

            *5、componentDidMount()*

            > 组件渲染之后调用，只调用一次。

            - **更新**

            *6、componentWillReceiveProps(nextProps)*

            > 组件初始化时不调用，组件接受新的props时调用。

            *7、shouldComponentUpdate(nextProps, nextState)*

            > react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候

            *8、componentWillUpdata(nextProps, nextState)*

            > 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state

            *9、render()*

            > 组件渲染

            *10、componentDidUpdate()*

            > 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。

            - **卸载**

            *11、componentWillUnmount()*

            > 组件将要卸载时调用，一些事件监听和定时器需要在此时清除。

        10. 将获取的数据存在state里面

            ```js
            this.setState({
            	banner: res.data.banners
            })
            ```

        11. react轮播
            > 手写轮播，详见components/slider.js
            > 在home.js中引入组件

        12. 推荐
            > 写了一个json数据，详见static/json/tj.json
            > 在home.js中发送请求
            ```js
                api.axios.get('./app/static/json/tj.json')
                .then(res => {
                    console.log(res.data)
                })
            ```


             


### 引入一些插件
1. 引入阿里字体库
    > 下载阿里字体库至本地
    > 引入的文件部分需要解析：npm install --save-dev url-loader
    > 配置项
    >
    > ```js
    > 
    > {
    >    {
            test: /\.(woff|svg|eot|ttf)|\.(gif|jpg|png)$/,
            use: ["url-loader?limit=8192&name=images/[hash:8].[name].[ext]"] // 在url-loader四版本及以上必须是数组的形式
        } 
    > },
    > 
    > ```
    >
    > 
    >

### 随便
> js写标签快捷
```js
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "emmet.triggerExpansionOnTab": true
```


### 遇到的问题

> Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method
###### 用了定时器，然而在定时的这段时间，组件已经销毁，则造成此类问题，因此在组件销毁前需要清除定时器
        ```js
            componentWillUnmount(){
                window.clearInterval(this.state.timer)
            }
        ```
    



​        
​            


​            









​    



