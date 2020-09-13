const Router = require('koa-router');

const router = Router();

require('./res')(router);
require('./login')(router);
require('./getfiles')(router);
require('./deletefile')(router);
require('./download')(router);

module.exports = router;
