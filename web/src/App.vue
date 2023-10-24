<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </nav>-->
  <div class="common-layout">
    <el-container>
      <el-header class="view-header">Header</el-header>
      <el-container>
        <el-aside class="view-aside" width="200px">
<!--          导航栏-->
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo">
<!--                  @open="handleOpen"-->
<!--                  @close="handleClose"-->
<!--              >-->
                <el-menu-item @click="identify" index="1">
                    <el-icon><icon-menu /></el-icon>
                    <span>实时识别</span>
                </el-menu-item>
                <el-menu-item @click="original" index="2">
                    <el-icon><document /></el-icon>
                    <span>实时原图</span>
                </el-menu-item>
                <el-menu-item @click="contrast" index="3">
                    <el-icon><setting /></el-icon>
                    <span>实时对比</span>
                </el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="12">
            </el-col>
          </el-row>
        </el-aside>
        <el-main class="view-main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.view-header{
  border: 1px red solid;
}
.view-aside {
  border: 1px rebeccapurple solid;
}
.view-main {
  border: 1px royalblue solid;
}

</style>

<script>
// const handleOpen = (key, keyPath) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key, keyPath) => {
//   console.log(key, keyPath)
// }

export default  {
  methods:{
    identify(){
      this.$router.push('/identify')
    },
    original(){
      this.$router.push('/original')

    },
    contrast(){
      this.$router.push('/contrast')

    },
  }
}
</script>