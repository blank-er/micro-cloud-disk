const send = require('koa-send');
const File = require('../src/Enity/File');

module.exports = router => {
    router.get('/download', async (ctx, next) => {
        const file = await File.findOne({
            where:{
                hashName:ctx.request.query.hashName
            }
        })
        console.log(file.hashName);
        console.log(ctx.request.query.hashName);
        let times = file.dlTimes;
        times++;

        await File.update({dlTimes:times},{
            where:{
                hashName:ctx.request.query.hashName
            }
        })
        const path = ctx.request.query.hashName;
        console.log(path);
        ctx.attachment(path);
        await send(ctx, path, { root: "E:/WebStorm/pan/storage/uploads"  });

    await next();
    })

}