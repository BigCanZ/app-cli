# 移动端项目实践目录指北☞



## 一、目录结构

```
app-cli
├─ .editorconfig       代码风格配置
├─ .env.development    开发环境变量
├─ .env.production     生产环境变量
├─ src                 业务代码目录
│  ├─ api              api文件夹
│  ├─ assets           资源文件夹
│  │  ├─ css           全局、重置、混入及变量样式文件(前两者已在全局引入，后两者根据需求自定义)
│  │  └─ images        图片文件夹
│  ├─ components
│  │  ├─ business      业务组件
│  │  ├─ command       命令式组件（新增会自动注册）
│  │  └─ common        通用组件(新增会自动注册)
│  ├─ Layout           页面布局（可自定义新增）
│  ├─ main.js          入口文件
│  ├─ plugins.js       插件引入文件
│  ├─ router           路由
│  ├─ store            状态管理
│  ├─ utils            工具函数
│  └─ views            页面
└─ vue.config.js       脚手架配置

```



## 二、解析及规范

### 代码风格及规范

#### 代码风格

遵循eslint的[standard](https://github.com/standard/standard)风格，vscode请安装以下插件, 其他插件按自己习惯来

​	1) Trailing Spaces 空格标注控件

​	2) ESlint js代码检测，并在配置中增加

```javascript
	"eslint.autoFixOnSave": true,
    "eslint.alwaysShowStatus": true,
    "eslint.enable": true,
    "eslint.run": "onType",
    "eslint.options": {
        "extensions": [".js", ".vue"]
    },
    "eslint.validate": [
        {
            "language": "vue",
            "autoFix": true
        }
    ]
```

#### 命名规范

1. 变量

   命名方法：Camel Case **小驼峰式命名法**  eg: maxCount

   命名规范：前缀应当是名词，并尽量体现当前变量所属类型及含义

2. 函数

   命名方法：Camel Case **小驼峰式命名法**

   命名规范： 前缀应当是动词，可遵守一下常见动词约定

   | 动词 | 含义                         | 返回值                                                |
   | ---- | ---------------------------- | ----------------------------------------------------- |
   | can  | 判断是否可执行某个动作(权限) | 函数返回一个布尔值。true：可执行；false：不可执行     |
   | has  | 判断是否含有某个值           | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
   | is   | 判断是否为某个值             | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
   | get  | 获取某个值                   | 函数返回一个非布尔值                                  |
   | set  | 设置某个值                   | 无返回值、返回是否设置成功或者返回链式对象            |
   | load | 加载某些数据                 | 无返回值或者返回是否加载完成的结果                    |

3. 常量

   命名方法：全部大写，并用下划线分割单词

   ```javascript
   const MAX_COUNT = 10
   ```

4. 构造函数

   命名方法： Pascal Case 大驼峰式命名法，首字母大写

5. 组件

   命名方法： Pascal Case 大驼峰式命名法，首字母大写

#### 注释规范

1. 单行注释

   即 // ，注意前后留空格

2. 多行注释

   ```javascript
   /*
   * example
   */
   ```

3. 函数注释, 注释要求 参照 [javadoc](https://www.runoob.com/java/java-documentation.html)

   ```javascript
   /**
   * 函数说明
   * @关键字
   */
   ```


## 三、目录结构中有些需要解释的点

###  1、组件的开发

​	常规跟页面耦合度较高的业务组件，请在对应页面的component中注册开发，不过如果同一组件出现**两次**及以上，请提炼放入**src>components>business**文件夹下方便管理。其他命令式组件和通用组件，请放入**command和common**文件夹下，并使用**大驼峰式命名法**，框架会自动引入到全局

### 2、样式的编写

​		页面独用的样式，正常在页面中scoped模块中编写，不过可以提炼出**混入样式和变量样式**（assets>css>mixin和variable），比如某些块的混入，全局主色，字体色，不同级别字体样式等等，方便ui调整时快速对应

### 3、api接口

​		服务端提供的接口，请按照业务模块创建js文件置入api文件夹，框架会自动引入到全局并注册

### 4、路由

​		路由中定义着c**onstRoutes和asyncRoutes**变量，根据实际开发需求去决定是否需要边界权限方法

### 5、状态管理

​		按模块创建js文件放入store>modules文件夹中，持久化根据实际需求去使用本地存储方案，本地存储方法已封装，在utils>storage/

### 6、移动端调试

​		框架已引入vConsole,并定义方法，只需在某些空位置上加载定义的组件，连续点击即可进入配置页面对调试工具进行开启和关闭，默认关闭

### 7、页面样式使用单位rem

框架中默认ui设计稿宽度为 750,即二倍图，如有需要在env中自行更改

## 四、其他

1、loadsh 工具函数集
可按需引入，自己估计与es6的好坏
函数操作，数组操作等等

2、js数值计算精度问题解决方案

bignumber.js, big.js, decimal.js
小数运算，大数运算以及输入指定规则等等

3、对于需要打包到公司现有app框架中的项目需要注意,由于ios的新政策，UIWebview已弃用，现在是WKWebview,现在发现以下几个点需要开发注意

1.  wkwebview使用到自定义请求头时 后台跨域设置不可是通配符 *
2. 在wkwebview中特别是相册选择及拍照后需要转码成base64的不要用image.onload ，改用由打包框架提供的plus.io.fileReader
3. post不要使用formdata 有长度限制，需要修改成body体,另外如果设置了content-type,需要后台明确标明Access-Control-Allow-Headers