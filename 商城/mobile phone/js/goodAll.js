window.onload=function(){
	//添加商品数量
	var o_sum=document.getElementById("sum");
	var o_box=document.getElementById("bg_box");
	var o_pay=document.getElementById("pay_box");
	document.getElementById("hide").onclick=function(){
		o_box.style.bottom="-86%";
		o_pay.style.display="none";
	};
	document.getElementById("reduce").onclick=function(){
		if(o_sum.value=="1"){
		}
		else o_sum.value--;
	};
	document.getElementById("add").onclick=function(){
		o_sum.value++;
	};
	//够买事件
	var o_toBuy=document.getElementById("to_buy");
	o_toBuy.onclick=function(){
		o_box.style.bottom="0";
		o_pay.style.display="block";
	};
//选项卡，锚点事件。
	scroll();
	function  scroll() {
			var o_top=document.getElementById("top");
			var o_show=document.getElementById("show");
			var o_badies=document.getElementById("badies");
			var o_discu=document.getElementById("discu");
			var o_nav=document.getElementById("nav");
			function show(argu1,argu2,argu3,opca){
				o_badies.className=argu1;
				o_discu.className=argu2;
				o_nav.className=argu3;
			}
			o_badies.onclick=function(){
				show("col","","");
			};
			o_discu.onclick=function(){
				show("","col","");
			};
			o_nav.onclick=function(){
				show("","","col");
			};
	    	 scrollTop=getScrollTop();
	        if(scrollTop>1300){
	        	o_badies.className="";
	        	o_discu.className="";
	        	o_nav.className="col";
	        }else if(scrollTop>800){
	        	o_badies.className="";
	        	o_discu.className="col";
	        	o_nav.className="";	
	        }else{
	        	o_badies.className="col";
	        	o_discu.className="";
	        	o_nav.className="";
	        }
	}
	var scrollFunc=function(e){
	    e=e || window.event; 
	    if(e.wheelDelta){//IE/Opera/Chrome
	    	scroll();
	    }else if(e.detail){//Firefox 
	       scroll();
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
};