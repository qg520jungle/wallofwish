var awardData={
    // url:'https://devnfh.nfapp.southcn.com/nfplus-activity-api/',//开发基础接口地址
    // https://hd3.nfapp.southcn.com/activity-api/
    url:'https://testdangfei.nfapp.southcn.com/nfplus-activity-api/',//测试基础接口地址
    // url:'https://hd3.nfapp.southcn.com/activity-api/',//正式基础接口地址
    // baseUrl:'https://static.nfapp.southcn.com/hd/',
    baseUrl:'http://devstatic.nfapp.southcn.com/zhxg/',
    activityId:getUrlData('activityId'),
    uuid:''
}
var blt = getUrlData('blt')
var urlParm = (blt && decodeURI(blt) != '我的愿望是...') ? '?blt=' + blt : ''
var urlMsg = (blt && decodeURI(blt) != '我的愿望是...') ? '我的愿望是: ' + decodeURI(blt) : '我的愿望是...'
var shareData={
    // shareUrl:awardData.baseUrl+'awardActivity/index.html',
    shareUrl:awardData.baseUrl+'wallofwish/start.html' + urlParm,
    shareTitle:'新年许愿墙',
    shareDesc: urlMsg,
    shareIcon:'https://static.nfapp.southcn.com/app/nanfang_logo.png',
}

// 客户端分享
function getShareUrl() {
    // alert(shareData.shareUrl)
    return shareData.shareUrl;
}
function getShareDesc() {
    return shareData.shareDesc;
}
function getShareIcon() {
    return shareData.shareIcon;
}
function getShareTitle() {
    return shareData.shareTitle;
}
function getShareObj() {
    window.activity.getShareUrl(shareData.shareUrl);
    window.activity.getShareDesc(shareData.shareDesc);
    window.activity.getShareTitle(shareData.shareTitle);
    window.activity.getShareIcon(shareData.shareIcon);
}
// 微信二次分享
initShare({
    //请求失败回调
    getShareFail:function(){},
    //分享标题
    title:shareData.shareTitle,
    //分享描述
    desc:shareData.shareDesc,
    //分享图片地址
    iconUrl:'https://static.nfapp.southcn.com/app/nanfang_logo.png',
    //需要分享的路径，不传默认本页面
    shareUrl:shareData.shareUrl
})
// QQ分享
var metaStr='<meta itemprop="name" content="'+shareData.shareTitle+'"/>\
<meta itemprop="image" content="https://static.nfapp.southcn.com/hd/XDspeech/XDshare/img/share_logo.png" />\
<meta itemprop="description" content="'+shareData.shareDesc+'"/>';

$('head').append(metaStr);