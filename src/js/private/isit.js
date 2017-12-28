$(function(){
	$('.u-show').html('到这里了')
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
	var arrI = [1,2,3,3,2,1,1,3,2]
	var str = ''
	for(var i=0;i<arrList.length;i++){
		var b = arrI[i]
		str += '<li class="u-icon-blt b' + b + '"><span>'
		str += arrList[i]
		str += '</span></li>'
	}
	console.log($('#bltbox'))
	str += '<li class="u-icon-blt b4" id="blt-user-wish"><span id="blt-tips">我的愿望是...</span>'
	str += '<textarea type="text" id="user-wish" class="u-input-b4"></textarea>'
	str += '</li>'
	str += '<span class="f-hd">就这样，粘在墙上再改一下</span>'
	$('#bltbox').append(str)
	$('#blt-user-wish').on('click',function() {
		// $('#user-wish').show()
		$('#user-wish').focus()
		$('#user-conform').html('就这样，粘在墙上')
	})
	$('.u-icon-blt').each(function(i,el) {
		$(el).on('click',function(){
			$('.u-icon-blt').removeClass('z-act')
			$(this).addClass('z-act')
		})
	})
	$('#user-conform').on('click',function(event) {
		var blt1 = $('.u-icon-blt.z-act').find('span').html()
		var blt2 = $('#blt-user-wish #user-wish').val()
		var blt = blt1 || blt2
		location.href = './result.html?blt=' + encodeURI(blt)
		// if($(this).val()){
		// 	$('#blt-tips').html('')
		// 	$('#user-conform').html('再改一下')
		// } else {
		// 	$('#blt-tips').html('我的愿望是...')
		// 	$('#user-conform').html('再改一下')
		// }
	})
	$('#user-wish').on('change',function(){
		// $('#user-wish').hide()
		if($(this).val()){
			$('#blt-tips').html('')
			$('#blt-user-wish').addClass('z-act')
		} else {
			$('#blt-tips').html('我的愿望是...')
			$('#blt-user-wish').removeClass('z-act')
		}
	})
})