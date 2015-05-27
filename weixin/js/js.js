
$(function(){
	var music = document.getElementById("music");
	$(".first").swipe(
					{
						swipeUp:function(event, direction, distance, duration, fingerCount){
						
						$(this).addClass('shang');
						$(this).next().show().removeClass('xia');
							$(".first").hide()
						},
						swipeDown:function(event, direction, distance, duration, fingerCount){
						
						}
						}
						)
	$(".second").swipe(
					{
						swipeUp:function(event, direction, distance, duration, fingerCount){
						$(this).addClass('shang');
						$(this).next().removeClass('xia').show();
							$(".second").hide()
						},
						swipeDown:function(event, direction, distance, duration, fingerCount){
						$(this).addClass('xia');
						$(this).prev().removeClass('shang ').show();
							$(".second").hide()
						}
						}
						)
	$(".three").swipe(
					{
						swipeUp:function(event, direction, distance, duration, fingerCount){
						$(this).addClass('shang');
						$(this).next().removeClass('xia').show();
							$(".three").hide()
						},
						swipeDown:function(event, direction, distance, duration, fingerCount){
						$(this).addClass('xia');
						$(this).prev().removeClass('shang ').show();
							$(".three").hide()
						}
						}
						)
	$(".four").swipe(
					{
						swipeUp:function(event, direction, distance, duration, fingerCount){
						$(this).addClass('shang');
						$(this).next().removeClass('xia').show();
							$(".four").hide()
						},
						swipeDown:function(event, direction, distance, duration, fingerCount){
						$(this).addClass('xia');
						$(this).prev().removeClass('shang ').show();
							$(".four").hide()
						}
						}
						)
	$(".five").swipe(
					{
						swipeUp:function(event, direction, distance, duration, fingerCount){
						$(this).addClass('shang');
						$(this).next().removeClass('xia').show();
							$(".five").hide()
						},
						swipeDown:function(event, direction, distance, duration, fingerCount){
						$(this).addClass('xia');
						$(this).prev().removeClass('shang ').show();
							$(".five").hide()
						}
						}
						)
	$(".six").swipe(
					{
						swipeUp:function(event, direction, distance, duration, fingerCount){
						$(this).addClass('shang');
						$(this).next().removeClass('xia').show();
							$(".six").hide()
						},
						swipeDown:function(event, direction, distance, duration, fingerCount){
						$(this).addClass('xia');
						$(this).prev().removeClass('shang ').show();
							$(".six").hide()
						}
						}
						)
	$(".seven").swipe(
					{
						swipeUp:function(event, direction, distance, duration, fingerCount){
						
						},
						swipeDown:function(event, direction, distance, duration, fingerCount){
						$(this).addClass('xia');
						$(this).prev().removeClass('shang ').show();
							$(".seven").hide()

						
						}
						}
		)
	$(".rotate").click(function(){
				
				if(music.paused==true){
					music.play();
					$(".rotate").addClass('current2')
				}else{
					music.pause();
					$(".rotate").removeClass('current2')
				}
			})
	$(".fx").click(function(){
			$(".guanzhu").show()
		});
		$(".guanzhu").click(function(){
			$(".guanzhu").hide()
		});

})
document.onreadystatechange=function(){
	  		if(document.readyState=="complete"){
	  			$("#top").hide();
	  			$(".first").show();
	  			$(".music").show();	
	  			music.play();
	  			}
	  		}