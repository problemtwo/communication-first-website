window.onload = function() {
	(function setupSmoothPageScrolling() {
		document.getElementById('title-link').onclick = function(e) {
			e.preventDefault();
			document.getElementById('home').scrollIntoView({'behavior':'smooth'});
		};
		document.getElementById('home-link').onclick = function(e) {
			e.preventDefault();
			document.getElementById('home').scrollIntoView({'behavior':'smooth'});
		};
		document.getElementById('aboutus-link').onclick = function(e) {
			e.preventDefault();
			document.getElementById('aboutus').scrollIntoView({'behavior':'smooth'});
		};
		document.getElementById('contact-link').onclick = function(e) {
			e.preventDefault();
			document.getElementById('contact').scrollIntoView({'behavior':'smooth'});
		};
		document.getElementById('product-link').onclick = function(e) {
			e.preventDefault();
			document.getElementById('product').scrollIntoView({'behavior':'smooth'});
		};
		document.getElementById('hamburger').onclick = function(e) {
			var c = document.getElementById('three-fifths').style.visibility;
			document.getElementById('three-fifths').style.visibility = (c === 'visible') ? 'hidden' : 'visible';
		};
	})();
	
	var canvas = document.getElementById('output-motion');
	var context = canvas.getContext('2d');
	
	// https://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-on-html-canvas/3368118
	CanvasRenderingContext2D.prototype.roundedRectangle = function(x,y,w,h,r) {
		this.beginPath();
		this.moveTo()
	}
	
	(function scaleCanvasDPI() {
		canvas.setAttribute('width',getComputedStyle(canvas).getPropertyValue('width').slice(0,-2) * window.devicePixelRatio);
		canvas.setAttribute('height',getComputedStyle(canvas).getPropertyValue('height').slice(0,-2) * window.devicePixelRatio);
	}());

	function drawCircle(sty) {
		context.fillStyle = sty;
		context.beginPath();
		context.arc(canvas.width/2,canvas.height/2,Math.min(canvas.width,canvas.height)/8,0,2*Math.PI);
		context.closePath();
		context.fill();
	}

	setInterval(function() {
		context.fillStyle = '#fff';
		drawCircle('#2b2b2d');
	},1000/30);
};
