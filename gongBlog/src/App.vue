<script setup lang="ts">
    import { useDark, useToggle } from '@vueuse/core'
    import { Sunny, Moon } from '@element-plus/icons-vue'
    import { ref } from 'vue'

    const isDark = useDark()
    const toggleDark = useToggle(isDark)
    
    const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div>
    <el-affix :offset="0">
      <div>
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          class="el-menu-demo"
        >
            <div>
              <router-link to="/">
                <!-- <el-image style="width: 100px; height: 50px" src="https://www.lovelilin.com/images/%E5%AF%8C%E5%BC%BA.png" fit="cover" /> -->
              </router-link>
            </div>
            <div class="flex-grow" /> 
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">
              测试页
                
              </el-menu-item>
              <el-menu-item index="3">测试</el-menu-item>
              <el-menu-item index="4">关于</el-menu-item>
              <div class="switch">
                <el-switch
                    v-model="isDark"
                    style="--el-switch-on-color: #2C2C2C; --el-switch-off-color: #DCDFE6;color:red"
                    size="large"
                    inline-prompt
                    :active-icon="Sunny"
                    :inactive-icon="Moon"
                />
              </div>
          </el-menu>
      </div>
    </el-affix>
    <div class="main">
     <div class="router-view">
      <router-view></router-view>
     </div>
     <div class="info-wraps">
      我是广告模块
     </div>
    
    </div>
   
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
<style scoped>
  .switch{
  /* display: flex; */
  /* justify-content: center; */
  align-items: center;
  width: 200px;
}
.flex-grow {
  flex-grow: 1;
}
.el-menu-demo{
  padding: 0 10vw;
}
.main{
  padding: 0 10vw;
  height: auto;
  display:flex;
}
.router-view{
  width: 70%;
  /* background:red; */
}
.info-wraps{
  width: 30%;
  margin:10px 10px 10px 200px;
  /* background:pink; */
  border:1px solid var(--el-menu-border-color);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 800px;
}
</style>
