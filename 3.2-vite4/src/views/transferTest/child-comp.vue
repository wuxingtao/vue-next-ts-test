<template>
  <div class="child-comp">
    <p>root provide value : {{ rootData.transType }}</p>
    <p>root provide transNum : {{ rootData.transNum }}</p>
    <p>prop value from father: {{ props.fatherValue }}</p>
    <p>
      <span>child输入内容</span>
      <input type="text" v-model="inputValue" @input="handleInputChange" />
    </p>
    <p>
      <span>child-sun传值内容</span>
      <input type="text" v-model="state.msg"/>
    </p>
    <div class='child-extend'>
      <sun-comp :msg='state.msg'/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits, defineExpose, defineProps, inject, reactive, ref } from 'vue'
import SunComp from '@/views/transferTest/sun-comp.vue'
interface RootDataInterface {
  transType?: string
  transValue?: string
  transNum?: number
}

const props = defineProps({
  fatherValue: String || Number
})
// const emit = defineEmits('valueChange')
const emit = defineEmits<{
  (e: 'valueChange', value: string): void
}>()

const state = reactive({
  msg: '' // 给sun-comp传值
})

const inputValue = ref(null)

const rootData:RootDataInterface = inject('rootData') || {}

function handleInputChange(event: any) {
  if (event && event.target && event.target.value) {
    emit('valueChange', event.target.value)
  }
}

defineExpose({ inputValue })
</script>

<style lang="scss" scoped>
.child-comp {
  background-color: #42b983;
  padding: 15px;
}
</style>
