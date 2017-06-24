window.onload=function(){
	var o_slide=document.getElementById("slide");
	var width=window.screen.width;
	console.log(width);
	if(width>=320&&width<768){
		o_slide.style.top="16rem";
	}else{
		o_slide.style.top="5.8rem";
	}
	window.onscroll=function(){
		console.log(top());
		if(top()>200){
			console.log("大于200");
			o_slide.style.height = "6.4rem";
		}else{
			console.log("小于200");
			o_slide.style.height = "4.8rem";
		}
	};
	function top(){
		var o_top = document.documentElement.scrollTop ||
		document.body.scrollTop;
		return o_top;
	}
};