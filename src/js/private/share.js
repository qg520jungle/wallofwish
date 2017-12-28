var shareData={
    shareUrl:'',
    shareDesc:'',
    shareIcon:'',
    shareTitle:'',
}


function getShareUrl() {
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