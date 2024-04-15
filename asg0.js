function handleDrawEvent(){
	// clear screen
	ctx.clearRect(0,0,canvas.width, canvas.height);
        // redraw screen
	ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
  ctx.fillRect(0, 0, 400, 400);

	// get x and y values for v1
	let x1 = document.getElementById("v1_x").value;
	let y1 = document.getElementById("v1_y").value;

	// get x and y values for v2
	let x2 = document.getElementById("v2_x").value;
	let y2 = document.getElementById("v2_y").value;

	// create vectors 1 and 2
	let v1 = new Vector3([x1, y1, 0]);
	let v2 = new Vector3([x2, y2, 0]);

	// draw vectors 1 and 2
	drawVector(v1, "red");
	drawVector(v2, "blue");
}
function handleDrawOperationEvent(){
	// clear screen
	handleDrawEvent();

  // get x and y values for v1
 let x1 = document.getElementById("v1_x").value;
 let y1 = document.getElementById("v1_y").value;

  // get x and y values for v2
  let x2 = document.getElementById("v2_x").value;
  let y2 = document.getElementById("v2_y").value;

  // create vectors 1 and 2
  let v1 = new Vector3([x1, y1, 0]);
  let v2 = new Vector3([x2, y2, 0]);

	let op = document.getElementById("op").value;
	let scalar = document.getElementById("scalar").value;

	let v3 = new Vector3([0,0,0]);
	v3.set(v1);
	let v4 = new Vector3([0,0,0]);
	v4.set(v2);

	switch(op){
		case "add":
			console.log("ADD");
			v3.add(v2);
			for(let i = 0; i < 3; i++){
				console.log(v3.elements[i]);
			}
			drawVector(v3, "green");
			return;
		case "sub":
			v3.sub(v2);
			drawVector(v3, "green");
			return;
		case "mult":
			v3.mul(scalar);
			v4.mul(scalar);
			drawVector(v3, "green");
			drawVector(v4, "green");
			return;
		case "div":
			v3.div(scalar);
			v4.div(scalar);
			drawVector(v3, "green");
			drawVector(v4, "green");
			return;
		case "dot":
			console.log("Angle: " + Vector3.dot(v3, v4));
			return;
		case "cross":
			let v3 = Vector3.cross(v1, v2);
			console.log((v3.magnitude())/2);
			return;
		case "magn":
			console.log("Vector 1 magnitude: " + v3.magnitude());
			console.log("Vector 2 magnitude: " + v4.magnitude());
			return;
		case "nrm":
			v3.normalize();
			v4.normalize();
			drawVector(v3, "green");
			drawVector(v4, "green");
			return;
	}
}
function drawVector(v, color){
	ctx.beginPath();

	// Origin is the center of canvas
	ctx.moveTo(canvas.width / 2, canvas.height / 2);

	// displacement from origin in the x direction
	let x = (canvas.width / 2) + (v.elements[0] * 20);

	// displacement from origin in the y direction
	let y = (canvas.height / 2) - (v.elements[1] * 20);

	ctx.lineTo(x, y);
	ctx.strokeStyle = color;
	ctx.stroke();
}

function main(){
	// Retrieve <canvas> element
	canvas = document.getElementById('cnv');
	if(!canvas){
		console.log('Failed to retrieve the <canvas> element');
		return;
	}

	// Get the rendering context for 2DCG
	ctx = canvas.getContext('2d');

	// Draw a blue rectangle
	ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
	ctx.fillRect(0, 0, 400, 400);

	let v1 = new Vector3([1000, 432, -56.3]);
	let v2 = new Vector3([-999, 23, 0]);
	v1.add(v2);
	console.log(v1.elements);
	//drawVector(v1, "red");
}
