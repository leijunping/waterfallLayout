window.onload=function(){
	waterfall('main','box');
	var dataInt={"data":[{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'}]};
	window.onscroll=function(){
		if(chechScrollSlide){
			//将数据块渲染到页面的尾部
			var oParent=document.getElementById('main')
			for(var i=0;i<dataInt.data.length;i++){
				var oBox=document.createElement('div');
				oBox.className="box";
				oParent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src="image/waterfall/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
				}
			waterfall('main','box');
		}
	};
};
function waterfall(parent,box){
	//获得main下的所有box元素
	var oParent=document.getElementById('main');
	var oBoxs=getByClass(oParent,box);
	//alert(oBoxs.length);
	//设置整个页面显示的列数
	var oBoxW=oBoxs[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
	//alert(cols);
	//设置main的宽度
	oParent.style.cssText="width:"+oBoxW*cols+'px;margin:0 auto;';
	var hArr=[];//存放每一列高度的数组
	for(var i=0;i<oBoxs.length;i++){
		if(i<cols){
			hArr.push(oBoxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
	        var index=getMinHIndex(hArr,minH);
	        oBoxs[i].style.position='absolute';
	        oBoxs[i].style.top=minH+'px';
	        //oBoxs[i].style.left=oBoxW*index+'px'; or
	        oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
	        hArr[index]+=oBoxs[i].offsetHeight;
		}
	}
	//alert(hArr);
}
//根据class获取元素
function getByClass(parent,clsname){
	var boxArr=[]; //获得main下的所有box元素
	var oElements=parent.getElementsByTagName('*');
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsname){
			boxArr.push(oElements[i]);
		}
	}
	return boxArr;
}
function getMinHIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}
//检测是否具备加载数据块条件
function chechScrollSlide(){
	var oParent=document.getElementById('main');
	var oBoxs=getByclass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	//混杂模式document.body，标准模式document.documentElement
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height)?true:false;
}