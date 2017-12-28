
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
// var url = shareData.shareUrl
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
$(function(){
	var arrList = [
		'有一次说走就走的旅行',
		'银行存款突破六位数',
		'父母身体健康',
		'找个对象',
		'世界和平',
		'减肥',
		'早睡早起',
		'每天拍一张照片',
		'坚持锻炼'
	];
	var w = 4.5
	// var arrJ = [0.2,0.17,0.16,0.13,0.12,0.08,0.07,0.04,0.03];// 速率比例数组
	var arrJ = [0.08,0.04,0.13,0.03,0.07,0.12,0.17,0.16,0.2];// 速率比例数组
	var arrI = [1,2,3,3,2,1,1,3,2];// 速率数组
	var arrP = [1,2,3,3,2,1,1,3,2];// 票数数组
	var arrB = [1,2,3,3,2,1,1,3,2];// 票数比例数组
	var all = 5123;// 总票数
	var str = ''
	var startTime = '2017/12/27';//初始时间
	var time = new Date(startTime).getTime();// 获得时间毫秒数
	var nowV = 0;// 当前速度
	var nowAll = 0;// 当前票数
	var nowTime = new Date().getTime();// 获得当前时间
	// console.log(time)
	getarrP(time)
	var t = Math.ceil((nowTime - time)/(1000*3600))//获得小时 向上取整
	var v = (-80 * t) / 125 + 125
	var nowAll = (v + 125) * t / 2
	// console.log('总票数'+nowAll)
	// 获得当前速率
	for(var i=0;i<arrJ.length;i++){
		arrI[i] = arrJ[i] * v
		arrP[i] = Math.ceil((arrI[i] + 125 * arrJ[i]) * t / 2)
		arrB[i] = parseFloat(arrP[i] * 100 / nowAll).toFixed(1)
	}
	for(var i=0;i<arrList.length;i++){
		var b = arrI[i]
		str += '<li class="u-li f-cb"><div class="u-left pipe"><span class="content">'
		str += arrList[i]
		str += '</span><span class="count">'+ arrP[i] +'票</span><div class="cover" style="width:'+ (arrI[i]/100*w) +'rem"></div> </div><div class="u-right percent">'
		str += arrB[i]
		str += '%</div></li>'
	}
	$('.m-list').html(str)
	// $('.m-list').append(str)
	function getarrP(time) {
		
	}
	$('.j-share').on('click',function() {
		$('.j-cover').show()
	})
	$('.j-cover').on('click',function() {
		$('.j-cover').hide()
	})
})
