/*
*
* Elements
*
*/

$("#agents").slider({ value: 0, min: 0, max: 100, step: 10,
	slide: function(event, ui) {
		$("#agents-val").text(ui.value);
		n_agents = parseInt(ui.value);
		clearAgents();
		initAgents();
		drawAgents();
	}
});

$("#obstacle").slider({ value: 0, min: 0, max: 3, step: 1,
	slide: function(event, ui) {
		$("#obstacle-val").text(ui.value);
		obstacle_type = parseInt(ui.value);
		clearObstacles();
		initObstacles();
		drawObstacles();
	}
});

$("#fps").slider({ value: 30, min: 10, max: 100, step: 10,
	slide: function(event, ui) {
		$("#fps-val").text(ui.value);
		fps = parseInt(ui.value);
	}
});

$("#steps").slider({ value: 1000, min: 0, max: 2500, step: 250,
	slide: function(event, ui) {
		$("#steps-val").text(ui.value);
		time_steps = parseInt(ui.value);
	}
});




/*
*
* Event Handlers
*
*/

document.getElementById("run").onclick = function() {
	if (!run) {
		run = true;
		loop();
	}
};

document.getElementById("stop").onclick = function() {
	run = false;
};

document.getElementById("clear").onclick = function() {
	run = false;
	clearObstacles();
	clearAgents();
	initObstacles();
	initAgents();
	drawObstacles();
	drawAgents();
	time_steps = parseInt($("#steps-val").text());
	$("#counter-val").text(0);
};
