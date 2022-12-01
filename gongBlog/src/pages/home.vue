<template>
    <div>
        <div class="wrap">
            <ul class="infinite-list" style="overflow: auto">
                <li class="infinite-list-item" v-for="(item,index) in data[currentPage]" :key="index">
                    <h2 style="color:var(--el-menu-text-color);">{{item.name}}</h2>
                    <br />
                    <!-- <h3>Lookah</h3> -->
                    <div>
                        <span style="color: #9aa0a6;">2022年10月30</span>
                        <span style="color: var(--el-menu-text-color);">
                           {{item.content}}
                        </span>
                    </div>
                </li>
            </ul>
            <el-pagination background layout="prev, pager, next" :page-count="lengths" class='pagination' @current-change="currentPageFn" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
const count = ref(0)
const currentPage = ref(0)
const currentPageFn = (val) => {
    currentPage.value = val - 1
    console.log(val);
    
}
// console.log(currentPage);

const load = () => {
  count.value += 2
}

const data = ref([
    [   {name:"我是第一页",content:"测试分页功能是否正常"},
        {name:"JavaScript百炼成仙",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"床前明月光",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"美人卷珠帘",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"我是第一页",content:"测试分页功能是否正常"},
        {name:"JavaScript百炼成仙",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"床前明月光",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        
    ],
    [
        {name:"JavaScript百炼成仙",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"床前明月光",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"美人卷珠帘",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},

    ],
    [
        {name:"JavaScript百炼成仙",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"床前明月光",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"美人卷珠帘",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},

    ],
    [
        {name:"JavaScript百炼成仙",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"床前明月光",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"美人卷珠帘",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},

    ],
    [
        {name:"JavaScript百炼成仙",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"床前明月光",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"美人卷珠帘",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},

    ],
    [
        {name:"JavaScript百炼成仙",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"床前明月光",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"美人卷珠帘",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},

    ],
    [
        {name:"JavaScript百炼成仙",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"床前明月光",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"美人卷珠帘",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},

    ],
    [
        {name:"JavaScript百炼成仙",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"床前明月光",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"美人卷珠帘",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},

    ],
    [
        {name:"JavaScript百炼成仙",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"床前明月光",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"美人卷珠帘",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},

    ],
    [
        {name:"JavaScript百炼成仙",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"床前明月光",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},
        {name:"美人卷珠帘",content:' Lookah is an online headshop also known as a smoke shop offering premium design glass rigs, cool water pipes under our Lookah Glass and Tataoo Glass brands.'},

    ],
    
])
const lengths = data.value.length
console.log(data.value.length);

</script>
<style scoped>
    .wrap{
        /* width:50%; */
    }
    .pagination{
        /* display:flex; */
        justify-content: center;
        /* align-items: center; */
    }
    .infinite-list {
        height: auto;
        padding: 0;
        margin: 0;
        list-style: none;
        }
    /* .infinite-list  */
    .infinite-list-item {
        /* display: flex;
        align-items: center;
        justify-content: center; */
        height: 10vh;
        min-height: 150px;
        /* width: 100%; */
        min-width: 240px;
        /* background: var(--el-color-primary-light-9); */
        margin: 10px;
        color: var(--el-color-primary);
        box-shadow: 0 2px 4px #00000014;
        border-radius: 10px;
        padding: 20px;
    }
    .infinite-list .infinite-list-item + .list-item {
        margin-top: 10px;
    }
</style>