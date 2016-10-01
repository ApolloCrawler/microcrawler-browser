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

export function initialize(obj) {
    console.log('Microcrawler.initialize()', obj);

    try {
        resizeIframe(obj);
    } catch(err) {
        console.log(err);
    }

    try {
        injectScript(obj);
    } catch(err) {
        console.log(err);
    }
}

export function resizeIframe(obj) {
    console.log('Microcrawler.resizeIframe()', obj);
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

export function injectScript(obj) {
    console.log('Microcrawler.injectScript()', obj);

    const html = $("#iframe").contents().find("html").html();
    console.log(html);
}

