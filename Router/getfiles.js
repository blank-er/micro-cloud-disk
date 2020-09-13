const multer = require('@koa/multer')
const path = require('path')
const File = require('../src/Enity/File');
const User = require('./../src/Enity/User');

//上传文件存放路径、及文件命名
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname ,'../storage/uploads'))
    },
    filename: function (req, file, cb) {
        let type = file.originalname.split('.')[1]
        cb(null, `${file.fieldname}-${Date.now().toString(16)}.${type}`)
    }
})
//文件上传限制
const limits = {
    fields: 20,//非文件字段的数量
    files: 1//文件数量
}
const upload = multer({storage,limits})

module.exports = router => {
    router.post('/getfiles', upload.single('file'), async (ctx, next) => {
        const user = await User.findOne({
            where:{
                username:ctx.request.body.userName
            }
        })
        console.log(ctx.request.file);
        await File.create({
            lastName:ctx.request.file.originalname,
            hashName:ctx.request.file.filename,
            size:ctx.request.file.size,
            type:ctx.request.file.mimetype,
            lastTime:new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
            dlTimes:0,
            uid:user.id,
        });

        ctx.body = {
            ok:1,
            hashName:ctx.request.file.filename
        }

        await next();
    })
}