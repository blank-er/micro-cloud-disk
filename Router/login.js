const User = require('./../src/Enity/User');
const File = require('../src/Enity/File');

module.exports = router => {
    router.get('/login', async (ctx, next) => {
        const user = await User.findOne({
            where: {
                username: ctx.request.query.username,
                password: ctx.request.query.password
            }
        });

        //console.log(user);
        if (user !== null){
            let _uid = user.id;
            const fs = await File.findAll({
                where:{
                    uid:_uid
                }
            });
            console.log("All users:", JSON.stringify(fs, null, 2));

            ctx.response.status = 200;
            fs.unshift({
                ok: 1,
                msg: '登录成功!'
            });
            ctx.response.body = fs;

        }else{
            ctx.response.body = [{
                ok: 0,
                msg: '用户名或密码错误'
            }];
        }

        await next();
    })
};