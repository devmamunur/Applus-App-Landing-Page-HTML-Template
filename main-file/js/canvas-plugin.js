
// set up global javascript variables

var canvas, gl; // canvas and webgl context

var shaderScript;
var shaderSource;
var vertexShader; // Vertex shader.  Not much happens in that shader, it just creates the vertex's to be drawn on
var fragmentShader; // this shader is where the magic happens. Fragment = pixel.  Vertex = kind of like "faces" on a 3d model.  
var buffer;


/* Variables holding the location of uniform variables in the WebGL. We use this to send info to the WebGL script. */
var locationOfTime;
var locationOfResolution;

var startTime = new Date().getTime(); // Get start time for animating
var currentTime = 0;

function init() {
	// standard canvas setup here, except get webgl context
	canvas = document.getElementById('glscreen');
	gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
	
	// give WebGL it's viewport
	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

	// kind of back-end stuff
	buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(
		gl.ARRAY_BUFFER, 
		new Float32Array([
			-1.0, -1.0, 
			1.0, -1.0, 
			-1.0,  1.0, 
			-1.0,  1.0, 
			1.0, -1.0, 
			1.0,  1.0]), 
		gl.STATIC_DRAW
	); // ^^ That up there sets up the vertex's used to draw onto. I think at least, I haven't payed much attention to vertex's yet, for all I know I'm wrong.

	shaderScript = document.getElementById("2d-vertex-shader");
	shaderSource = shaderScript.text;
	vertexShader = gl.createShader(gl.VERTEX_SHADER); //create the vertex shader from script
	gl.shaderSource(vertexShader, shaderSource);
	gl.compileShader(vertexShader);

	shaderScript   = document.getElementById("2d-fragment-shader");
	shaderSource   = shaderScript.text;
	fragmentShader = gl.createShader(gl.FRAGMENT_SHADER); //create the fragment from script
	gl.shaderSource(fragmentShader, shaderSource);
	gl.compileShader(fragmentShader);

	program = gl.createProgram(); // create the WebGL program.  This variable will be used to inject our javascript variables into the program.
	gl.attachShader(program, vertexShader); // add the shaders to the program
	gl.attachShader(program, fragmentShader); // ^^
	gl.linkProgram(program);	 // Tell our WebGL application to use the program
	gl.useProgram(program); // ^^ yep, but now literally use it.
	
	
	/* 
	
	Alright, so here we're attatching javascript variables to the WebGL code.  First we get the location of the uniform variable inside the program. 
	
	We use the gl.getUniformLocation function to do this, and pass thru the program variable we created above, as well as the name of the uniform variable in our shader.
	
	*/
	locationOfResolution = gl.getUniformLocation(program, "u_resolution");
	locationOfTime = gl.getUniformLocation(program, "u_time");
	
	
	/*
	
	Then we simply apply our javascript variables to the program. 
	Notice, it gets a bit tricky doing this.  If you're editing a float value, gl.uniformf works. 
	
	But if we want to send over an array of floats, for example, we'd use gl.uniform2f.  We're specifying that we are sending 2 floats at the end.  
	
	You can also send it over to the program as a vector, by using gl.uniform2fv.
	To read up on all of the different gl.uniform** stuff, to send any variable you want, I'd recommend using the table (found on this site, but you need to scroll down about 300px) 
	
	https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html#uniforms
	
	*/
	gl.uniform2f(locationOfResolution, canvas.width, canvas.height);
	gl.uniform1f(locationOfTime, currentTime);

	render();
}

function render() {
	var now = new Date().getTime();
	currentTime = (now - startTime) / 1000; // update the current time for animations
	
	
	gl.uniform1f(locationOfTime, currentTime); // update the time uniform in our shader

	window.requestAnimationFrame(render, canvas); // request the next frame

	positionLocation = gl.getAttribLocation(program, "a_position"); // do stuff for those vertex's
	gl.enableVertexAttribArray(positionLocation);
	gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
	gl.drawArrays(gl.TRIANGLES, 0, 6);
}

window.addEventListener('load', function(event){
	init();
});

window.addEventListener('resize', function(event){
	// just re-doing some stuff in the init here, to enable resizing.
	
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
	gl.viewport(0, 0, window.innerWidth, window.innerHeight);
	locationOfResolution = gl.getUniformLocation(program, "u_resolution");
});