<template>
    <div>
    <el-row>
      <el-button type="primary" v-for="m in messageList" :key="m.id">
         <router-link :to="{
                      path:'/Pages',
                      query:{
                          id:m.id,
                          title:m.title
                      }
                  }">
                      {{m.title}}
                  </router-link>
        </el-button>
        <el-button type="primary">
          <router-link class="list-group-item"  to="/SignIn">SignIn</router-link>
        </el-button>
        <el-button type="primary" icon="el-icon-search">
          <router-link class="list-group-item"  to="/SearchPage">search</router-link>
        </el-button>
      </el-row>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
    data() {
      return {
        messageList: [
          { id: '001', title: 'food' },
          { id: '002', title: 'music' },
          { id: '003', title: 'news' },
          { id: '004', title: 'sport' },
          { id: '005', title: 'game' },
        ]
      }
      
    },
  }
  
  </script>
  <style scoped>
    .router-link-active {
      text-decoration: none;
      color: yellow;
    }
    a{
      text-decoration: none;
      color: white;
    }
    </style>