<template>
  <div>
    <h1>计算和{{count}}</h1>
    <select name="" id="">
        <option :value="1" :label="1"></option>
        <option :value="2" :label="2"></option>
        <option :value="3" :label="3"></option>
    </select>
    <button @click="add">+{{n}}</button>
    <button @click="minus">-{{n}}</button>
    <button>当前求和为奇数再加</button>
    <button>等一等再加</button>
  </div>
</template>

<script>
export default {
    name:"countView",
    data(){
        return {
            n:0
        }
    },
    methods:{
        add(){
            this.count++;
        },
        minus(){

        }
    }
}
</script>

<style lang="scss" scoped>
button {
    margin-left: 10px;
}
</style>