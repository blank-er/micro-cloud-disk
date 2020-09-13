let users = require('./../src/Enity/User');

module.exports = router => {
    router.get('/res', async (ctx, next) => {
        const user = await users.findOne({
            where: {
                username: ctx.request.query.username,
                password: ctx.request.query.password
            }
        });
        console.log(user);

        if (user !== null){
            ctx.response.status = 404;
            ctx.response.body = {
                ok: 0,
                msg: '用户已存在'
            };
        }else {
            await users.create({
                username: ctx.request.query.username,
                password: ctx.request.query.password
            });
            ctx.response.status = 200;
            ctx.response.body = {
                ok: 1,
                msg: '注册成功'
            };
        }

        await next();
    })
};