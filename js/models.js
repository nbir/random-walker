/*
*
* Agent
*
*/
function Agent(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

Agent.prototype.move = function () {
	var new_x;
	var new_y;

	do {
		var go_to = Math.floor(Math.random() * 9);

		switch(go_to) {
			case 0:
				new_x = this.x;
				new_y = this.y;
				break;
			case 1:
				new_x = this.x;
				new_y = this.y + 1;
				break;
			case 2:
				new_x = this.x + 1;
				new_y = this.y + 1;
				break;
			case 3:
				new_x = this.x + 1;
				new_y = this.y;
				break;
			case 4:
				new_x = this.x + 1;
				new_y = this.y - 1;
				break;
			case 5:
				new_x = this.x;
				new_y = this.y - 1;
				break;
			case 6:
				new_x = this.x - 1;
				new_y = this.y - 1;
				break;
			case 7:
				new_x = this.x - 1;
				new_y = this.y;
				break;
			case 8:
				new_x = this.x - 1;
				new_y = this.y + 1;
				break;
		}

		var collision = false;

		if (new_x >= COLS || new_x < 0 || new_y >= ROWS || new_y < 0) {
			collision = true;
		}
		else if (go_to != 0) {
			for (var i = 0; i < agents.length; i++) {
				if (agents[i].x == new_x && agents[i].y == new_y) {
					collision = true;
					break;
				}
			}

			for (var i = 0; i < obstacles.length; i++) {
				if (obstacles[i].x == new_x && obstacles[i].y == new_y) {
					collision = true;
					obstacles[i].found = true;
					break;
				}
			}
		}

		if (!collision) {
			this.x = new_x;
			this.y = new_y;
		}

	} while (collision)
};



/*
*
* Obstacle
*
*/
function Obstacle(x, y) {
	this.x = x || 0;
	this.y = y || 0;
	this.found = false;
}
