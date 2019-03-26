function setupAboutUsPageVisibility() {
	var a = document.getElementById('origin-story');
	var b = document.getElementById('our-roles');
	var c = document.getElementById('team-members');
	var at = document.getElementById('origin-story-text');
	var bt = document.getElementById('our-roles-text');
	var ct = document.getElementById('team-members-text');
	
	a.onclick = function() {
		if(at.style.visibility === 'hidden'){
			a.style.height = '75%';
			b.style.height = '0%';
			c.style.height = '0%';
			at.style.visibility = 'visible';
		}
		else{
			a.style.height = '25%';
			b.style.height = '25%';
			c.style.height = '25%';
			at.style.visibility = 'hidden';
		}
	};
	
	b.onclick = function() {
		if(bt.style.visibility === 'hidden'){
			a.style.height = '0%';
			b.style.height = '75%';
			c.style.height = '0%';
			bt.style.visibility = 'visible';
		}
		else{
			a.style.height = '25%';
			b.style.height = '25%';
			c.style.height = '25%';
			bt.style.visibility = 'hidden';
		}
	};
	
	c.onclick = function() {
		if(ct.style.visibility === 'hidden'){
			a.style.height = '0%';
			b.style.height = '0%';
			c.style.height = '75%';
			ct.style.visibility = 'visible';
		}
		else{
			a.style.height = '25%';
			b.style.height = '25%';
			c.style.height = '25%';
			ct.style.visibility = 'hidden';
		}
	};
};