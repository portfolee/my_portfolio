var MyGraph3 = function(x, y, p, s){		

	var canvas = document.querySelector('.paper_03');
	var ctx = canvas.getContext('2d');


	var baseColor = "#253A94";
	ctx.lineWidth = 15;
	ctx.lineCap = 'round';
	ctx.strokeStyle = baseColor;
	ctx.font = "40px sans-serif";
	ctx.textAlign = 'center';
	ctx.fillStyle = baseColor;


		var posX = canvas.width / 2;;
		var posY = canvas.height / 2;
		var percent = p ; 
		var skill = s || 'program';
		// var 
		
		var animationCircle;
		var i = 0;
		var CircleGraph = function(){
			animationCircle = function(percent){

				var lineWidth = 15;
				var r    = 80;
				var rect = (r + lineWidth) * 2 + 10;
				ctx.lineWidth = lineWidth;
			
			var myP = function(percent){
				// percent  :  값 / 기준 * 100 -> 값 / 100 * 기준
				var p = (percent / 100 * 2) + 1.5;
				return Math.PI * p;
			};
			// 240은 (반지름 100과, 선두께 15) * 2 계산값보다 10큰 영역으로 설정
			ctx.clearRect(posX - (rect/2), posY - (rect/2), rect, rect);

			ctx.beginPath();
			ctx.arc(posX, posY, r , Math.PI * 1.5 , myP(percent), false);
			ctx.stroke();		
			ctx.textAlign = 'center';
			ctx.fillStyle = baseColor;
			ctx.font = "bold 25px 'Roboto'";
			ctx.fillText(skill, posX, posY);
			ctx.font = "bold 20px 'Roboto'";
			ctx.fillText(percent+ '%', posX, posY + 30);
		};

		i += 1;
		animationCircle( i );
		(i < percent) ? requestAnimationFrame(CircleGraph): 
										cancelAnimationFrame(CircleGraph);
	};
	CircleGraph();
}// MyGraph3(x좌표, y좌표, percent, 스킬명);

// var MyBar = function(x, y, p, t){

// 	var per = p * 2;

// 	ctx.globalAlpha = 0.3;
// 	ctx.lineWidth = 30;

// 	ctx.beginPath();
// 	ctx.moveTo(x,y);
// 	ctx.lineTo(x+200, y);
// 	ctx.stroke();
	
// 	ctx.globalAlpha = 1;
// 	ctx.beginPath();
// 	ctx.moveTo(x,y);
// 	ctx.lineTo(x+ per, y);
// 	ctx.stroke();

// 	ctx.fillStyle = baseColor;
// 	ctx.font = "bold 30px myriadPro";
// 	ctx.textAlign = "left";
// 	ctx.fillText(t, x-15, y+55);

// 	ctx.textAlign = "right";
// 	ctx.fillStyle = "#f07";
// 	ctx.fillText(p + '%', x+225, y+55)
// }

MyGraph3(1,1, 60, 'jQuery');

