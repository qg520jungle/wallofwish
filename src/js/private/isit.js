$(function(){
	console.log(1)
	var arrList = [
		'买一套大房子',
		'换一辆好车',
		'开一个自己的店',
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
	var arrI = [1,2,3,3,2,1,1,3,2,2,1,3]
	var str = ''
	for(var i=0;i<arrList.length;i++){
		var b = arrI[i]
		str += '<li class="u-icon-blt b' + b + '"><span>'
		str += arrList[i]
		str += '</span></li>'
	}
	console.log($('#bltbox'))
	str += '<li class="u-icon-blt b4"><span>'
	str += '<input type="text" id="user-wish">'
	str += '</span></li>'
	$('#bltbox').append(str)
})