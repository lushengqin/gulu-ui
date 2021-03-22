# 开始使用

请先<a href="#/doc/install">安装</a>本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "lulu-ui"
```

### Vue 单文件组件

代码示例：

```
<template>
  <div><Button>按钮</Button></div>
</template>
<script>;
  import {Button, Tabs, Switch, Dialog} from "lulu-ui"
  export default {
    components: {Button}
  }
</script>;
```

下一节：[Switch组件示例](#/doc/switch)