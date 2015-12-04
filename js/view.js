function View () {

}

View.prototype.setupPlayer = function(player_class) {
	$('#container').append('<div class=" video_player ' + player_class + '"></div>')
};

View.prototype.setupFrames = function(frames_array) {
	var index = 0
	for (var i = 30 - 1; i >= 0; i--) {
		var index = randomBetween(0, frames_array.length - 1)
		var frame_type = frames_array[index]
		frames_array.splice(index, 1)
		$('#container').append('<div class="frame ' + frame_type + '"></div>')
	};
};

