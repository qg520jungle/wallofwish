// 获取系统&版本
var jucSys={
    getSys:function(){
        var sysJuc={
            ios:/(iPhone|iPad|iPod|iOS)/i,
            android:/(Android)/i,
            wx:/(MicroMessenger)/i
        };
        var nav=navigator.userAgent;
        var system=sysJuc.wx.test(nav)?'wx':sysJuc.ios.test(nav)?'ios':sysJuc.android.test(nav)?'android':'other';
        return system;
    },
    getVersion:function(cb){
        try{
            var version=parseInt(SecrectActivity.getVersionCode());
        }catch(e){
            return false
        }
        var system=this.getSys();
        if(system=='android'){
            version=version/10;
        }
        return version
    }
}

//ajax方法
function getAjax(url,data,array){
    array=$.extend({
        async:"true",
        type:"GET",
        cache:true
    },array);
    try {
        $.ajax(
            {
                url: url,
                type:array.type,
                dataType:"json",
                cache: array.cache,
                async: array.async,
                timeout: 60000,
                data: data,
                complete:function(XHR){
                    if(XHR.status == 200){
                        var data = JSON.parse(XHR.responseText);
                        if (array.suc) {
                            array.suc(data);
                        }
                    }else{
                        if(array.fail){
                            array.fail();
                        }
                    }
                },
                error: function (XMLHttpRequest, textStatus) {
                    if(array.fail){
                        array.fail();
                    }
                }
            }
        );
    }catch (e) {
        console.log(e.name + ":" + e.message);
    }
}

//获取URL参数
var getUrlData=function(name){
    var thisUrl=location.href;
    if(thisUrl.indexOf("?")>0){
        thisUrl=thisUrl.substring(thisUrl.indexOf("?")+1);
    }else{
        return "";
    }
    if(thisUrl.indexOf(name)<0){
        return "";
    }
    var start=thisUrl.indexOf(name)+name.length+1;
    thisUrl=thisUrl.substring(start);
    var end=thisUrl.indexOf("&");
    if(end>0){
        return thisUrl.substring(0,end);
    }else{
        return thisUrl.substring(0);
    }
};


//提示窗
var tips={
    init:function(text){
        if($(".tips-box").length==0){
            var str='<div class="tips-box"><div class="tips">'+text+'</div></div>';
            $("body").append(str);
        }else{
            $(".tips").text(text);
        }
    },
    show:function(text){
        var stat=true;
        tips.init(text);
        var $tipsBox=$(".tips-box");
        $tipsBox.show();
        $tipsBox.bind('touchstart',function(){
            $tipsBox.hide();
            stat=false;
        });
        setTimeout(function(){
            if(stat){
                $tipsBox.hide();
            }
        },2000);
    }
};