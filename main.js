window.onload = function() {
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
}
