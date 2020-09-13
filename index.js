const Koa = require('koa');
const KoaStatic = require('koa-static');
const body = require('koa-bodyparser');
const router = require('./Router');


const app = new Koa();
app.use(body());
app.use(KoaStatic('./static'));


app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log("3000")
});