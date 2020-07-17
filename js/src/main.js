(function($){

	// 작업목록==========================================
	var conBox = $('#conBox');
	var slideBox = conBox.find('.slide_box');
	var timed = 500;

	var slideCode = '<div class="slide">\
										<div class="info">\
											<h3>dong-a otsuka</h3>\
											<ul class="clearfix">\
												<li><span class="title">제작 기간</span><span class="text"></span></li>\
												<li><span class="title">유형</span><span class="text"></span></li>\
												<li><span class="title">사용 툴</span><span class="text"></span></li>\
											</ul>\
											<a href="">사이트 보기</a>\
										</div>\
										<img src="">\
										</div>';



	var slideList = [
		{'name':'dong-a otsuka','period':'2020.06','type':'반응형 웹사이트','tool':'ps ai vscode','link':'#','imglink':'work_02.png'},
		{'name':'goyang flower','period':'2020.04','type':'반응형 웹사이트','tool':'ps ai vscode','link':'#','imglink':'work_01.png'}
	]

	for(var i=0; i<slideList.length; i++){
		slideBox.append(slideCode);	
	}
		





	//	console.log(slideLen)
	// 정보 입력-------------------------------------------

	var slide = slideBox.children('.slide');
	var imgLinkCode = '../img/';


	for(var i=0; i<slideList.length; i++){
		
		slide.eq(i).find('h3').text(slideList[i].name); //프로젝트 타이틀
		slide.eq(i).find('a').attr("href",slideList[i].link); //사이트 링크
		slide.eq(i).find('img').attr("src",imgLinkCode + slideList[i].imglink); //이미지 경로
		slide.eq(i).find('li').eq(0).find('.text').text(slideList[i].period); //기간
		slide.eq(i).find('li').eq(1).find('.text').text(slideList[i].type); //유형
		slide.eq(i).find('li').eq(2).find('.text').text(slideList[i].tool); //사용툴
	}


	var cloneSlide  =  slideBox.children('.slide').eq(-1).clone(true);
	slideBox.prepend(cloneSlide);

	slide = slideBox.children('.slide');	
	var slideLen = slide.length;
	slideBox.css({width:slideLen * 100 + '%'});
	
	// 슬라이드------------------------------------------------
	slide.css({position:'relative', width:100 / slideLen + '%'});
	slideBox.css({transform:'translateX('+  -(100 / slideLen) +'%)'});


	var nextBtn = $('.next');
	var prevBtn = $('.prev');
	
	var n = 0;

	nextBtn.on('click',function(e){
		e.preventDefault();
		n += 1;
		slideBox.stop().animate({marginLeft: -n * 100 + '%'}, timed, function(){
			if(n >= slideLen - 2){n = -1;}
			slideBox.css({marginLeft:-n * 100 +'%'});
		})	
	});

	prevBtn.on('click',function(e){
		e.preventDefault();
		n -= 1;
		slideBox.stop().animate({marginLeft: -n * 100 + '%'}, timed, function(){
			if(n <= -1){	n = slideLen - 2;	 }
			slideBox.css({marginLeft: -n * 100 + '%'});
		 });
	})

	//================================================================

})(jQuery);