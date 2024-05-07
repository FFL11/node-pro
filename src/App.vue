<template>
  <div id="app">
    <li v-for="(item,index) in path" :key="index">
      <router-link :to="item.url" @click.native="abc(index)" :class="{'active':index==flag}">{{ item.text }}</router-link>
    </li>
    <!-- .native--侦听组件根元素上的原生事件 -->
    <!-- 路由链接 -->
    <!-- <router-link to="/about">about</router-link> -->
    <!-- <router-link to="/home">home</router-link> -->
    <!-- 路由渲染 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
    data(){
      return{
        flag:0,
        path:[
          {url:'/home',text:'home'},
          {url:'/about',text:'about'},
        ]
      }
    },
    methods:{
      abc(index){
          console.log(index);
          this.flag=index
      }
    }
}
</script>

<style>
  .active{
    color: red;
  }
</style>
