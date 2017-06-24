window.onload=function(){
//选项卡事件
change();
function change(){
	var o_pic=document.getElementById("pic");
	var o_li=o_pic.getElementsByTagName("li");
	var o_dt=o_pic.getElementsByTagName("dt");
	var cur=0;
	for(var i=0;i<o_dt.length;i++){
		o_dt[i].index=i;
		o_dt[i].onmouseover=function(){
			o_li[cur].className="";
			o_li[this.index].className="show";
			cur=this.index;
		};
	}
}
//返回顶部
var back=document.getElementById("back");
var scrollFunc=function(e){
    ee=e || window.event; 
    if(e.wheelDelta){//IE/Opera/Chrome 
    }else if(e.detail){//Firefox 
        scrollTop=getScrollTop();
        a=scrollTop>100?"block":"none";
    } 
}
function getScrollTop(){
var scrollTop=0;
if(document.documentElement&&document.documentElement.scrollTop){
scrollTop=document.documentElement.scrollTop;
}else if(document.body){
scrollTop=document.body.scrollTop;
}
return scrollTop;
} 
/*注册事件*/ 
if(document.addEventListener){ 
    document.addEventListener('DOMMouseScroll',scrollFunc,false); 
}//W3C 
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome 
//客服
var close=document.getElementById("close");
var float1=document.getElementById("float1");
var float2=document.getElementById("float2");
var float3=document.getElementById("float3");
function fu(f1,f2,f3){
	float1.style.display=f1;
	float2.style.display=f2;
	float3.style.display=f3;
}
close.onclick=function(){
	fu("none","block","none");
};
float2.onclick=function(){
	fu("block","none","block");
};
//添加商品数量
var o_buy=document.getElementById("buy");
var o_sum=document.getElementById("sum");
//减商品数量
document.getElementById("reduce").onclick=function(){
	if(o_sum.value=="1"){
	}else{
		o_sum.value--;
		o_buy.innerHTML=o_sum.value;
	} 

};
document.getElementById("add").onclick=function(){
	o_sum.value++;
	o_buy.innerHTML=o_sum.value;
};
//倒计时
	function showTime(){
		var forverTime=new Date('2018/01/01,00:00:00');
		var nowTime=new Date();
		var time=parseInt((forverTime.getTime()-nowTime.getTime())/1000);
		var day=parseInt(time/(24*60*60));
		var hour=parseInt(time/(60*60)%24);
		var minute=parseInt(time/60%60);
		var second=parseInt(time%60);
		day=day<10?'0'+day:day;
		hour=hour<10?'0'+hour:hour;
		minute=minute<10?'0'+minute:minute
		second=second<10?'0'+second:second
		document.getElementById('timer').innerHTML=day+'天'+hour+'小时'+minute+'分钟'+second+'秒';
		if(time<1){
			//clearInterval(stop);
			document.getElementById('timer').innerHTML='活动已经结束';
		}
	}
	var stop=setInterval(showTime,1000);
//配送地址
			var o_address=document.getElementById("address");
			var o_box=document.getElementById("send").innerHTML.split(" ");
			document.getElementById("send_add").onmouseover=function(){
				o_address.style.display="block";
			};
			document.getElementById("send_add").onmouseout=function(){
				o_address.style.display="none";
			};
			changeText(fand("huabei"));
			//console.log(fand("huabei"));
			changeText(fand("dongbei"));
			changeText(fand("huadong"));
			changeText(fand("xibei"));
			changeText(fand("huazhong"));
			changeText(fand("huanan"));
			changeText(fand("xinan"));
			function fand(city){
				return document.getElementById(city).getElementsByTagName("a");
			}
			function changeText(add1){
				for(var i=0;i<add1.length;i++){
					add1[i].onclick=function(){
						o_box[1]=this.innerHTML;
						document.getElementById("send").innerHTML=o_box.join(" ");
						o_address.style.display="none";
					};
				}
			}
};
