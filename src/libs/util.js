let util = {};
util.title = function (title) {
    title = title ? title + ' - Home' : "DEMO";
    //'佛山市南海区贺泰化工有限公司'
    window.document.title = title;
};

export default util;