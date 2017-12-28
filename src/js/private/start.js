$(function(){
	// $('.u-show').html('去许愿？')
	var blt = getUrlData('blt')
	blt = decodeURI(blt)
	if(blt){
		$('.j-start-blt').html('TA想:<br/>' + blt)
		if(blt.length <= 11){
		}else if(blt.length > 11){
			// $('.j-start-blt').html('TA想:<br/>' + blt)
			$('.j-start-blt').addClass('f-sz20')
		}else if(blt.length > 20){
			$('.j-start-blt').addClass('f-sz12')
		}else{
			$('.j-start-blt').addClass('f-sz10')
		}
	}
	$('.j-to-act').on('click',function() {
	// $('.u-show').html('点击我')
		location.href = './act.html'
	})
})