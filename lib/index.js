'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.initialize = initialize;
exports.resizeIframe = resizeIframe;
exports.injectScript = injectScript;
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

function initialize(obj) {
    console.log('Microcrawler.initialize()', obj);

    try {
        resizeIframe(obj);
    } catch (err) {
        console.log(err);
    }

    try {
        injectScript(obj);
    } catch (err) {
        console.log(err);
    }
}

function resizeIframe(obj) {
    console.log('Microcrawler.resizeIframe()', obj);
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

function injectScript(obj) {
    console.log('Microcrawler.injectScript()', obj);

    var html = $("#iframe").contents().find("html").html();
    console.log(html);
}