"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
app_js_1.server.set('port', (process.env.PORT || 5000));
// IoServer.listen(server.get('port'), () => {
//     console.log('app listening on port', server.get('port'));
// });
app_js_1.server.listen(app_js_1.server.get('port'), () => {
    console.log('app listening on port', app_js_1.server.get('port'));
});
