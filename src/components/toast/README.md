# mint-toast

简短的消息提示框，支持自定义位置、持续时间和样式。

## 基本用法

> this.$toast('提示信息');

在调用 Toast 时传入一个对象即可配置更多选项

```js
this.$toast({
  message: '提示',
  position: 'bottom',
  duration: 5000
});
```

若需在文字上方显示一个 icon 图标，可以将图标的类名作为 iconClass 的值传给 Toast（图标需自行准备）

```javascript
this.$toast({
  message: '操作成功',
  iconClass: 'iconfont icon-success'
});
```


| 参数       | 说明                      | 类型    |  可选值| 默认值|
| --------- |:--------------------------| ------:| ------:| ----|
| message   | 文本内容                   | String |
| position  | Toast 的位置               | String | top, bottom, middle |'middle'|
| duration  | 持续时间（毫秒）             | Number |3000|
| className | Toast 的类名。可以为其添加样式| String |
| iconClass | icon 图标的类名             | String |
