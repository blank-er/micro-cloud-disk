const fs = require('fs');
const File = require('../src/Enity/File');

module.exports = router => {
    router.get('/deletefile', async (ctx, next) => {
        await File.destroy({
            where: {
                hashName:ctx.request.query.hashName
            }
        });

        fs.unlink('E:\\WebStorm\\pan\\storage\\uploads\\' + ctx.request.query.hashName, (err => {
            if (err) throw err;
            console.log('文件已被删除');
        }))

        ctx.response.body = {
            ok:1
        }

        await next();
    })
}