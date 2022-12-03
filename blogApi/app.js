const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()


// app.use(async ctx=>{
//     ctx.status = 200
//     ctx.body="koa初体验"
// })
router.get('/',(ctx, next)=>{
    ctx.status = 200
    ctx.body = "我是首页测试数据"
})


router.get('/api',(ctx, next)=>{
    ctx.status = 200
    ctx.body = "我是测试数据"
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(1156)