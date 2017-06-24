window.onload=function(){
var close=document.getElementById("close");
var float1=document.getElementById("float1");
var float2=document.getElementById("float2");
var float3=document.getElementById("float3");
var o_f1=document.getElementById("f1");
var o_f2=document.getElementById("f2");
var o_f3=document.getElementById("f3");
var o_f4=document.getElementById("f4");
var o_f5=document.getElementById("f5");
var o_f6=document.getElementById("f6");
var o_f7=document.getElementById("f7");
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
//banner淡入轮播
function fade(){
		var imgs=document.getElementById("imgs");
		var o_li=imgs.getElementsByTagName("li");
		var span=imgs.getElementsByTagName("span");
		var cur=0;
		function fadeOut(){
			o_li[cur].className="";
			span[cur].className="";
		}
		function fadeIn(){
			o_li[cur].className="show";
			span[cur].className="active";
		}
		var time;
		function changeFade(){
			fadeOut();
			cur++;
			if(cur>2) cur=0;
			fadeIn();
			time=setTimeout(changeFade,4000);
		}
		changeFade();
		imgs.onmouseover=function(){
			clearTimeout(time);
		};
		imgs.onmouseout=function(){
			time=setTimeout(changeFade,4000);
		}
		for(var i=0;i<span.length;i++){
			span[i].index=i;
			span[i].onclick=function(){
				fadeOut();
				cur=this.index;
				fadeIn();
			}
		}
	}
fade();
//选项卡功能
	var ul=document.getElementById("title");
	var o_li=ul.getElementsByTagName("li");
	var buy=document.getElementById("buy");
	var o_ul=buy.getElementsByTagName("ul");
	var _index=0;
	for(var i=0;i<o_li.length;i++){
		o_li[i].index=i;
		o_li[i].onmouseover=function(){
				o_li[_index].className="";
				o_ul[_index].className="";
				o_ul[this.index].className="dis";
				o_li[this.index].className="red";
				_index=this.index;
		}
	}
// 评论区焦点轮播
var dis=document.getElementById("dis");
var o_dl=dis.getElementsByTagName("dl");
var o_dl_w=window.getComputedStyle(o_dl[0],null);
var dl_width=130;
dis.style.height=dl_width*(o_dl.length/2)+"px";
dis.style.top=-110+"px";
var animated=false;
setInterval(change,2000)
function change(){
	if(animated){
		return;
	}
	animate(-110);
}
change();
function animate(offset){
	animated=true;
	var time=300;
	var interval=30;
	var speed=offset/(time/interval);
	var top=parseInt(dis.style.top)+offset;
	function go(){
		if(speed<0&&parseInt(dis.style.top)>top){
			dis.style.top=parseInt(dis.style.top)+speed+"px";
			setTimeout(go,interval);
		}else{
			if(parseInt(dis.style.top)-110){
				var a=o_dl[0].cloneNode(true);
				var b=o_dl[1].cloneNode(true);
				dis.appendChild(a);
				dis.appendChild(b);
				dis.removeChild(o_dl[1]);
				dis.removeChild(o_dl[0]);
				dis.style.top=-110+"px";
			}
			animated=false;
		}
	}
	go();
}
//返回顶部
var o_back=document.getElementById("back_top");
var o_floor=document.getElementById("floor");
var o_floor_a=document.getElementsByTagName("a");
	function scroll(){
		if(document.documentElement.scrollTop){
			return document.documentElement.scrollTop;
		}else if(document.body.scrollTop){
			return document.body.scrollTop;
		}
	}
	floor();
	function floor(){
		 if(scroll()>640){
		 	o_floor.style.display="block";
		 }
		 if(scroll()>1210&&scroll()< 1930){
		 	o_f1.style.color="#fff";o_f1.style.backgroundColor="#607c0e";
		 	o_f2.style.color="#8e693d";o_f2.style.backgroundColor="#fff";
		 	o_f3.style.color="#1e1c1c";o_f3.style.backgroundColor="#fff";
		 	o_f4.style.color="#4c1b0e";o_f4.style.backgroundColor="#fff";
		 	o_f5.style.color="#6e7b89";o_f5.style.backgroundColor="#fff";
		 	o_f6.style.color="#fe5075";o_f6.style.backgroundColor="#fff";
		 	o_f7.style.color="#20110b";o_f7.style.backgroundColor="#fff";
		 }
		 else if(scroll()>=1930&&scroll()<2670){
		 	o_f1.style.color="#607c0e";o_f1.style.backgroundColor="#fff";
		 	o_f2.style.color="#fff";o_f2.style.backgroundColor="#8e693d";
		 	o_f3.style.color="#1e1c1c";o_f3.style.backgroundColor="#fff";
		 	o_f4.style.color="#4c1b0e";o_f4.style.backgroundColor="#fff";
		 	o_f5.style.color="#6e7b89";o_f5.style.backgroundColor="#fff";
		 	o_f6.style.color="#fe5075";o_f6.style.backgroundColor="#fff";
		 	o_f7.style.color="#20110b";o_f7.style.backgroundColor="#fff";
		 }
		 else if (scroll()>=2670&&scroll()<3390) {
		 	o_f1.style.color="#607c0e";o_f1.style.backgroundColor="#fff";
		 	o_f2.style.color="#8e693d";o_f2.style.backgroundColor="#fff";
		 	o_f3.style.color="#fff";o_f3.style.backgroundColor="#1e1c1c";
		 	o_f4.style.color="#4c1b0e";o_f4.style.backgroundColor="#fff";
		 	o_f5.style.color="#6e7b89";o_f5.style.backgroundColor="#fff";
		 	o_f6.style.color="#fe5075";o_f6.style.backgroundColor="#fff";
		 	o_f7.style.color="#20110b";o_f7.style.backgroundColor="#fff";
		 }
		 else if (scroll()>=3390&&scroll()<4130) {
		 	o_f1.style.color="#607c0e";o_f1.style.backgroundColor="#fff";
		 	o_f2.style.color="#8e693d";o_f2.style.backgroundColor="#fff";
		 	o_f3.style.color="#1e1c1c";o_f3.style.backgroundColor="#fff";
		 	o_f4.style.color="#fff";o_f4.style.backgroundColor="#4c1b0e";
		 	o_f5.style.color="#6e7b89";o_f5.style.backgroundColor="#fff";
		 	o_f6.style.color="#fe5075";o_f6.style.backgroundColor="#fff";
		 	o_f7.style.color="#20110b";o_f7.style.backgroundColor="#fff";
		 }
		 else if (scroll()>=4130&&scroll()<4830) {
		 	o_f1.style.color="#607c0e";o_f1.style.backgroundColor="#fff";
		 	o_f2.style.color="#8e693d";o_f2.style.backgroundColor="#fff";
		 	o_f3.style.color="#1e1c1c";o_f3.style.backgroundColor="#fff";
		 	o_f4.style.color="#4c1b0e";o_f4.style.backgroundColor="#fff";
		 	o_f5.style.color="#fff";o_f5.style.backgroundColor="#6e7b89";
		 	o_f6.style.color="#fe5075";o_f6.style.backgroundColor="#fff";
		 	o_f7.style.color="#20110b";o_f7.style.backgroundColor="#fff";
		 }
		 else if (scroll()>=4830&&scroll()<5570) {
		 	o_f1.style.color="#607c0e";o_f1.style.backgroundColor="#fff";
		 	o_f2.style.color="#8e693d";o_f2.style.backgroundColor="#fff";
		 	o_f3.style.color="#1e1c1c";o_f3.style.backgroundColor="#fff";
		 	o_f4.style.color="#4c1b0e";o_f4.style.backgroundColor="#fff";
		 	o_f5.style.color="#6e7b89";o_f5.style.backgroundColor="#fff";
		 	o_f6.style.color="#fff";o_f6.style.backgroundColor="#fe4f74";
		 	o_f7.style.color="#20110b";o_f7.style.backgroundColor="#fff";
		 }
		 else if (scroll()>=5570) {
		 	o_f1.style.color="#607c0e";o_f1.style.backgroundColor="#fff";
		 	o_f2.style.color="#8e693d";o_f2.style.backgroundColor="#fff";
		 	o_f3.style.color="#1e1c1c";o_f3.style.backgroundColor="#fff";
		 	o_f4.style.color="#4c1b0e";o_f4.style.backgroundColor="#fff";
		 	o_f5.style.color="#6e7b89";o_f5.style.backgroundColor="#fff";
		 	o_f6.style.color="#fe5075";o_f6.style.backgroundColor="#fff";
		 	o_f7.style.color="#fff";o_f7.style.backgroundColor="#20110b";
		 }
		 else{
		 	o_floor.style.display="none";
		 }
	}
	var timer;
	var o_time=false;
	o_f7.onclick=function(){if(o_time){return;}timeCat(5580,5570);};
	o_f6.onclick=function(){if(o_time){return;}timeCat(4840,4830);};
	o_f5.onclick=function(){if(o_time){return;}timeCat(4140,4130);};
	o_f4.onclick=function(){if(o_time){return;}timeCat(3400,3390);};
	o_f3.onclick=function(){if(o_time){return;}timeCat(2680,2670);};
	o_f2.onclick=function(){if(o_time){return;}timeCat(1940,1930);};
	o_f1.onclick=function(){if(o_time){return;}timeCat(1220,1210);};
	function timeCat(tar_top,now_top){
		o_time=true;
		function go(){
			var o_now_top=document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed=Math.floor((tar_top-o_now_top))/5;
			if(Math.floor(ispeed)!=0){
				document.documentElement.scrollTop=document.body.scrollTop +=ispeed;
				setTimeout(go,30);
			}
			else {
				if(Math.floor(ispeed)==0){
					clearTimeout(timer);
				}
			o_time=false;
			}
		}
		go();
	}
	var isTop=true;
	var time;
	window.onscroll=function(){
		floor();
		if(!isTop){
		 	clearInterval(time);
		}
		isTop=false;
	};
	o_back.onclick=function(){
		time=setInterval(function(){
			var o_top=document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed=Math.floor(- o_top/5);
			document.documentElement.scrollTop=document.body.scrollTop =o_top+ispeed;
			isTop=true;
			if(o_top==0){
				clearInterval(time);
			}
		},30);
	};
};
