'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resizeIframe = resizeIframe;
// import request from 'superagent';
//
// request
//     .get('http://root.cz')
//     .withCredentials()
//     .end((err, res) => {
//         if (err) {
//             return console.log(err);
//         }
//
//         console.log(res);
//     });

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}