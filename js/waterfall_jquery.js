
$(window).on('load',function(){
	waterfall();
	var dataInt={"data":[{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'}]};
	$(window).on('scroll',function(){
		if(checkScrollSlide){
			$.each(dataInt.data,function(index,value){
				var oBox=$('<div>').addClass('box')
				                 .appendTo($('#main'));
				var oPic=$('<div>').addClass('pic').appendTo($(oBox));
				//value是js原生对象
				$('<img>').attr('src','image/waterfall/'+$(value).attr('src'))
				          .appendTo($(oPic));
			})
			waterfall();
		}
	})
})
function waterfall(){
	var $boxs=$('#main>div');//下一代元素
	var w=$boxs.eq(0).outerWidth();//包括padding，border，width不包括
	var cols=Math.floor($(window).width()/w);
	$('#main').width(w*cols).css('margin','0 auto');
	var hArr=[];
	$boxs.each(function(index,value){
		var h=$boxs.eq(index).outerHeight();
        if(index<cols){
        	hArr[index]=h;
        }else{
        	var minH=Math.min.apply(null,hArr);
        	var minHIndex=$.inArray(minH,hArr);//get index in array
        	//value 是dom对象
        	$(value).css({
        		'position':'absolute',
        		'top':minH+'px',
        		'left':minHIndex*w+'px'
        	})
        	hArr[minHIndex]+=$boxs.eq(index).outerHeight();
        }
	})
}
function checkScrollSlide(){
	var $lastBox=$('#main>div').last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight/2);
	var scrollTop=$(window).scrollTop();//获取滚动长度
	var documentH=$(window).height();//获取窗口高度
	return (lastBoxDis<scrollTop+documentH)?true:false;
}