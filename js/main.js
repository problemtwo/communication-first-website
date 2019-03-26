window.onload = function() {
	setupSmoothPageScrolling();
	setupAboutUsPageVisibility();
	
	document.getElementById('contact-send').onclick = function() {
		var name = document.getElementById('contact-name').value;
		var email = document.getElementById('contact-email').value;
		var subject = document.getElementById('contact-subject').value;
		var message = document.getElementById('contact-message').value;
		window.open('mailto:&subject='+'Message from ' + name + ' (' + email + '):' + subject + '&message=' + message);
	}
	
	// https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
	var canvas = document.getElementById('output-motion');
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, canvas.width/canvas.height, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer({'canvas':canvas});
	renderer.setSize(window.innerWidth*.9,window.innerHeight*.5);
	//document.body.appendChild(renderer.domElement);
	
	window.onresize = function() {
		renderer.setSize(window.innerWidth*.9,window.innerHeight*.5);
	}
	
	var loader = new THREE.GLTFLoader();
	var model;
	
	loader.load(
		'res/blender/Hand.gltf',
		function(result) {
			// var obj = result.scene.children[0];
			var geometry = result.scene.children[0].children[1].geometry;
			var material = new THREE.MeshBasicMaterial({'color':0x2892D7,'skinning':true});
			var model = new THREE.SkinnedMesh(geometry,material);
			model.scale.set(0.75,0.75, 0.75);
			scene.add(model);
			
			var armature = new THREE.Skeleton([result.scene.children[0].children[0]]);
			model.add(result.scene.children[0].children[0]);
			model.bind(armature);
			
			camera.position.z = 2;

			var animate = function () {
				requestAnimationFrame( animate );
				
				armature.bones[0].rotation.x += 0.1;
				armature.bones[0].rotation.y += 0.1;
				armature.bones[0].rotation.z += 0.1;
		
				// cube.rotation.x += 0.01;
				// cube.rotation.y += 0.01;
		
				renderer.render( scene, camera );
			};
		
			animate();
		}
	);
	
	// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	// var cube = new THREE.Mesh( geometry, material );
	// scene.add( cube );
};
