## ts与非ts声明defineProps,defineEmit

```ts
// 类型声明
const props = defineProps<{
  foo: string
  bar?: number
}>()

const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

// 运行时声明
const propsNew = defineProps({
  fatherValue: String || Number
})
```

* `defineProps` 或 `defineEmits` 要么使用运行时声明，要么使用类型声明。同时使用两种声明方式会导致编译报错
* 使用类型声明的时候，静态分析会自动生成等效的运行时声明，从而在避免双重声明的前提下确保正确的运行时行为

## 使用类型声明时的默认 props 值
```ts
export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: '默认值',
  labels: () => ['one', 'two']
})

```
```js
// 非ts写法
	const props = defineProps({
	    msg: {
	      type: String,
	      default: '默认值',
	      required: false
	    },
        label:{
          type: Array,
          default: ()=>['one','two'],
          required: false
        }
  	})
```

上面代码会被编译为等价的运行时 props 的 `default` 选项。此外，`withDefaults` 
辅助函数提供了对默认值的类型检查，并确保返回的 `props`的类型删除了已声明默认值的属性的可选标志。


## 文档：
[script-setup](https://cn.vuejs.org/api/sfc-script-setup.html#typescript-only-features)
